import { NextRequest } from "next/server"
import OpenAI from "openai"
import libraryData from "@/data/library-items.json"

// Build library context once at module level
const libraryContext = (libraryData as any[])
  .filter((item) => item.title)
  .map(
    (item) =>
      `[${(item.type || "other").toUpperCase()}] ${item.title} — ${item.description.slice(0, 200)} (Skills: ${item.skills.join(", ")}${item.video ? ", has video" : ""})`
  )
  .join("\n")

const SYSTEM_PROMPT = `You are Goose, the Golf Goose AI practice coach. You help golfers find the right drills, feels, and games from the Golf Goose library to improve their game.

When a golfer describes their swing faults, misses, or goals, recommend 2-4 specific items from the library below. Always reference items by their exact title in **bold**. Briefly explain why each recommendation fits their issue.

Be concise, friendly, and golf-knowledgeable. Use a casual, encouraging tone — like a knowledgeable golf buddy. Keep responses under 200 words.

If someone asks about something unrelated to golf practice, gently steer them back: "I'm best at recommending practice drills — tell me about your game and I'll find the right stuff for you."

LIBRARY (${libraryData.length} items):
${libraryContext}`

// Simple rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>()

export async function POST(request: NextRequest) {
  // Rate limit: 10 messages per minute
  const ip = request.headers.get("x-forwarded-for") || "unknown"
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (entry && now < entry.resetTime) {
    if (entry.count >= 10) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please wait a moment." }),
        { status: 429 }
      )
    }
    entry.count++
  } else {
    rateLimit.set(ip, { count: 1, resetTime: now + 60_000 })
  }

  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Messages required" }),
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      // Fallback response when no API key configured
      return new Response(
        JSON.stringify({
          error: null,
          fallback:
            "Goose is warming up! The AI coach isn't connected yet. In the meantime, check out our free library of 248+ drills, feels, and games at /library.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      )
    }

    const openai = new OpenAI({ apiKey })

    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10),
      ],
      stream: true,
      max_tokens: 500,
      temperature: 0.7,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || ""
          if (text) {
            controller.enqueue(encoder.encode(text))
          }
        }
        controller.close()
      },
    })

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    })
  } catch (error) {
    console.error("Chat error:", error)
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500 }
    )
  }
}

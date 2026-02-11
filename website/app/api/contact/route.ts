import { NextRequest, NextResponse } from "next/server"

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

// Simple in-memory rate limiting (resets on deploy)
const submissions = new Map<string, number>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const lastSubmission = submissions.get(ip)
  if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW) {
    return true
  }
  submissions.set(ip, now)
  if (submissions.size > 1000) {
    const cutoff = now - RATE_LIMIT_WINDOW
    for (const [key, time] of submissions) {
      if (time < cutoff) submissions.delete(key)
    }
  }
  return false
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      )
    }

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      )
    }

    if (GOOGLE_SCRIPT_URL) {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: (name || "").trim(),
          email: email.toLowerCase().trim(),
          subject: subject || "general",
          message: message.trim(),
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        console.error("Google Script error:", response.status)
      }
    } else {
      console.log("[Contact]", { name, email, subject, message: message.substring(0, 100) }, new Date().toISOString())
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}

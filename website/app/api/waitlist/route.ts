import { NextRequest, NextResponse } from "next/server"

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

// Simple in-memory rate limiting (resets on deploy)
const submissions = new Map<string, number>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_SUBMISSIONS = 3

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const lastSubmission = submissions.get(ip)
  if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW) {
    return true
  }
  submissions.set(ip, now)
  // Cleanup old entries periodically
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
    const { email, source } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      )
    }

    // If Google Apps Script URL is configured, forward to Google Sheets
    if (GOOGLE_SCRIPT_URL) {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          source: source || "unknown",
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        console.error("Google Script error:", response.status)
        // Still return success to user — we don't want to leak backend errors
      }
    } else {
      // Log to console in development
      console.log("[Waitlist]", email, source, new Date().toISOString())
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}

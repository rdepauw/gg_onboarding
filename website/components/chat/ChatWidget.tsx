"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { EmailCapture } from "@/components/shared/EmailCapture"

interface Message {
  role: "user" | "assistant"
  content: string
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey! I'm Goose 🪿 — your AI practice coach. Tell me about your swing faults, what went wrong last round, or what part of your game you want to improve. I'll recommend the right drills, feels, and games from our library.",
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState("")
  const [streaming, setStreaming] = useState(false)
  const [userMessageCount, setUserMessageCount] = useState(0)
  const [emailCaptured, setEmailCaptured] = useState(false)
  const [showGate, setShowGate] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmailCaptured(localStorage.getItem("gg_email_captured") === "true")
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, showGate])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const handleSend = useCallback(async () => {
    if (!input.trim() || streaming) return

    const userMessage: Message = { role: "user", content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setStreaming(true)

    const newCount = userMessageCount + 1
    setUserMessageCount(newCount)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages.filter((m) => m !== WELCOME_MESSAGE), userMessage],
        }),
      })

      const contentType = res.headers.get("content-type") || ""

      // Handle JSON response (fallback/error)
      if (contentType.includes("application/json")) {
        const data = await res.json()
        const text = data.fallback || data.error || "Something went wrong."
        setMessages((prev) => [...prev, { role: "assistant", content: text }])
        setStreaming(false)
        if (!emailCaptured && newCount >= 1) setShowGate(true)
        return
      }

      // Stream the response
      const reader = res.body!.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ""

      setMessages((prev) => [...prev, { role: "assistant", content: "" }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        assistantContent += decoder.decode(value, { stream: true })
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantContent,
          }
          return updated
        })
      }

      // After first full response, show email gate
      if (!emailCaptured && newCount >= 1) {
        setShowGate(true)
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Hit some turbulence there. Try sending that again?",
        },
      ])
    } finally {
      setStreaming(false)
    }
  }, [input, streaming, messages, userMessageCount, emailCaptured])

  function handleEmailSuccess() {
    setEmailCaptured(true)
    setShowGate(false)
  }

  const needsGate = showGate && !emailCaptured

  return (
    <>
      {/* Floating bubble */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-20 md:bottom-6 right-4 z-[60] w-14 h-14 rounded-full bg-goose-green text-black flex items-center justify-center shadow-lg shadow-goose-green/30 hover:shadow-goose-green/50 hover:scale-105 transition-all"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-20 md:bottom-6 right-4 z-[60] w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="text-lg">🪿</span>
                <div>
                  <h3 className="font-display font-bold text-sm text-white">
                    Ask Goose
                  </h3>
                  <p className="font-mono text-[9px] text-goose-green tracking-wide uppercase">
                    AI Practice Coach
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 relative">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "ml-auto bg-goose-green/20 text-white border border-goose-green/20"
                      : "mr-auto bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                  )}
                >
                  {msg.content.split("\n").map((line, j) => (
                    <p key={j} className={j > 0 ? "mt-2" : ""}>
                      {line.split(/(\*\*[^*]+\*\*)/).map((part, k) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={k} className="text-white font-semibold">
                            {part.slice(2, -2)}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  ))}
                </motion.div>
              ))}

              {streaming && (
                <div className="flex items-center gap-1.5 px-4 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-goose-green/60 animate-bounce [animation-delay:0ms]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-goose-green/60 animate-bounce [animation-delay:150ms]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-goose-green/60 animate-bounce [animation-delay:300ms]" />
                </div>
              )}

              <div ref={messagesEndRef} />

              {/* Email gate overlay */}
              {needsGate && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="sticky bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 via-zinc-900/95 to-transparent pt-12 pb-2 -mx-4 px-4"
                >
                  <div className="text-center rounded-2xl border border-goose-green/20 bg-zinc-900 p-5">
                    <p className="text-lg mb-1">🪿</p>
                    <h4 className="font-display font-bold text-sm text-white mb-1">
                      Enter your email to keep chatting
                    </h4>
                    <p className="text-[11px] text-zinc-500 mb-3">
                      One email = unlimited coaching + full drill library access.
                    </p>
                    <EmailCapture
                      source="chat-widget"
                      buttonText="Continue Chatting"
                      placeholder="your@email.com"
                      successMessage="You're in! Ask away."
                      variant="stacked"
                      onSuccess={handleEmailSuccess}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="px-4 py-3 border-t border-zinc-800 flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  needsGate
                    ? "Enter your email above..."
                    : "Describe your swing fault..."
                }
                disabled={needsGate || streaming}
                className="flex-1 h-10 rounded-xl border border-zinc-700 bg-zinc-800/80 px-3 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goose-green/50 disabled:opacity-50 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming || needsGate}
                className="h-10 w-10 rounded-xl bg-goose-green text-black flex items-center justify-center hover:bg-goose-green/90 disabled:opacity-30 disabled:hover:bg-goose-green transition-all"
              >
                {streaming ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

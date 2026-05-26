"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "bot";
  text: string;
}

const QUICK_QUESTIONS = [
  "Che documenti servono per la Gran Bretagna?",
  "Cosa fare in caso di emergenza medica?",
  "Chi apre il sinistro assicurativo?",
  "Cosa fare appena atterrati all estero?",
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(question: string) {
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.answer || data.error || "Errore nella risposta." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Errore di rete. Riprova tra qualche secondo." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto bg-white">
      <div className="bg-blue-700 text-white px-4 py-4 shadow">
        <h1 className="text-lg font-bold">L astrolabio Assistant</h1>
        <p className="text-blue-200 text-sm">Area Leader — Summer Camp 2026</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
            <p className="font-semibold mb-1">Ciao! Sono il tuo assistente operativo</p>
            <p>Puoi chiedermi informazioni su documenti, viaggi, emergenze e assicurazione.</p>
          </div>
        )}

        {messages.length === 0 && (
          <div className="space-y-2">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Domande rapide</p>
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="w-full text-left text-sm text-gray-800 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg px-3 py-2 transition-colors font-medium"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
              msg.role === "user"
                ? "bg-blue-700 text-white rounded-br-sm"
                : "bg-gray-100 text-gray-800 rounded-bl-sm prose prose-sm max-w-none"
            }`}>
              {msg.role === "bot" ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-gray-200 px-4 py-3 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Scrivi una domanda..."
            disabled={loading}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 disabled:bg-gray-50"
          />
          <button
            onClick={() => sendMessage(input)}
            className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-300 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-lg"
          >
            &#9658;
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "bot";
  text: string;
}

const CATEGORIES = ["Tutti", "Documenti", "Viaggio", "Arrivo", "Emergenze", "Assicurazione"];

const QUICK_QUESTIONS = [
  { label: "Documenti per UK", emoji: "📋", category: "Documenti", q: "Che documenti servono per viaggiare in Gran Bretagna?" },
  { label: "Minori di 14 anni", emoji: "👶", category: "Documenti", q: "I minori di 14 anni hanno bisogno di documenti speciali?" },
  { label: "Studenti INPSieme", emoji: "📋", category: "Documenti", q: "Cosa devo fare per gli studenti beneficiari INPSieme?" },
  { label: "Passaporto Capogruppo", emoji: "📘", category: "Documenti", q: "Il Capogruppo deve inviare il proprio passaporto?" },
  { label: "Anticipo in aeroporto", emoji: "✈️", category: "Viaggio", q: "Con quanto anticipo bisogna arrivare in aeroporto?" },
  { label: "Bagaglio da stiva", emoji: "🧳", category: "Viaggio", q: "Cosa non va messo nel bagaglio da stiva?" },
  { label: "Documenti in volo", emoji: "📄", category: "Viaggio", q: "Come gestire i documenti dei ragazzi durante il volo?" },
  { label: "All atterraggio", emoji: "🛬", category: "Arrivo", q: "Cosa fare appena atterrati all estero?" },
  { label: "Referente non trovato", emoji: "❓", category: "Arrivo", q: "Cosa fare se non trovo il referente in aeroporto?" },
  { label: "Gestione emergenze", emoji: "🚨", category: "Emergenze", q: "Cosa fare in caso di emergenza medica grave?" },
  { label: "Studente malato", emoji: "🏥", category: "Emergenze", q: "Cosa fare se uno studente sta male?" },
  { label: "Polizza Amica", emoji: "🛡️", category: "Assicurazione", q: "Come funziona la Polizza Amica?" },
  { label: "Aprire sinistro", emoji: "📝", category: "Assicurazione", q: "Chi apre il sinistro assicurativo?" },
  { label: "Italian Coordinator", emoji: "🤌", category: "Arrivo", q: "Chi sono gli Italian Coordinator 2026?" },
  { label: "Area Leader", emoji: "🔐", category: "Documenti", q: "Come accedo all Area Leader?" },
  { label: "Contatti emergenza", emoji: "📞", category: "Emergenze", q: "Chi contatto in caso di emergenza?" },
];

export default function LeaderPage() {
  const params = useParams();
  const token = params.token as string;

  const [valid, setValid] = useState<boolean | null>(null);
  const [leaderName, setLeaderName] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verifica token
    fetch("/api/verify-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((data) => {
        setValid(data.valid);
        if (data.valid) setLeaderName(data.leaderName || "");
      })
      .catch(() => setValid(false));
  }, [token]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const filtered = activeCategory === "Tutti"
    ? QUICK_QUESTIONS
    : QUICK_QUESTIONS.filter((q) => q.category === activeCategory);

  async function sendMessage(question: string) {
    if (!question.trim() || loading) return;
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, token }),
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

  // Token non valido
  if (valid === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-6 text-center">
        <span className="text-5xl mb-4">🔒</span>
        <h1 className="text-xl font-bold text-gray-800 mb-2">Link non valido</h1>
        <p className="text-gray-500 text-sm">Questo link non è valido o è scaduto. Contatta il team L'astrolabio a info@lastrolabio.it</p>
      </div>
    );
  }

  // Loading verifica token
  if (valid === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: "#1a3a4a", animationDelay: "0ms" }} />
          <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: "#1a3a4a", animationDelay: "150ms" }} />
          <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: "#1a3a4a", animationDelay: "300ms" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto bg-gray-50">
      <div className="bg-white w-full">
        <img src="/logo-header.jpg" alt="L astrolabio" className="w-full object-cover" style={{maxHeight: "120px", objectPosition: "center"}} />
      </div>
      <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "#1a3a4a" }}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">🧭</span>
          <div>
            <h1 className="text-white font-bold text-base leading-tight">
              {leaderName ? `Ciao, ${leaderName}!` : "L astrolabio Assistant"}
            </h1>
            <p className="text-xs leading-tight" style={{ color: "#7eb8c9" }}>AREA RISERVATA GROUP LEADERS — SUMMER CAMP 2026</p>
          </div>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#2ea84a", color: "white" }}>
          🔒 AREA LEADER
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length > 0 && (
          <div className="flex justify-center mb-2">
            <button
              onClick={() => { setMessages([]); setInput(""); }}
              className="text-xs px-4 py-2 rounded-full border-2 font-semibold transition-colors"
              style={{ borderColor: "#1a3a4a", color: "#1a3a4a", backgroundColor: "white" }}
            >
              ← Torna alla home
            </button>
          </div>
        )}

        {messages.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-4 flex gap-3">
            <span className="text-3xl">🧭</span>
            <div>
              <p className="font-bold text-gray-900 text-base">Come posso aiutarti?</p>
              <p className="text-gray-500 text-sm mt-1">Sono il tuo assistente per il Summer Camp 2026. Chiedimi quello che ti serve!</p>
            </div>
          </div>
        )}

        

        {messages.length === 0 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="whitespace-nowrap text-xs font-semibold px-3 py-1 rounded-full border transition-colors flex-shrink-0"
                style={activeCategory === cat
                  ? { backgroundColor: "#1a3a4a", color: "white", borderColor: "#1a3a4a" }
                  : { backgroundColor: "white", color: "#1a3a4a", borderColor: "#1a3a4a" }}>
                {cat}
              </button>
            ))}
          </div>
        )}

        

        {messages.length === 0 && (
          <div className="grid grid-cols-2 gap-2">
            {filtered.map((item) => (
              <button key={item.label} onClick={() => sendMessage(item.q)}
                className="bg-white hover:shadow-md border border-gray-100 rounded-xl p-3 text-left transition-all">
                <span className="text-2xl block mb-3">{item.emoji}</span>
                <p className="text-xs font-semibold text-gray-800">{item.label}</p>
              </button>
            ))}
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "bot" && <span className="text-xl mb-1">🧭</span>}
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
              msg.role === "user" ? "text-white rounded-br-sm" : "bg-white shadow-sm text-gray-800 rounded-bl-sm"
            }`} style={msg.role === "user" ? { backgroundColor: "#1a3a4a" } : {}}>
              {msg.role === "bot" ? <ReactMarkdown>{msg.text}</ReactMarkdown> : msg.text}
            </div>
            {msg.role === "user" && (
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: "#1a3a4a" }}>GL</div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-end gap-2 justify-start">
            <span className="text-xl mb-1">🧭</span>
            <div className="bg-white shadow-sm rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: "#1a3a4a", animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: "#1a3a4a", animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: "#1a3a4a", animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex gap-2 items-center">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Scrivi la tua domanda..." disabled={loading}
            className="flex-1 border-2 border-gray-400 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 disabled:bg-gray-50 bg-white text-gray-900 placeholder-gray-500" />
          <button onClick={() => sendMessage(input)} disabled={loading || !input.trim()}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0"
            style={{ backgroundColor: input.trim() && !loading ? "#2ea84a" : "#94a3b8" }}>➤</button>
        </div>
      </div>
    </div>
  );
}

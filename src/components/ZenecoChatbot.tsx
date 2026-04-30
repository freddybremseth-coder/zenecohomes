"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type LeadInfo = { name: string; email: string; phone: string; need: string };
type ChatMessage = { role: "assistant" | "user"; text: string };

export function ZenecoChatbot() {
  const [open, setOpen] = useState(false);
  const [lead, setLead] = useState<LeadInfo | null>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hei, jeg kan hjelpe med boliger, tomter og områder i Spania. Først trenger jeg litt kontaktinfo, så kan vi gi konkrete forslag og følge deg opp riktig.",
    },
  ]);

  async function captureLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const nextLead = {
      name: data.name || "",
      email: data.email || "",
      phone: data.phone || "",
      need: data.need || "",
    };
    setLead(nextLead);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: nextLead.need },
      {
        role: "assistant",
        text: "Takk. Jeg har lagret forespørselen i RealtyFlow. Spør meg gjerne om område, budsjett, boligtype eller tomter, så peker jeg deg i riktig retning.",
      },
    ]);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...nextLead,
        source: "zenecohomes-chatbot",
        request_type: "Chatbot lead",
        message: nextLead.need,
      }),
    }).catch(() => {});
    form.reset();
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    const lower = text.toLowerCase();
    const reply = lower.includes("tomt")
      ? "Se Tomter i menyen. Der kan du filtrere på pris, størrelse og regulering. Jeg anbefaler å lagre aktuelle tomter og be om vurdering av vann, strøm, regulering og byggekost."
      : lower.includes("calpe") || lower.includes("altea") || lower.includes("finestrat")
        ? "Det høres ut som Costa Blanca Nord. Der bør vi sammenligne utsikt, tilgang til service hele året, byggekvalitet og betalingsplan."
        : lower.includes("torrevieja") || lower.includes("orihuela")
          ? "Det høres ut som Costa Blanca Sør. Der finnes ofte flere nybygg i lavere prisklasser og kort vei til strand, golf og flyplass."
          : "Fortell gjerne ønsket område, budsjett, soverom, om du vil ha basseng, nær sjø/golf, eller om du vurderer tomt. Da kan vi lage en mer presis shortlist.";
    setMessages((prev) => [...prev, { role: "user", text }, { role: "assistant", text: reply }]);
  }

  return (
    <div className="chatbot-shell">
      {open && (
        <section className="chatbot-panel">
          <header>
            <div>
              <strong>Zen Eco rådgiver</strong>
              <span>Boliger, tomter og kjøpsprosess</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Lukk chat">
              <X size={18} />
            </button>
          </header>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <p className={message.role} key={`${message.role}-${index}`}>{message.text}</p>
            ))}
          </div>
          {!lead ? (
            <form className="chatbot-form" onSubmit={captureLead}>
              <input name="name" placeholder="Navn" required />
              <input name="email" placeholder="E-post" required type="email" />
              <input name="phone" placeholder="Telefon" required />
              <textarea name="need" placeholder="Hva ser du etter?" required />
              <button type="submit"><Send size={15} /> Start rådgivning</button>
            </form>
          ) : (
            <form className="chatbot-input" onSubmit={sendMessage}>
              <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Spør om bolig, tomt eller område" />
              <button type="submit" aria-label="Send"><Send size={16} /></button>
            </form>
          )}
        </section>
      )}
      <button className="chatbot-toggle" type="button" onClick={() => setOpen((value) => !value)}>
        <MessageCircle size={22} />
      </button>
    </div>
  );
}

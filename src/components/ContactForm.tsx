"use client";
import { useState, type FormEvent } from "react";

const FIELDS: { name: keyof FormState; label: string; type: string; placeholder: string }[] = [
  { name: "nombre", label: "Nombre completo", type: "text", placeholder: "María Pérez" },
  { name: "email", label: "Email corporativo", type: "email", placeholder: "maria@empresa.com" },
  { name: "empresa", label: "Empresa", type: "text", placeholder: "Empresa S.A." },
];

type FormState = {
  nombre: string;
  email: string;
  empresa: string;
  mensaje: string;
};

const initial: FormState = { nombre: "", email: "", empresa: "", mensaje: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrate with email backend (Resend / SendGrid). For now, mailto fallback.
    const subject = encodeURIComponent(`Contacto desde aesa.com.py — ${form.empresa || form.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nEmpresa: ${form.empresa}\n\nMensaje:\n${form.mensaje}`
    );
    window.location.href = `mailto:info@aesa.com.py?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "#fff",
        border: "1px solid var(--aesa-line)",
        borderRadius: "24px 24px 0 24px",
        padding: "40px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div className="eyebrow">FORMULARIO</div>
      <h3 className="h-display" style={{ fontSize: 32, margin: "4px 0 8px", color: "var(--aesa-1)" }}>
        Hablemos.
      </h3>
      {FIELDS.map((f) => (
        <label key={f.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", color: "var(--aesa-mute)", textTransform: "uppercase" }}>
            {f.label}
          </span>
          <input
            type={f.type}
            placeholder={f.placeholder}
            value={form[f.name]}
            onChange={(e) => setForm((s) => ({ ...s, [f.name]: e.target.value }))}
            required
            style={{
              padding: "14px 16px",
              border: "1px solid var(--aesa-line)",
              borderRadius: 10,
              fontSize: 15,
              fontFamily: "var(--font-body)",
              outline: "none",
              background: "var(--aesa-bg2)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "var(--aesa-1)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--aesa-line)")}
          />
        </label>
      ))}
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", color: "var(--aesa-mute)", textTransform: "uppercase" }}>
          Mensaje
        </span>
        <textarea
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto…"
          value={form.mensaje}
          onChange={(e) => setForm((s) => ({ ...s, mensaje: e.target.value }))}
          required
          style={{
            padding: "14px 16px",
            border: "1px solid var(--aesa-line)",
            borderRadius: 10,
            fontSize: 15,
            fontFamily: "var(--font-body)",
            outline: "none",
            background: "var(--aesa-bg2)",
            resize: "vertical",
          }}
        />
      </label>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: 4 }}>
        Enviar mensaje →
      </button>
      {status === "sent" && (
        <p style={{ margin: 0, fontSize: 13, color: "var(--aesa-mute)" }}>
          Tu cliente de email se abrirá para enviar el mensaje. Si no se abre, escribinos a info@aesa.com.py.
        </p>
      )}
    </form>
  );
}

"use client";
import { useState } from "react";
import { profile, socialLinks } from "@/constants";
import Reveal from "./Reveal";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fallback: if no Formspree endpoint is configured, open the mail client.
    if (!profile.formEndpoint) {
      const subject = encodeURIComponent(
        `Portfolio message from ${form.name}`
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-card/60 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="container scroll-mt-24 py-20 sm:py-28">
      <Reveal className="text-center">
        <h2 className="section-title">Get In Touch</h2>
        <p className="mx-auto max-w-xl text-gray-400">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-5">
        {/* Info side */}
        <Reveal className="space-y-4 md:col-span-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-2xl border border-line bg-card/60 p-5 transition-colors hover:border-accent/60"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-about-gradient text-[#04121b]">
              <FaEnvelope />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-gray-400">Email</span>
              <span className="block truncate font-medium text-white">
                {profile.email}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-line bg-card/60 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-about-gradient text-[#04121b]">
              <FaMapMarkerAlt />
            </span>
            <span>
              <span className="block text-sm text-gray-400">Location</span>
              <span className="block font-medium text-white">
                {profile.location}
              </span>
            </span>
          </div>

          <div className="flex gap-3 pt-2">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-gray-300 transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </Reveal>

        {/* Form side */}
        <Reveal className="md:col-span-3" delay={120}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className={inputClass}
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Your message..."
              className={`${inputClass} resize-none`}
            />
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                <FaPaperPlane size={14} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-green-400">
                  ✓ Message sent — thanks, I&apos;ll get back to you soon!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

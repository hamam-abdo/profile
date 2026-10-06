"use client";
import { useState } from "react";
import { profile, socialLinks } from "@/constants";
import { HiArrowUpRight } from "react-icons/hi2";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

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
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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

  return (
    <section id="contact" className="scroll-mt-20 pt-24 sm:pt-32">
      <SectionHeading title="Contact" component="Contact" />

      <Reveal className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xl font-semibold tracking-display sm:text-2xl">
            Hiring for a front-end or full-stack role, or need an app built?
          </p>
          <p className="mt-3 text-lg text-muted">
            Email is the fastest way to reach me.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild className="w-full sm:w-auto">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={copyEmail}
              className="w-full sm:w-auto"
            >
              {copied ? "Copied" : "Copy email"}
            </Button>
            <span role="status" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <p className="mt-10 text-muted">
            {profile.city} · {profile.availability}
          </p>
          <ul className="mt-1 flex flex-wrap gap-x-6">
            {socialLinks.map((l) => (
              <li key={l.name}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action"
                >
                  {l.name}
                  <HiArrowUpRight size={12} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-lg border border-line bg-surface p-5 sm:p-8 lg:col-span-7"
        >
          <p className="text-sm font-semibold">Or send a message</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                disabled={status === "sending"}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                disabled={status === "sending"}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              disabled={status === "sending"}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="submit"
              variant="outline"
              disabled={status === "sending"}
              aria-busy={status === "sending"}
              className="w-full sm:w-auto"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>

            <p role="status" className="text-sm font-medium">
              {status === "success" && (
                <span className="text-success">
                  Message sent. I&apos;ll reply by email.
                </span>
              )}
              {status === "error" && (
                <span className="text-error">
                  It didn&apos;t send. Try again, or email me at{" "}
                  <a href={`mailto:${profile.email}`} className="underline">
                    {profile.email}
                  </a>
                  .
                </span>
              )}
            </p>
          </div>
        </form>
      </Reveal>
    </section>
  );
}

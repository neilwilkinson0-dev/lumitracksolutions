"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-xl border border-line bg-white px-4 py-3 text-ink shadow-[0_1px_2px_rgba(28,37,51,0.04)] outline-none transition focus:border-amber focus:ring-4 focus:ring-amber/20 aria-[invalid=true]:border-red-400";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-amber-soft p-8">
        <h2 className="font-display text-2xl font-semibold">Thanks, message received.</h2>
        <p className="mt-2 text-ink-soft">I&apos;ll get back to you as soon as I can.</p>
      </div>
    );
  }

  const v = state.values;
  const e = state.errors ?? {};

  return (
    <form action={formAction} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-medium">Name</label>
          <input id="name" name="name" autoComplete="name" required defaultValue={v?.name}
            aria-invalid={!!e.name} aria-describedby={e.name ? "name-error" : undefined} className={inputClass} />
          {e.name && <p id="name-error" className="mt-1.5 text-sm text-red-700">{e.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="font-medium">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required defaultValue={v?.email}
            aria-invalid={!!e.email} aria-describedby={e.email ? "email-error" : undefined} className={inputClass} />
          {e.email && <p id="email-error" className="mt-1.5 text-sm text-red-700">{e.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="organisation" className="font-medium">
          Organisation <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="organisation" name="organisation" autoComplete="organization" defaultValue={v?.organisation} className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="font-medium">How can I help?</label>
        <textarea id="message" name="message" rows={6} required defaultValue={v?.message}
          aria-invalid={!!e.message} aria-describedby={e.message ? "message-error" : undefined} className={inputClass} />
        {e.message && <p id="message-error" className="mt-1.5 text-sm text-red-700">{e.message}</p>}
      </div>

      {/* Honeypot for spam bots; hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.message && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">{state.message}</p>
      )}

      <div>
        <button type="submit" disabled={pending}
          className="rounded-full bg-amber px-7 py-3 font-semibold text-ink shadow-sm transition-colors hover:bg-amber/85 disabled:opacity-60">
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

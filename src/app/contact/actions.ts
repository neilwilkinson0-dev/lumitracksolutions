"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; organisation: string; message: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "website", 200)) {
    return { status: "success" };
  }

  const values = {
    name: field(formData, "name", 200),
    email: field(formData, "email", 200),
    organisation: field(formData, "organisation", 200),
    message: field(formData, "message", 5000),
  };

  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = "Please tell me your name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.message.length < 10) errors.message = "Please add a little more detail.";
  if (Object.keys(errors).length) {
    return { status: "error", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || `${site.name} website <website@lumitracksolutions.co.uk>`;

  const failure: ContactState = {
    status: "error",
    message: `Sorry, your message couldn't be sent. Please email me directly at ${site.email}.`,
    values,
  };

  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return failure;
  }

  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Organisation: ${values.organisation || "-"}`,
    "",
    values.message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `Website enquiry from ${values.name}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: Resend error", res.status, await res.text());
      return failure;
    }
  } catch (err) {
    console.error("Contact form: request failed", err);
    return failure;
  }

  return { status: "success" };
}

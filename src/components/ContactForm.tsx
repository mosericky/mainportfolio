import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICE_ID = "service_exix12k";
const TEMPLATE_ID = "template_dk0kcan";
const PUBLIC_KEY = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] as string | undefined;

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!PUBLIC_KEY) {
      setStatus("Return 'error!'");
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setStatus("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.get("name"),
          reply_to: data.get("email"),
          message: data.get("message"),
        },
        { publicKey: PUBLIC_KEY },
      );
      form.reset();
      setStatus("Message sent. Thank you!");
    } catch {
      setStatus("Could not send the message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input name="name" placeholder="Your name" required maxLength={100} />
      <input name="email" type="email" placeholder="Your email" required maxLength={200} />
      <textarea name="message" placeholder="Your message" required rows={5} maxLength={3000} />
      <Button type="submit" disabled={sending}>
        {sending ? "Sending..." : "Send message"} <Send />
      </Button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}

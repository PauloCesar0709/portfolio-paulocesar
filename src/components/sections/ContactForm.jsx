import { useId, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { useI18n } from "../../i18n/useI18n";

const cfg = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplate: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// intervalo entre envios (protege a sua cota; apague estas linhas se não quiser)
const COOLDOWN_MS = 30_000;
const LAST_KEY = "contact:last-sent";
const lastSent = () => {
  try { return Number(localStorage.getItem(LAST_KEY)) || 0; } catch { return 0; }
};
const markSent = () => {
  try { localStorage.setItem(LAST_KEY, String(Date.now())); } catch { /* ignorar */ }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "contact.errors.name";
  if (!v.email.trim()) e.email = "contact.errors.emailRequired";
  else if (!emailPattern.test(v.email.trim())) e.email = "contact.errors.emailInvalid";
  if (v.message.trim().length < 10) e.message = "contact.errors.message";
  return e;
}

const base =
  "w-full border bg-card px-5 py-3 text-sm text-white outline-none transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/20";

export default function ContactForm() {
  const { lang, t } = useI18n();
  const uid = useId();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | wait

  const id = (field) => `${uid}-${field}`;
  const sending = status === "sending";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const found = validate(values);
    if (Object.keys(found).length) {
      setErrors(found);
      document.getElementById(id(Object.keys(found)[0]))?.focus();
      return;
    }

    if (Date.now() - lastSent() < COOLDOWN_MS) {
      setStatus("wait");
      return;
    }

    if (!Object.values(cfg).every(Boolean)) {
      console.error("EmailJS não configurado: confira o arquivo .env.local e reinicie o servidor.");
      setStatus("error");
      return;
    }

    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();
    const options = { publicKey: cfg.publicKey };

    setStatus("sending");

    try {
      // 1) a mensagem para você
      await emailjs.send(
        cfg.serviceId,
        cfg.contactTemplate,
        { from_name: name, from_email: email, reply_to: email, message, lang },
        options
      );
      markSent();
      setValues({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("Falha ao enviar pelo EmailJS:", error);
      setStatus("error");
    }
  };

  const statusKey = { success: "contact.status.success", error: "contact.status.error", wait: "contact.status.wait" }[status];

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="my-3 grid max-w-xl gap-4 rounded-xl border border-line p-5 font-sans md:p-6"
    >
      <div>
        <label htmlFor={id("name")} className="sr-only">{t("contact.form.name")}</label>
        <input
          id={id("name")}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          placeholder={t("contact.form.name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${id("name")}-error` : undefined}
          className={`${base} rounded-full ${errors.name ? "border-mac-red" : "border-line"}`}
        />
        {errors.name && (
          <p id={`${id("name")}-error`} className="mt-1.5 pl-5 font-mono text-xs text-mac-red">
            // {t(errors.name)}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={id("email")} className="sr-only">{t("contact.form.email")}</label>
        <input
          id={id("email")}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          placeholder={t("contact.form.email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${id("email")}-error` : undefined}
          className={`${base} rounded-full ${errors.email ? "border-mac-red" : "border-line"}`}
        />
        {errors.email && (
          <p id={`${id("email")}-error`} className="mt-1.5 pl-5 font-mono text-xs text-mac-red">
            // {t(errors.email)}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={id("message")} className="sr-only">{t("contact.form.message")}</label>
        <textarea
          id={id("message")}
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder={t("contact.form.message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id("message")}-error` : undefined}
          className={`${base} min-h-36 resize-y rounded-3xl ${errors.message ? "border-mac-red" : "border-line"}`}
        />
        {errors.message && (
          <p id={`${id("message")}-error`} className="mt-1.5 pl-5 font-mono text-xs text-mac-red">
            // {t(errors.message)}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-sidebar transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={15} aria-hidden="true" />
          {sending ? t("contact.form.sending") : t("contact.form.send")}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`font-mono text-xs ${status === "success" ? "text-green" : "text-mac-red"}`}
        >
          {statusKey ? `// ${t(statusKey)}` : ""}
        </p>
      </div>
    </form>
  );
}
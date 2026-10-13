import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/sections/ContactForm";
import SocialLinks from "../components/sections/SocialLinks";
import { useI18n } from "../i18n/useI18n";

const Brace = ({ children }) => (
  <span aria-hidden="true" className="text-muted">{children}</span>
);

export default function Contato() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-3xl font-mono">
      <Reveal>
        <h1 className="font-sans text-2xl md:text-3xl">
          {t("contact.title")}<Brace>: {"{"}</Brace>
        </h1>

        <div className="pl-4 md:pl-8">
          <h2 className="mt-4 font-sans text-xl md:text-2xl">
            {t("contact.formTitle")}<Brace>: {"{"}</Brace>
          </h2>

          <ContactForm />

          <p className="text-muted" aria-hidden="true">{"},"}</p>

          <h2 className="mt-6 font-sans text-xl md:text-2xl">
            {t("contact.socialsTitle")}<Brace>: {"["}</Brace>
          </h2>

          <SocialLinks />

          <p className="text-muted" aria-hidden="true">{"],"}</p>
        </div>

        <p className="text-muted" aria-hidden="true">{"}"}</p>
      </Reveal>
    </div>
  );
}
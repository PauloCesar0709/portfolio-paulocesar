import { Mail } from "lucide-react";
import { SiGithub, SiInstagram, SiWhatsapp, } from "@icons-pack/react-simple-icons";
import { socials } from "../../data/socials";
import { useI18n } from "../../i18n/useI18n";

// ícone próprio: não dependemos de o pacote ter a marca
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="5" cy="5" r="2.2" />
      <rect x="2.9" y="9" width="4.2" height="12" />
      <path d="M9.5 9h4v1.7c.6-1.1 2-2 3.8-2 3.3 0 4.2 2.1 4.2 5.2V21h-4.2v-6.2c0-1.4-.4-2.5-1.8-2.5-1.5 0-2 1.1-2 2.5V21H9.5z" />
    </svg>
  );
}

const icons = {
  linkedin: LinkedInIcon,
  github: SiGithub,
  instagram: SiInstagram,
  whatsapp: SiWhatsapp,
  email: Mail,
};

export default function SocialLinks() {
  const { t } = useI18n();

  return (
    <ul className="my-3 flex flex-wrap items-center gap-y-3">
      {socials.map(({ id, label, href, brand }, i) => {
        const Icon = icons[id];
        const external = href.startsWith("http");

        return (
          <li key={id} className="flex items-center">
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={external ? t("contact.socialLink", { name: label }) : label}
              style={{ "--brand": brand }}
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-card text-muted transition duration-200 hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white focus-visible:border-[var(--brand)] focus-visible:bg-[var(--brand)] focus-visible:text-white motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-y-1"
            >
              <Icon className="h-5 w-5" color="currentColor" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-full mb-2 whitespace-nowrap rounded-md border border-line bg-sidebar px-2 py-1 font-mono text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                {label}
              </span>
            </a>

            {i < socials.length - 1 && (
              <span aria-hidden="true" className="px-1.5 font-mono text-muted">,</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
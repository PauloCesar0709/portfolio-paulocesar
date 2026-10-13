import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  Download,
  ExternalLink,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useElementWidth } from "../../hooks/useElementWidth";
import { useI18n } from "../../i18n/useI18n";
import { resume } from "../../data/resume";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const STEP = 0.1;
const PAGE_MAX_WIDTH = 860;
const A4_RATIO = 1.414;

const clamp = (z) =>
  Math.round(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z)) * 10) / 10;

export default function ResumeViewer() {
  const { lang, t } = useI18n();
  const { file, downloadName } = resume[lang] ?? resume.pt;
  const fileName = file.split("/").pop();

  const rootRef = useRef(null);
  const scrollRef = useRef(null);
  const width = useElementWidth(scrollRef);

  const [zoom, setZoom] = useState(1);
  const [loaded, setLoaded] = useState({ file: null, pages: 0 });
  const [fullscreen, setFullscreen] = useState(false);

  const pages = loaded.file === file ? loaded.pages : 0;
  const percent = Math.round(zoom * 100);
  const pageWidth = width ? Math.round(Math.min(width, PAGE_MAX_WIDTH) * zoom) : 0;
  const skeletonWidth = pageWidth || 600;
  const canFullscreen =
    typeof document !== "undefined" && document.fullscreenEnabled;

  const pagesLabel = pages
    ? t(pages === 1 ? "resume.pagesOne" : "resume.pagesOther", { count: pages })
    : "";

  useEffect(() => {
    const onChange = () =>
      setFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      rootRef.current?.requestFullscreen?.();
    }
  };

  return (
    <section
      ref={rootRef}
      aria-label={t("resume.viewerLabel")}
      className={`flex flex-col overflow-hidden bg-sidebar ${
        fullscreen
          ? "h-screen"
          : "h-[calc(100dvh-5rem)] min-h-[420px] rounded-xl border border-line"
      }`}
    >
      {/* barra de ferramentas */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-t-2 border-b-line border-t-accent px-4 py-2.5">
        {/* aba do arquivo */}
        <div className="flex min-w-0 items-center gap-2 font-mono text-xs text-accent-text">
          <span
            aria-hidden="true"
            className="rounded bg-mac-red px-1.5 py-0.5 text-[9px] font-bold text-white"
          >
            PDF
          </span>
          <span className="truncate">{fileName}</span>
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px]">
            {lang.toUpperCase()}
          </span>
          {pagesLabel && (
            <span className="hidden text-muted sm:inline">{pagesLabel}</span>
          )}
        </div>

        {/* zoom e tela cheia */}
        <div className="flex items-center gap-1.5 font-mono text-xs">
          <IconButton
            label={t("resume.zoomOut")}
            disabled={zoom <= MIN_ZOOM}
            onClick={() => setZoom((z) => clamp(z - STEP))}
          >
            <ZoomOut size={16} aria-hidden="true" />
          </IconButton>

          <button
            type="button"
            onClick={() => setZoom(1)}
            aria-label={t("resume.zoomReset", { value: percent })}
            className="min-w-[3.25rem] rounded-md px-2 py-1.5 hover:bg-white/5"
          >
            {percent}%
          </button>

          <IconButton
            label={t("resume.zoomIn")}
            disabled={zoom >= MAX_ZOOM}
            onClick={() => setZoom((z) => clamp(z + STEP))}
          >
            <ZoomIn size={16} aria-hidden="true" />
          </IconButton>

          {canFullscreen && (
            <IconButton
              label={fullscreen ? t("resume.exitFullscreen") : t("resume.fullscreen")}
              onClick={toggleFullscreen}
            >
              {fullscreen ? (
                <Minimize2 size={16} aria-hidden="true" />
              ) : (
                <Maximize2 size={16} aria-hidden="true" />
              )}
            </IconButton>
          )}
        </div>

        {/* baixar e abrir */}
        <div className="flex items-center gap-2 text-xs">
          <a
            href={file}
            download={downloadName}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2 font-medium text-sidebar transition hover:brightness-110"
          >
            <Download size={14} aria-hidden="true" />
            {t("resume.download")}
          </a>
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 transition-colors hover:border-accent"
          >
            <ExternalLink size={14} aria-hidden="true" />
            {t("resume.openNewTab")}
          </a>
        </div>
      </div>

      {/* área do documento */}
      <div
        ref={scrollRef}
        tabIndex={0}
        className="flex-1 overflow-auto bg-black/30 p-4 focus-visible:outline-2 focus-visible:outline-accent md:p-6"
      >
        <Document
          key={file}
          file={file}
          className="resume-fade mx-auto w-fit"
          externalLinkTarget="_blank"
          externalLinkRel="noopener noreferrer"
          onLoadSuccess={({ numPages }) => setLoaded({ file, pages: numPages })}
          loading={
            <div role="status">
              <span className="sr-only">{t("resume.loading")}</span>
              <div
                className="animate-pulse rounded-sm bg-white/10"
                style={{ width: skeletonWidth, height: skeletonWidth * A4_RATIO }}
              />
            </div>
          }
          error={
            <div
              role="alert"
              className="max-w-sm rounded-lg border border-line bg-card p-5 text-center text-sm"
            >
              <p>{t("resume.error")}</p>
              <a
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-accent-text underline"
              >
                <ExternalLink size={14} aria-hidden="true" />
                {t("resume.openNewTab")}
              </a>
            </div>
          }
        >
          {pageWidth > 0 &&
            Array.from({ length: pages }, (_, i) => (
              <Page
                key={i + 1}
                pageNumber={i + 1}
                width={pageWidth}
                className="mb-4 overflow-hidden rounded-sm shadow-2xl shadow-black/60 last:mb-0"
                loading={
                  <div
                    className="animate-pulse rounded-sm bg-white/10"
                    style={{ width: pageWidth, height: pageWidth * A4_RATIO }}
                  />
                }
              />
            ))}
        </Document>
      </div>
    </section>
  );
}

function IconButton({ label, children, ...rest }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-line transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line"
      {...rest}
    >
      {children}
    </button>
  );
}
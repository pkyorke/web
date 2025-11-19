import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type BioId = "short" | "medium" | "long";

interface BioDescriptor {
  id: BioId;
  label: string;
  wordHint: string;
  preview: string;
  downloadHref: string;
}

interface PressImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  context?: string;
  credit: string;
  orientation: "portrait" | "landscape";
  downloadHref: string;
}

const bios: BioDescriptor[] = [
  {
    id: "short",
    label: "Short",
    wordHint: "≈60 words",
    preview:
      "P. K. Yorke is a composer and sound artist working with instruments, loudspeakers, and architectures. Their work treats rooms as collaborators, tracing how spaces hold and reshape memory through sound, performance, and installation.",
    downloadHref: "/press/bio-short.md",
  },
  {
    id: "medium",
    label: "Medium",
    wordHint: "≈200 words",
    preview:
      "P. K. Yorke is a composer, percussionist, and sound designer whose work spans concert pieces, sound installations, and collaborations with theatre and dance. Drawing on a background in percussion performance and electroacoustic practice, Yorke writes for instruments and multichannel loudspeaker arrays, often folding field recordings, room responses, and feedback systems into their pieces. Recent projects include works for percussion and electronics, sound designs for experimental theatre, and installation scores that unfold slowly across architectural spaces. Their practice treats rooms as collaborators rather than neutral containers, foregrounding how sound can reveal the way spaces remember people passing through them.",
    downloadHref: "/press/bio-medium.md",
  },
  {
    id: "long",
    label: "Long",
    wordHint: "≈400+ words",
    preview:
      "P. K. Yorke is a composer and sound artist working at the intersection of percussion, spatial audio, and installation. Trained as a classical percussionist, Yorke’s work has expanded from the repertoire of contemporary concert music into a wider field of pieces for loudspeakers, architectures, and collaborative performance environments. Their scores frequently blur the line between fixed media and live performance, using canons of delays, spatialized textures, and unstable feedback systems to turn rooms into active partners in the music’s pacing and form. Yorke has created sound designs for theatre, produced electroacoustic works for multichannel loudspeaker systems, and written for ensembles ranging from solo percussion to chamber groups and electronics. Across these contexts, their practice is guided by a persistent question: how do spaces remember us, and how can sound make that memory audible over time?",
    downloadHref: "/press/bio-long.md",
  },
];

const pressImages: PressImage[] = [
  {
    id: "paul_yorke_stage",
    src: "/press/paul_yorke_stage.jpg",
    alt: "Portrait of P. K. Yorke on stage.",
    title: "Portrait, percussion, stage",
    context: "Stage portrait of P. K. Yorke, 2022.",
    credit: "Photo: N/A",
    orientation: "landscape",
    downloadHref: "/press/paul_yorke_stage.jpg",
  },
  {
    id: "paul_yorke_headshot",
    src: "/press/paul_yorke_headshot.jpg",
    alt: "P. K. Yorke posing for a headshot.",
    title: "Headshot",
    context: "Headshot of Paul Yorke.",
    credit: "Photo: N/A",
    orientation: "portrait",
    downloadHref: "/press/paul_yorke_headshot.jpg",
  },
  {
    id: "paul_yorke_close",
    src: "/press/paul_yorke_close.jpg",
    alt: "A headshot of Paul Yorke in monochromatic red.",
    title: "Red closeup",
    context: "Paul Yorke posing in front of red light.",
    credit: "Photo: Matthew Cue 2023",
    orientation: "portrait",
    downloadHref: "/press/paul_yorke_close.jpg",
  },
];

const randomPressRoute = () => {
  const routes = ["/", "/works", "/about", "/contact"];
  const idx = Math.floor(Math.random() * routes.length);
  return routes[idx];
};

async function copyBioToClipboard(text: string): Promise<boolean> {
  // Try modern async clipboard API first (secure contexts)
  if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to legacy path
    }
  }

  // Fallback: hidden textarea + execCommand
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.left = "-9999px";
    area.style.top = "0";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.focus();
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

const PressPage: React.FC = () => {
  const [activeBioId, setActiveBioId] = useState<BioId>("short");
  const [lightboxImage, setLightboxImage] = useState<PressImage | null>(null);
  const [copiedBio, setCopiedBio] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const activeBio = useMemo(
    () => bios.find((b) => b.id === activeBioId) ?? bios[0],
    [activeBioId]
  );

  const handleCopyBioClick = async () => {
    const ok = await copyBioToClipboard(activeBio.preview);
    if (ok) {
      setCopiedBio(true);
      window.setTimeout(() => setCopiedBio(false), 1600);
    }
  };

  const bioMotion = shouldReduceMotion
    ? { opacity: 1, scale: 1, y: 0 }
    : { opacity: 1, scale: 1, y: 0 };

  const bioInitial = shouldReduceMotion
    ? { opacity: 1, scale: 1, y: 0 }
    : { opacity: 0, scale: 0.98, y: 8 };

  return (
    <section className="space-y-8">
      <header className="space-y-2 max-w-2xl">
        <h2>Press &amp; materials</h2>
        <p className="text-[0.9rem] text-[color:var(--fg-muted)]">
          Materials for presenters. Please credit photographers as indicated in
          filenames when reproducing images.
        </p>
      </header>

      <motion.div
        className="glass-panel relative p-5 sm:p-6 md:p-7"
        whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
      >
        <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />

        <div className="relative z-10 space-y-8 text-[0.9rem] text-[color:var(--fg-soft)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1 max-w-xl">
              <div className="font-mono uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
                Overview
              </div>
              <p className="text-[0.9rem] text-[color:var(--fg-muted)]">
                This page collects bios, photos, and basic materials for
                programs, press, and publicity. For alternate formats or
                translations, please reach out directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/press/press-kit.zip"
                download
                className="inline-flex items-center rounded-lg border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-4 py-2 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
              >
                Download press kit (zip)
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-lg px-4 py-2 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-invert)]"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
                }}
              >
                Contact for details
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="font-mono uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
                  Artist bios
                </div>
                <p className="text-[0.85rem] text-[color:var(--fg-muted)]">
                  Choose the length that fits your program or article. All bios
                  can be copied directly or downloaded as Markdown files.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {bios.map((bio) => {
                  const isActive = bio.id === activeBioId;
                  return (
                    <button
                      key={bio.id}
                      type="button"
                      onClick={() => setActiveBioId(bio.id)}
                      className={[
                        "relative inline-flex items-center rounded-lg border px-3 py-1.5 text-[0.7rem] font-mono uppercase tracking-[0.18em]",
                        isActive
                          ? "border-transparent text-[color:var(--fg-invert)]"
                          : "border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] text-[color:var(--fg-muted)] hover:text-[color:var(--fg-primary)]",
                      ].join(" ")}
                      style={
                        isActive
                          ? {
                              backgroundImage:
                                "linear-gradient(120deg,var(--accent-soft),var(--accent-deep))",
                            }
                          : undefined
                      }
                    >
                      <span>{bio.label}</span>
                      <span className="ml-2 text-[0.65rem] opacity-70">
                        {bio.wordHint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={bioInitial}
              animate={bioMotion}
              transition={{
                duration: shouldReduceMotion ? 0.18 : 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              key={activeBio.id}
              className="relative rounded-[0.5rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)]/80 p-4 sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between gap-3 text-[0.75rem]">
                <div className="font-mono uppercase tracking-[0.18em] text-[color:var(--fg-muted)]">
                  {activeBio.label} bio
                </div>
                <div className="text-[0.7rem] text-[color:var(--fg-muted)]">
                  {activeBio.wordHint}
                </div>
              </div>
              <div className="space-y-3 text-[0.9rem] leading-relaxed text-[color:var(--fg-soft)]">
                {activeBio.preview.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyBioClick}
                  className="inline-flex items-center rounded-lg border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-4 py-1.5 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
                >
                  {copiedBio ? "Copied" : "Copy to clipboard"}
                </button>
                <a
                  href={activeBio.downloadHref}
                  download={`${activeBio.id}-bio.md`}
                  className="inline-flex items-center rounded-lg border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-4 py-1.5 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
                >
                  Download .md
                </a>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <div className="font-mono uppercase tracking-[0.2em] text-[color:var(--fg-muted)]">
                Images
              </div>
              <p className="text-[0.85rem] text-[color:var(--fg-muted)]">
                For programs, press, and publicity. Please credit photographers
                as indicated below each image. Higher-resolution files are
                available via the download links.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pressImages.map((img) => (
                <motion.button
                  key={img.id}
                  type="button"
                  onClick={() => setLightboxImage(img)}
                  className="group flex flex-col overflow-hidden rounded-[0.5rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] text-left"
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -2, scale: 1.01, transition: { duration: 0.18 } }
                  }
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-48 w-full object-cover sm:h-52"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="space-y-1 px-3 py-3 text-[0.8rem]">
                    {img.title && (
                      <div className="font-mono uppercase tracking-[0.18em] text-[color:var(--fg-muted)]">
                        {img.title}
                      </div>
                    )}
                    {img.context && (
                      <p className="text-[0.8rem] text-[color:var(--fg-soft)]">
                        {img.context}
                      </p>
                    )}
                    <p className="text-[0.75rem] text-[color:var(--fg-muted)]">
                      {img.credit}
                    </p>
                    <div className="pt-1">
                      <a
                        href={img.downloadHref}
                        download
                        className="text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--accent-ember)] underline underline-offset-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download JPG
                      </a>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(0,0,0,0.9)]"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-lg border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)] px-3 py-1 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
              onClick={() => setLightboxImage(null)}
            >
              Close
            </button>
            <motion.div
              className="max-h-[80vh] max-w-[90vw] overflow-hidden rounded-[0.5rem] border border-[color:var(--line-subtle)] bg-[color:var(--bg-2)]"
              initial={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.96 }
              }
              animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.96 }
              }
              transition={{
                duration: shouldReduceMotion ? 0.16 : 0.24,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="h-full w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default PressPage;

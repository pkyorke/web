import React from "react";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <section className="space-y-10">
      {/* Title */}
      <header className="space-y-2 max-w-2xl">
        <h2>About</h2>
        <p className="text-[0.9rem] text-[color:var(--fg-muted)]">
          Percussion, sound design, and space—built for rooms, stages, and
          collaborations.
        </p>
      </header>

      {/* Two-column editorial layout */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        {/* Left: main narrative */}
        <div className="space-y-5 text-[0.95rem] leading-relaxed text-[color:var(--fg-soft)]">
          <p>
            P. K. Yorke is a Los Angeles–based percussionist and sound designer
            working with interactive sound design, fixed media, and
            electroacoustic percussion. His music often starts from the
            instrument—mallets, skins, metal—and then unfolds into spatial audio
            systems that turn a room into part of the score.
          </p>
          <p>
            With a background in classical percussion and a degree in percussion
            performance, Yorke has lived inside the standard repertoire: from{" "}
            <em>Khan Variations</em> and <em>See Ya Thursday</em> to orchestral
            masterworks and youth orchestra coaching with the Florida Symphony
            Youth Orchestras. That same precision now drives multichannel sound
            designs: percussive, bouncy, sometimes club-like, in a space where
            Andy Akiho and SOPHIE might feel at home.
          </p>
          <p>
            At CalArts he works closely with the School of Theater, building
            sound for installations and productions including{" "}
            <em>TERAS</em> and <em>The Misanthrope</em> by Cora Badey, with new
            work in development for upcoming plays. Ableton, loudspeakers, and
            percussion become a single system: a way to make a stage feel like a
            living instrument that responds to bodies and light.
          </p>
        </div>

        {/* Right: glass bio and timeline */}
        <div className="space-y-5">
          {/* Snapshot */}
          <motion.div
            className="glass-panel relative p-4 sm:p-5"
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />
            <div className="relative z-10 space-y-2 text-[0.85rem] text-[color:var(--fg-soft)]">
              <div className="font-mono uppercase tracking-[0.22em] text-[color:var(--fg-muted)]">
                Snapshot
              </div>
              <p>
                P. K. Yorke is a Los Angeles–based percussionist and sound
                designer working with interactive sound, electroacoustic
                percussion, and spatial audio. He is an AV Assistant with the
                CalArts School of Theater, where he designs sound for
                performances and new work.
              </p>
            </div>
          </motion.div>

          {/* Selected roles */}
          <motion.div
            className="glass-panel relative p-4 sm:p-5"
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="pointer-events-none absolute inset-px rounded-[0.5rem] border border-[color:var(--glass-border-soft)]" />
            <div className="relative z-10 space-y-2 text-[0.8rem] text-[color:var(--fg-soft)]">
              <div className="font-mono uppercase tracking-[0.22em] text-[color:var(--fg-muted)]">
                Selected roles
              </div>
              <ul className="space-y-1">
                <li>[20XX– ] · AV Assistant, CalArts School of Theater</li>
                <li>
                  [20XX– ] · Sound designer, CalArts School of Theater
                  (productions including <em>TERAS</em>;{" "}
                  <em>The Misanthrope</em> by Cora Badey; new work TBA)
                </li>
                <li>[20XX–20XX] · Instructor, Jazz Hands for Autism</li>
                <li>
                  [20XX–20XX] · Percussion Director, Florida Symphony Youth
                  Orchestras (FSYO)
                </li>
                <li>[20XX–20XX] · MM in Music, California Institute of the Arts</li>
                <li>
                  [20XX–20XX] · BM in Percussion Performance, University of
                  Central Florida
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

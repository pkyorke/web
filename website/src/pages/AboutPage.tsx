import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl md:text-3xl">About</h1>
        <p className="max-w-xl text-xs leading-relaxed text-[#A3A7A0]">
          Short positioning statement here — practice across composition, sound
          art, installation, and tool-building.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
        <article className="space-y-5 text-sm leading-relaxed text-[#D5D8CE]">
          <p>
            [Paragraph about Yorke’s work: practices of listening, spatial
            thinking, how performances and installations treat rooms as active
            partners rather than passive containers.]
          </p>
          <p>
            [Paragraph about media: instrumental music, fixed media,
            site-specific work, collaborations with visual artists and dancers.]
          </p>
          <p>
            [Paragraph about current research interests and communities —
            institutions, ensembles, festivals.]
          </p>
        </article>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/7 bg-[#0C1010]/80 p-4">
            <div className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.25em] text-[#B3C685]">
              Selected bio
            </div>
            <ul className="space-y-1 text-[0.8rem] text-[#D5D8CE]">
              <li>Degrees / institutions</li>
              <li>Residencies / fellowships</li>
              <li>Festivals / commissions</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#5C6D34]/50 bg-[#050607] p-4">
            <div className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.25em] text-[#A3A7A0]">
              Statement
            </div>
            <p className="text-[0.8rem] leading-relaxed text-[#D5D8CE]">
              “[A small pull quote about process and listening.]”
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutPage;

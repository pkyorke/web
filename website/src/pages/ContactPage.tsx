import React from "react";

const ContactPage: React.FC = () => {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl md:text-3xl">Contact</h1>
        <p className="max-w-xl text-xs leading-relaxed text-[#A3A7A0]">
          For commissions, collaborations, and scores, please reach out by
          email. For institutional or press inquiries, include your affiliation
          in the subject line.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        {/* Left: direct info */}
        <div className="space-y-5 text-sm text-[#D5D8CE]">
          <div>
            <div className="text-[0.7rem] font-mono uppercase tracking-[0.25em] text-[#A3A7A0]">
              Email
            </div>
            <a
              href="mailto:info@example.com"
              className="text-sm underline decoration-[#879B4A]/50 underline-offset-4 hover:text-[#F4F5ED]"
            >
              info@example.com
            </a>
          </div>

          <div>
            <div className="mb-1 text-[0.7rem] font-mono uppercase tracking-[0.25em] text-[#A3A7A0]">
              Links
            </div>
            <ul className="space-y-1 text-[0.8rem]">
              <li>
                <a
                  href="#"
                  className="underline decoration-[#879B4A]/40 underline-offset-4"
                >
                  Scores &amp; recordings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline decoration-[#879B4A]/40 underline-offset-4"
                >
                  Institutional profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: simple form shell */}
        <div className="rounded-2xl border border-white/7 bg-[#0C1010]/85 p-5">
          <form
            className="space-y-4 text-xs"
            onSubmit={(e) => {
              e.preventDefault();
              // You can wire this to a backend or form service later.
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1">
                <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-[#A3A7A0]">
                  Name
                </span>
                <input
                  type="text"
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-[#F2F3F0] outline-none ring-0 focus:border-[#879B4A]"
                />
              </label>
              <label className="space-y-1">
                <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-[#A3A7A0]">
                  Email
                </span>
                <input
                  type="email"
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-[#F2F3F0] outline-none ring-0 focus:border-[#879B4A]"
                />
              </label>
            </div>
            <label className="space-y-1 block">
              <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-[#A3A7A0]">
                Message
              </span>
              <textarea
                rows={5}
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-[#F2F3F0] outline-none ring-0 focus:border-[#879B4A]"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex items-center rounded-full px-5 py-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-[#050607]"
              style={{
                backgroundImage:
                  "linear-gradient(120deg,#B3C685,#6F8240)",
              }}
            >
              Send (placeholder)
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

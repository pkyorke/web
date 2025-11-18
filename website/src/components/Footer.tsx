const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-[color:var(--color-border-subtle)] pt-4 text-xs text-[color:var(--color-text-muted)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Praetorius Studio. All rights reserved.</p>
        <p className="font-mono uppercase tracking-[0.2em]">Works console powered by Praetorius</p>
      </div>
    </footer>
  );
};

export default Footer;

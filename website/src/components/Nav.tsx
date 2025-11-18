import { motion, useReducedMotion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/works', label: 'Works' },
  { to: '/about', label: 'About' },
  { to: '/press', label: 'Press' },
  { to: '/contact', label: 'Contact' },
];

const Nav = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="flex flex-col gap-4 border-b border-[color:var(--color-border-subtle)] pb-4 lg:flex-row lg:items-center">
      <div className="text-sm uppercase tracking-[0.3em] text-[color:var(--color-text-muted)]">Praetorius Studio</div>
      <nav className="flex flex-1 justify-end gap-3 text-sm font-medium">
        {links.map((link) => {
          const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive: active }) =>
                `relative rounded-full px-4 py-2 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--olive-500)] ${
                  active ? 'text-[color:var(--color-text-primary)]' : 'text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text-primary)]'
                }`
              }
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="relative z-10">{link.label}</span>
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'var(--gradient-accent)' }}
                  transition={prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Nav;

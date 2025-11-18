import { AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import PageTransition from './components/PageTransition';

const AppShell = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[color:var(--color-bg-root)] text-[color:var(--color-text-primary)]">
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-8 pt-6 sm:px-6 lg:px-10">
        <div className="noise-overlay pointer-events-none" aria-hidden />
        <Nav />
        <div className="flex-1 py-6">
          <AnimatePresence mode="wait">
            <PageTransition pageKey={location.pathname} className="mx-auto max-w-5xl pb-16 pt-6">
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AppShell;

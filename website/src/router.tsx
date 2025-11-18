import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppShell from './AppShell';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import PressPage from './pages/PressPage';
import ContactPage from './pages/ContactPage';

const basename = '/artist-portfolio';

export const AppRouter = () => (
  <BrowserRouter basename={basename}>
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="press" element={<PressPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

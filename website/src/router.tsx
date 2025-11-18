import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppShell from "./AppShell";
import HomePage from "./pages/HomePage";
import WorksPage from "./pages/WorksPage";
import AboutPage from "./pages/AboutPage";
import PressPage from "./pages/PressPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppShell />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/press" element={<PressPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  ),
  {
    // IMPORTANT: match the Vite base for GitHub Pages project site
    basename: "/web",
  }
);

export default router;

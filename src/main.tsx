import { BrowserRouter } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./pages/App.tsx";

import GlobalFonts from "./styles/styles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalFonts />
      <App />
    </BrowserRouter>
  </StrictMode>
);

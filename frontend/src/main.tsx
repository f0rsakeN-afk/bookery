import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@smastrom/react-rating/style.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/Theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);

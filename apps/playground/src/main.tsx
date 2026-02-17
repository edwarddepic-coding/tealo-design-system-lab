import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TealoToaster } from "./components/TealoSonner/TealoSonner";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <TealoToaster position="bottom-right" richColors closeButton />
  </StrictMode>,
);

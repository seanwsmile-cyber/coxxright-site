import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Site } from "@/components/site";
import "@/styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root");

createRoot(root).render(
  <StrictMode>
    <Site />
  </StrictMode>,
);

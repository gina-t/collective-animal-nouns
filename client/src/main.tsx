import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./styles.css";

import App from "./App";
import { TransitionProvider } from "./context/TransitionContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <TransitionProvider>
          <App /> 
        </TransitionProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

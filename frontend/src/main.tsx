import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { WalletProvider } from "./providers/WalletProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <Router>
        <StrictMode>
            <WalletProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </WalletProvider>
        </StrictMode>
    </Router>
);

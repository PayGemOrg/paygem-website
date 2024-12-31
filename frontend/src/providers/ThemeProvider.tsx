// src/providers/ThemeProvider.tsx
import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        // Initial theme detection
        if (
            localStorage.theme === "dark" ||
            (!localStorage.theme &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={darkMode ? "dark" : "light"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="dark:bg-dark-background bg-light-background min-h-screen"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

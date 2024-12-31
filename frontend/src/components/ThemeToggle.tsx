// src/components/ThemeToggle.tsx
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
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

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }
        setDarkMode(!darkMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="px-2 py-1 rounded-lg 
                       bg-light-primary dark:bg-dark-primary 
                       text-light-text dark:text-dark-text 
                       overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {darkMode ? (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center"
                    >
                        <FaMoon className="text-white text-sm" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: 180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -180 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center"
                    >
                        <FaSun className="text-primaryBold" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};

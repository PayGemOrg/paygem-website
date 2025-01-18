/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primaryLight: "#e5f9f7",
                primaryMedium: "#7ee1d5",
                primaryBold: "#2c7a7b",
                light: {
                    primary: "#f9f9f9",
                    secondary: "#f3f4f6",
                    text: "#1f2937",
                    accent: "#3b82f6",
                },
                dark: {
                    primary: "#171923",
                    secondary: "#111827",
                    text: "#f9fafb",
                    accent: "#60a5fa",
                },
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".btn-primary": {
                    borderRadius: "0.375rem", // rounded-md
                    fontSize: "0.875rem", // text-sm
                    paddingLeft: "1.25rem", // px-5
                    paddingRight: "1.25rem",
                    paddingTop: "0.5rem", // py-2
                    paddingBottom: "0.5rem",
                    fontWeight: "500", // font-medium
                    transition: "all 300ms ease-in-out",
                    border: "2px white solid",

                    backgroundColor: "#2c7a7b",
                    color: "white",
                    "&:hover": {
                        opacity: "0.9",
                        boxShadow:
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    },

                    // Focus states
                    "&:focus": {
                        outline: "none",
                        boxShadow: "0 0 0 2px rgba(44, 122, 123, 0.5)",
                    },

                    "@apply bg-primaryBold text-white px-5 py-2 rounded-md hover:bg-primaryMedium transition-all": {},

                    // Dark mode styles
                    "@apply dark:bg-primaryMedium dark:text-black dark:hover:bg-opacity-80 dark:hover:shadow-lg":
                        {},
                },
                ".btn-secondary": {
                    borderRadius: "0.375rem", // rounded-md
                    fontSize: "0.875rem", // text-sm
                    paddingLeft: "1.25rem", // px-5
                    paddingRight: "1.25rem",
                    paddingTop: "0.5rem", // py-2
                    paddingBottom: "0.5rem",
                    fontWeight: "500", // font-medium
                    transition: "all 300ms ease-in-out",

                    // Light mode styles
                    border: "1px solid #2c7a7b", // border-primaryBold
                    color: "#2c7a7b", // text-primaryBold
                    backgroundColor: "transparent",
                    "&:hover": {
                        backgroundColor: "#2c7a7b", // bg-primaryBold
                        color: "white",
                    },

                    // Focus states
                    "&:focus": {
                        outline: "none",
                        boxShadow: "0 0 0 2px rgba(44, 122, 123, 0.5)",
                    },

                    // Dark mode styles
                    "@apply dark:border-primaryMedium dark:text-primaryMedium dark:hover:bg-primaryMedium dark:hover:text-black":
                        {},
                },
            });
        },
    ],
};

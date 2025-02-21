export const Footer: React.FC = () => {
    return (
        <footer className="bg-primaryBold text-white py-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">PayGem</h3>
                        <p className="text-sm text-light-secondary">
                            Simplifying Web3 subscriptions with secure and automated crypto payments.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#features"
                                    className="text-light-accent hover:text-light-primary transition"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="text-light-accent hover:text-light-primary transition"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#support"
                                    className="text-light-accent hover:text-light-primary transition"
                                >
                                    Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-light-accent hover:text-light-primary transition"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-light-accent hover:text-light-primary transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M22 2.75H2A1.25 1.25 0 0 0 .75 4v16c0 .69.56 1.25 1.25 1.25h11.2v-7h-2.35v-2.75h2.35v-2.1c0-2.3 1.4-3.6 3.5-3.6.7 0 1.6.1 2.35.15v2.65h-1.3c-1.1 0-1.45.65-1.45 1.3v1.6h2.6l-.45 2.75h-2.15v7h5.15c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-light-accent hover:text-light-primary transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M21.5 0h-19A2.5 2.5 0 0 0 0 2.5v19A2.5 2.5 0 0 0 2.5 24h19a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 21.5 0zm-13 20H5.5V9H8.5v11zm-1.5-12.25a1.5 1.5 0 1 1 0-3 1.5 1.5 0 1 1 0 3zm14.5 12.25h-3v-5.5c0-1.3-.55-1.95-1.7-1.95s-2.05 1.05-2.05 2.65v4.8H11V9h2.7v1.6a3.6 3.6 0 0 1 3.3-1.85c2.55 0 4.5 1.8 4.5 5.4v5.85z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-light-accent hover:text-light-primary transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M23.95 4.57a10 10 0 0 1-2.83.78 4.94 4.94 0 0 0 2.17-2.72 10.14 10.14 0 0 1-3.13 1.2 4.93 4.93 0 0 0-8.43 4.49A13.97 13.97 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.93 4.93 0 0 0 3.95 4.83 5 5 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 1 19.54a13.9 13.9 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.9 9.9 0 0 0 24 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm text-light-secondary">
                        © {new Date().getFullYear()} PayGem. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

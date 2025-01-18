import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { HowItWorksForMerchants } from "../components/UI/HowItWorksMerchant";
import { SupportedWallets } from "../components/UI/SupportedWallets";
import { MdOutlineControlPoint, MdOutlinePayments, MdOutlineSecurityUpdateGood } from "react-icons/md";
import { useWallet } from "../providers/WalletProvider";
import { useEffect } from "react";

export const Landing: React.FC = () => {
    const { walletConnected } = useWallet();

    useEffect(() => {
        if (walletConnected) {
            window.location.href = "/dashboard"
        }
    }, [walletConnected])
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="flex flex-col justify-center mx-auto w-full py-6 bg-light-secondary"
        >
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8 text-light-text">
                        Why Choose PayGem?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center space-y-4">
                            <MdOutlinePayments className="text-6xl"/>
                            <h3 className="text-xl font-semibold text-light-text">
                                Seamless Payments
                            </h3>
                            <p className="text-green-900 text-center">
                                Automate recurring payments and manage
                                subscriptions effortlessly with MPC wallet
                                integration.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center space-y-4">
                            <MdOutlineSecurityUpdateGood className="text-6xl"/>
                            <h3 className="text-xl font-semibold text-light-text">
                                Secure and Reliable
                            </h3>
                            <p className="text-green-900 text-center">
                                Your payments are safeguarded with state-of-the-art
                                multi-party computation (MPC) technology.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center space-y-4">
                            <MdOutlineControlPoint className="text-6xl"/>
                            <h3 className="text-xl font-semibold text-light-text">
                                Full Control
                            </h3>
                            <p className="text-green-900 text-center">
                                Pause, cancel, or adjust your subscriptions with
                                ease through our user-friendly dashboard.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-12 bg-primaryBold text-white text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Ready to Simplify Your Web3 Subscriptions?
                </h2>
                <p className="text-lg mb-6">
                    Join thousands of users automating their subscription
                    payments securely and effortlessly.
                </p>
                <button className="btn-primary border-white">Get Started Now</button>
            </section>

            <HowItWorksForMerchants />
            <SupportedWallets />
            <Footer />
        </motion.div>
    );
};

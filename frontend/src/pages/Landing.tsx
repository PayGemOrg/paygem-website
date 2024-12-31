import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";

export const Landing: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="flex flex-col justify-center mx-auto w-full py-6"
        >
            <HeroSection />
        </motion.div>
    );
};

import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex w-full justify-between items-center py-4"
        >
            <p className="text-xl font-extrabold">PayGem</p>
            <ul className="flex space-x-3">
                <li>Products</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>Resources</li>
            </ul>
            <section className="flex space-x-2">
                <ThemeToggle />
                <button className="rounded-md font-medium py-[0.3rem] px-4 text-white bg-primaryBold dark:bg-primaryMedium dark:text-black">
                    Connect Wallet
                </button>
            </section>
        </motion.section>
    );
};

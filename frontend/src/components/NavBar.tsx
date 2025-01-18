import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import {
    FaBars,
    FaRegBell,
    FaRegMoneyBillAlt,
    FaRegStar,
    FaTimes,
} from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { SlBriefcase } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useWallet } from "../providers/WalletProvider";

export const Navbar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { walletAddress, connectWallet, disconnectWallet } = useWallet();

    // Sidebar animation variants
    const sidebarVariants = {
        closed: { x: "-100%", transition: { type: "tween", duration: 0.3 } },
        open: { x: 0, transition: { type: "tween", duration: 0.3 } },
    };

    const overlayVariants = {
        closed: {
            opacity: 0,
            pointerEvents: "none" as const,
            transition: {
                duration: 0.3,
            },
        },
        open: {
            opacity: 0.5,
            pointerEvents: "auto" as const,
            transition: {
                duration: 0.3,
            },
        },
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Main Navbar */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex w-full justify-between items-center py-4 px-4"
            >
                {/* Sidebar Toggle (conditionally rendered) */}
                <section className="flex items-center space-x-4">
                    {walletAddress && (
                        <button onClick={toggleSidebar}>
                            <FaBars size={24} />
                        </button>
                    )}
                    <p className="text-xl font-extrabold">PayGem</p>
                </section>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-3">
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>FAQs</li>
                    <li>Resources</li>
                </ul>

                {/* Wallet Connect Button */}
                <section className="flex space-x-2">
                    <ThemeToggle />
                    {!walletAddress ? (
                        <button
                            onClick={connectWallet}
                            className="bg-primaryBold text-white px-5 py-2 rounded-md hover:bg-primaryMedium transition-all"
                        >
                            Connect Wallet
                        </button>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <p className="text-sm text-light-text">
                                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                            </p>
                            <button
                                onClick={disconnectWallet}
                                className="bg-primaryBold text-white px-5 py-2 rounded-md hover:bg-primaryMedium transition-all"
                            >
                                Disconnect
                            </button>
                        </div>
                    )}
                </section>
            </motion.section>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={overlayVariants}
                        className="fixed inset-0 bg-black z-40"
                        onClick={toggleSidebar}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.div
                initial="closed"
                animate={isSidebarOpen ? "open" : "closed"}
                variants={sidebarVariants}
                className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 z-50 shadow-lg"
            >
                <div className="p-4 flex justify-end items-center">
                    <button onClick={toggleSidebar}>
                        <FaTimes size={20} />
                    </button>
                </div>
                <section className="flex flex-col justify-between space-y-12">
                    <ul className="flex flex-col space-y-4 p-4">
                        <Link
                            to={"/dashboard"}
                            className="flex items-center space-x-2 justify-start rounded-md py-1 px-[0.35rem] cursor-pointer transition-all duration-300 hover:bg-primaryLight dark:hover:text-black"
                        >
                            <GrHomeRounded className="text-sm" />
                            <span>Dashboard</span>
                        </Link>
                        <Link
                            to={"/subscriptions"}
                            className="flex items-center space-x-2 justify-start rounded-md py-1 px-[0.35rem] cursor-pointer transition-all duration-300 hover:bg-primaryLight dark:hover:text-black"
                        >
                            <FaRegStar />
                            <span>Subscriptions</span>
                        </Link>
                        <li className="flex items-center space-x-2 justify-start rounded-md py-1 px-[0.35rem] cursor-pointer transition-all duration-300 hover:bg-primaryLight dark:hover:text-black">
                            <CgNotes />
                            <span>Payment History</span>
                        </li>
                        <li className="flex items-center space-x-2 justify-start rounded-md py-1 px-[0.35rem] cursor-pointer transition-all duration-300 hover:bg-primaryLight dark:hover:text-black">
                            <CgNotes />
                            <span>Invoices</span>
                        </li>
                        <li className="flex items-center space-x-2 justify-start rounded-md py-1 px-[0.35rem] cursor-pointer transition-all duration-300 hover:bg-primaryLight dark:hover:text-black">
                            <FaRegMoneyBillAlt /> <span>Upcoming Payments</span>
                        </li>
                        <li className="flex items-center space-x-2 justify-start rounded-md py-1 px-[0.35rem] cursor-pointer transition-all duration-300 hover:bg-primaryLight dark:hover:text-black">
                            <FaRegBell /> <span>Notifications</span>
                        </li>
                    </ul>
                    <ul className="flex flex-col space-y-4 p-4">
                        <li className="flex items-center space-x-2 justify-start rounded-md py-1 px-[0.35rem] cursor-pointer transition-all duration-300 hover:bg-primaryLight dark:hover:text-black">
                            <IoSettingsOutline />
                            <span>Settings</span>
                        </li>
                        <li className="flex items-center space-x-2 justify-start rounded-md py-1 px-[0.35rem] cursor-pointer transition-all duration-300 hover:bg-primaryLight dark:hover:text-black">
                            <BiSupport />
                            <span>Support</span>
                        </li>
                        <li className="flex items-center space-x-2 justify-start rounded-md py-1 px-[0.35rem] cursor-pointer transition-all duration-300 hover:bg-primaryLight dark:hover:text-black">
                            <SlBriefcase />
                            <span>Referrals</span>
                        </li>
                    </ul>
                </section>
            </motion.div>
        </>
    );
};

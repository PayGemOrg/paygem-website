import { motion } from "framer-motion";
import { FaCalendar, FaPlusCircle } from "react-icons/fa";
import { IoMdCheckmark, IoMdMore } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { SubscriptionModal } from "./_components/NewSubscription";
import { useState } from "react";

export const Dashboard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="flex flex-col justify-center mx-auto w-full py-6 px-4 space-y-8"
            >
                <section className="flex w-full justify-between items-center">
                    <p className="flex flex-col text-left">
                        <span className="text-xl font-bold">Welcome Back</span>
                        <span>
                            Here is an overview of all your subscriptions on
                            PayGem
                        </span>
                    </p>
                    <p className="flex items-center space-x-3">
                        <button className="flex items-center space-x-2 btn-secondary">
                            <FaCalendar />
                            <span>01 June 2024</span>
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center space-x-2 btn-primary"
                        >
                            <FaPlusCircle />
                            <span>New Subscription</span>
                        </button>
                    </p>
                </section>
                <section className="w-full flex justify-start items-start space-x-4">
                    <section className="flex flex-col justify-center items-center w-2/3 space-y-3">
                        <div className="flex w-full justify-between space-x-3">
                            <div className="flex justify-center items-center space-x-2 text-sm bg-white border rounded-lg py-2 px-3">
                                <p className="flex space-y-2 flex-col text-left">
                                    <span className="dark:text-black">
                                        Active Subscription
                                    </span>
                                    <span className="font-bold dark:text-black">
                                        2
                                    </span>
                                    <span className="text-green-500">
                                        Total Active Subscription
                                    </span>
                                </p>
                                <p className="rounded-full border p-1">
                                    <IoMdCheckmark />{" "}
                                </p>
                            </div>
                            <div className="flex justify-center items-center space-x-2 text-sm bg-white border rounded-lg py-2 px-3">
                                <p className="flex space-y-2 flex-col text-left">
                                    <span className="dark:text-black">
                                        Active Subscription
                                    </span>
                                    <span className="font-bold dark:text-black">
                                        2
                                    </span>
                                    <span className="text-green-500">
                                        Total Active Subscription
                                    </span>
                                </p>
                                <p className="rounded-full border p-1">
                                    <IoMdCheckmark />{" "}
                                </p>
                            </div>
                            <div className="flex justify-center items-center space-x-2 text-sm bg-white border rounded-lg py-2 px-3">
                                <p className="flex space-y-2 flex-col text-left">
                                    <span className="dark:text-black">
                                        Active Subscription
                                    </span>
                                    <span className="font-bold dark:text-black">
                                        2
                                    </span>
                                    <span className="text-green-500">
                                        Total Active Subscription
                                    </span>
                                </p>
                                <p className="rounded-full border p-1">
                                    <IoMdCheckmark />{" "}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full border bg-white text-black p-2 rounded-lg text-sm">
                            <p className="w-full flex justify-between items-center p-2">
                                <span className="font-bold text-lg">
                                    Recent Subscriptions
                                </span>
                                <span className="text-gray-800">
                                    See all &gt;
                                </span>
                            </p>
                            <section className="flex flex-col space-y-1 justify-center items-center w-full">
                                <div className="flex border w-full justify-between items-center py-2 px-4 rounded-lg">
                                    <p className="flex flex-col items center text-left space-y-2">
                                        <span className="font-medium">
                                            Service B Plus
                                        </span>
                                        <span className="">
                                            Enhanced service package
                                        </span>
                                    </p>
                                    <section className="flex space-x-5 items-center">
                                        <p className="flex flex-col items center text-left">
                                            <span className="">0.01 ETH</span>
                                            <span className="">
                                                Next: 2024-07-25
                                            </span>
                                        </p>
                                        <IoMdMore />
                                    </section>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="flex flex-col justify-center items-center space-y-3 w-1/3">
                        <section className="flex flex-col text-left w-full p-4 text-sm space-y-4 bg-white text-black rounded-lg border">
                            <p className="font-bold mr-auto text-base">
                                Next Renewal
                            </p>
                            <hr />
                            <p className="flex flex-col space-y-2">
                                <span className="font-bold">
                                    Friday, 6 July
                                </span>
                                <span className="flex items-center space-x-2">
                                    <IoTimeOutline />
                                    <span>11.30 - 12.00 (30 min)</span>
                                </span>
                            </p>
                            <p className="flex flex-col space-y-2">
                                <span className="font-bold">
                                    Premium Service A
                                </span>
                                <span>0.1 ETH</span>
                            </p>
                            <hr />
                            <p className="w-full flex justify-between items-center space-x-4">
                                <button className="flex justify-center items-center space-x-2 btn-secondary w-full max-w-[10rem] text-center">
                                    <span className="dark:!text-black">
                                        Cancel Renewal
                                    </span>
                                </button>
                                <button className="flex justify-center items-center space-x-2 btn-primary w-full max-w-[10rem] text-center">
                                    <span className="dark:!text-black">
                                        Pause
                                    </span>
                                </button>
                            </p>
                        </section>
                        <section className="flex flex-col text-left w-full p-4 text-sm space-y-4 bg-white text-black rounded-lg border">
                            <p className="font-bold mr-auto text-base">
                                Next Renewal
                            </p>
                            <hr />
                            <p className="flex flex-col space-y-2">
                                <span className="font-bold">
                                    Friday, 6 July
                                </span>
                                <span className="flex items-center space-x-2">
                                    <IoTimeOutline />
                                    <span>11.30 - 12.00 (30 min)</span>
                                </span>
                            </p>
                            <p className="flex flex-col space-y-2">
                                <span className="font-bold">
                                    Premium Service A
                                </span>
                                <span>0.1 ETH</span>
                            </p>
                            <hr />
                            <p className="w-full flex justify-between items-center space-x-4">
                                <button className="flex justify-center items-center space-x-2 btn-secondary w-full max-w-[10rem] text-center">
                                    <span className="dark:!text-black">
                                        Cancel Renewal
                                    </span>
                                </button>
                                <button className="flex justify-center items-center space-x-2 btn-primary w-full max-w-[10rem] text-center">
                                    <span className="dark:!text-black">
                                        Pause
                                    </span>
                                </button>
                            </p>
                        </section>
                    </section>
                </section>
            </motion.div>
            <SubscriptionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

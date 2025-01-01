import { motion } from "framer-motion";
import { FaCalendar, FaPlusCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

export const Dashboard: React.FC = () => {
    return (
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
                        Here is an overview of all your subscriptions on PayGem
                    </span>
                </p>
                <p className="flex items-center space-x-3">
                    <button className="flex items-center space-x-2 btn-secondary">
                        <FaCalendar />
                        <span>01 June 2024</span>
                    </button>
                    <button className="flex items-center space-x-2 btn-primary">
                        <FaPlusCircle />
                        <span>New Subscription</span>
                    </button>
                </p>
            </section>
            <section className="w-full flex space-x-4">
                <section className="flex flex-col justify-center items-center w-2/3">
                    <div className="flex w-full justify-between space-x-3">
                        <div className="flex justify-center items-center space-x-2 text-sm bg-white border rounded-lg py-2 px-3">
                            <p className="flex space-y-2 flex-col text-left">
                                <span>Active Subscription</span>
                                <span className="font-bold">2</span>
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
                                <span>Active Subscription</span>
                                <span className="font-bold">2</span>
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
                                <span>Active Subscription</span>
                                <span className="font-bold">2</span>
                                <span className="text-green-500">
                                    Total Active Subscription
                                </span>
                            </p>
                            <p className="rounded-full border p-1">
                                <IoMdCheckmark />{" "}
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center text-left w-1/3 p-2 bg-white rounded-lg border">
                    <p className="font-bold mr-auto">Next Renewal</p>
                    <hr />
                </section>
            </section>
        </motion.div>
    );
};

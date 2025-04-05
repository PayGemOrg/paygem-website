import { motion } from "framer-motion";
import { FaCalendar, FaPlusCircle } from "react-icons/fa";
import { IoMdCheckmark, IoMdMore } from "react-icons/io";
import { SubscriptionModal } from "./_components/NewSubscription";
import { useEffect, useState } from "react";
import { useWallet } from "../providers/WalletProvider";
import { format_date_time } from "../components/lib/generalUtils";
import { subscriptionAPI } from "../components/api/subscriptions";

export const Dashboard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { userMetrics, userMetricsLoading, nextRenewals, walletAddress }: any = useWallet();
    const [isLoadingSubscriptions, setIsLoadingSubscriptions] = useState(false);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        const fetchSubscriptions = async () => {
            if (walletAddress) {
                setIsLoadingSubscriptions(true);
                try {
                    await subscriptionAPI.getAllUserSubscriptions({
                        address: walletAddress,
                        callback: (data) => {
                            setSubscriptions(data.data);
                            setIsLoadingSubscriptions(false);
                        },
                        handleError: (error) => {
                            console.error("Error fetching subscriptions:", error);
                            setIsLoadingSubscriptions(false);
                        },
                    });
                } catch (error) {
                    console.error("Error fetching subscriptions:", error);
                    setIsLoadingSubscriptions(false);
                }
            }
        };

        fetchSubscriptions();
    }
    , [userMetrics?.wallet_address]);

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
                <section className="sm:flex sm:flex-row sm:flex-wrap gap-3 w-full justify-between items-center">
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
                <section className="w-full sm:flex sm:flex-nowrap flex flex-wrap justify-start items-start">
                    <section className="flex flex-col justify-center items-center w-2/3 space-y-3">
                        {
                            userMetricsLoading ?
                            (
                                <div className="flex w-full justify-between space-x-3">
                                    <div className="flex justify-center items-center space-x-2 text-sm bg-gray-100 border rounded-lg py-2 px-3 animate-pulse">
                                        <div className="flex space-y-2 flex-col w-40">
                                            <div className="h-4 bg-gray-200 rounded"></div>
                                            <div className="h-6 bg-gray-200 rounded"></div>
                                            <div className="h-4 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center space-x-2 text-sm bg-gray-100 border rounded-lg py-2 px-3 animate-pulse">
                                        <div className="flex space-y-2 flex-col w-40">
                                            <div className="h-4 bg-gray-200 rounded"></div>
                                            <div className="h-6 bg-gray-200 rounded"></div>
                                            <div className="h-4 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center space-x-2 text-sm bg-gray-100 border rounded-lg py-2 px-3 animate-pulse">
                                        <div className="flex space-y-2 flex-col w-40">
                                            <div className="h-4 bg-gray-200 rounded"></div>
                                            <div className="h-6 bg-gray-200 rounded"></div>
                                            <div className="h-4 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="flex w-full justify-between space-x-3">
                                    <div className="flex justify-center items-center space-x-2 text-sm bg-white border rounded-lg py-2 px-3">
                                        <p className="flex space-y-2 flex-col text-left">
                                            <span className="dark:text-black">
                                                Active Subscription
                                            </span>
                                            <span className="font-bold dark:text-black">
                                                {userMetrics?.active_subscriptions}
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
                                                Total Subscription
                                            </span>
                                            <span className="font-bold dark:text-black">
                                                {userMetrics?.total_subscriptions}
                                            </span>
                                            <span className="text-green-500">
                                                Total Subscription
                                            </span>
                                        </p>
                                        <p className="rounded-full border p-1">
                                            <IoMdCheckmark />{" "}
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center space-x-2 text-sm bg-white border rounded-lg py-2 px-3">
                                        <p className="flex space-y-2 flex-col text-left">
                                            <span className="dark:text-black">
                                                Total Spent
                                            </span>
                                            <span className="font-bold dark:text-black">
                                                {userMetrics?.total_spent}
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
                            )
                        }
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
                                {
                                    isLoadingSubscriptions ?
                                    (
                                        <div className="flex justify-center items-center space-x-2 text-sm bg-gray-100 border rounded-lg py-2 px-3 animate-pulse">
                                            <div className="flex space-y-2 flex-col w-full">
                                                <div className="h-4 bg-gray-200 rounded"></div>
                                                <div className="h-6 bg-gray-200 rounded"></div>
                                                <div className="h-4 bg-gray-200 rounded"></div>
                                            </div>
                                        </div>
                                    )
                                    :(
                                        subscriptions?.length > 0 ?
                                        (
                                            subscriptions?.map((subscription: any) => (
                                                <div className="flex border w-full justify-between items-center py-2 px-4 rounded-lg">
                                                    <p className="flex flex-col items center text-left space-y-2">
                                                        <span className="font-medium">
                                                            {subscription?.service_name}
                                                        </span>
                                                        <span className="">
                                                            Merchant: {subscription?.merchant}
                                                        </span>
                                                    </p>
                                                    <section className="flex space-x-5 items-center">
                                                        <p className="flex flex-col items center text-left">
                                                            <span className="">{subscription?.amount}</span>
                                                            <span className="">
                                                                Next: {format_date_time(subscription?.next_billing_date)}
                                                            </span>
                                                        </p>
                                                        <IoMdMore />
                                                    </section>
                                                </div>
                                            ))
                                        ):
                                        (
                                            <div className="flex justify-center items-center space-x-2 text-sm bg-white border rounded-lg py-2 px-3">
                                                <p className="flex space-y-2 flex-col text-left">
                                                    <span className="dark:text-black">
                                                        No recent subscriptions
                                                    </span>
                                                </p>
                                            </div>
                                        )
                                    )
                                }
                            </section>
                        </div>
                    </section>
                    <section className="flex flex-col justify-center items-center sm:space-y-3 sm:my-0 my-6 sm:mx-5 mx-0 px-0 sm:w-1/3 w-full space-x-0">
                        {nextRenewals ?
                        (
                            <div className="flex flex-col w-full border bg-white text-black p-2 rounded-lg text-sm">
                                <p className="w-full flex justify-between items-center p-2">
                                    <span className="font-bold text-lg">
                                        Next Renewals
                                    </span>
                                </p>
                                <div>
                                    {/* No next renewals */}
                                    <p>
                                        No upcoming renewals
                                    </p>
                                </div>
                            </div>
                        ):
                        (
                            <div className="flex flex-col text-left w-full p-4 text-sm space-y-4 bg-white text-black rounded-lg border">
                                <p className="mr-auto text-base">
                                    Next Renewal
                                </p>
                                {nextRenewals?.map((renewal: any) => (
                                    <section>
                                    <p className="flex flex-col space-y-2">
                                        <span className="font-bold">
                                            {format_date_time(renewal?.next_billing_date)}
                                        </span>
                                    </p>
                                    <p className="flex flex-col space-y-2">
                                        <span className="font-bold">
                                            {renewal?.plan_id}
                                        </span>
                                        <span>{renewal?.amount}</span>
                                    </p>
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
                                ))}
                            </div>
                        )
                    }
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

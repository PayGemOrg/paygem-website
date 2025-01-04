// SubscriptionCard.tsx
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoMdCheckmark, IoMdMore } from "react-icons/io";

interface SubscriptionCardProps {
    subscription: Subscription;
}

export interface Subscription {
    id: string;
    name: string;
    description: string;
    amount: number;
    nextPayment: string;
    status: "active" | "paused";
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
    subscription,
}) => {
    const [isPaused, setIsPaused] = useState(subscription.status === "paused");

    const handlePauseResume = () => {
        setIsPaused((prev) => !prev);
    };

    return (
        <div
            className={`flex flex-col space-y-4 border w-full text-sm justify-between text-black items-start py-2 px-4 rounded-lg ${
                isPaused ? "bg-gray-200" : "bg-white"
            }`}
        >
            <div
                className={`rounded-full px-3 py-1 text-xs ${
                    isPaused ? "bg-[#f7d394]" : "bg-primaryLight"
                }`}
            >
                {isPaused ? <>Paused</> : <>Active</>}
            </div>
            <div className="flex flex-col items-start space-y-2">
                <span className="font-medium">{subscription.name}</span>
                <span className="">{subscription.description}</span>
            </div>
            <p className="bg-gray-100 py-[0.1rem] w-full"></p>
            <div className="flex flex-col space-y-5 justify-between w-full">
                <div className="flex flex-col text-left space-y-1">
                    <span className="text-left font-bold text-lg">
                        {subscription.amount} ETH/month
                    </span>
                    <p className="flex space-x-2 items-center">
                        <CiCalendar className="text-base" />{" "}
                        <span className="text-left">
                            Next Payment: {subscription.nextPayment}
                        </span>
                    </p>
                </div>
                <p className="bg-gray-100 py-[0.1rem] w-full"></p>
            </div>
            <button
                onClick={handlePauseResume}
                className={`rounded-full border p-1 ${
                    isPaused ? "text-gray-500" : "text-green-500"
                }`}
            >
                {isPaused ? <IoMdMore /> : <IoMdCheckmark />}
            </button>
        </div>
    );
};

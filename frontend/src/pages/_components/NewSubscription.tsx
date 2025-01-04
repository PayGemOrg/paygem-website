import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineInfo } from "react-icons/md";

interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [serviceName, setServiceName] = useState("");
    const [amount, setAmount] = useState("");
    const [durationInPeriod, setDurationInPeriod] = useState("");
    const [paymentFrequency, setPaymentFrequency] = useState("Monthly");
    const [minimumBalance, setMinimumBalance] = useState("0.0000");
    const [autoRenewal, setAutoRenewal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Subscription creation logic
        console.log("Subscription submitted", {
            serviceName,
            amount,
            paymentFrequency,
            minimumBalance,
            autoRenewal,
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 text-black"
                        >
                            <div className="text-left mb-4">
                                <h2 className="text-xl font-bold mb-2">
                                    Create New Subscription
                                </h2>
                                <p className="text-sm text-gray-600">
                                    Fill out these details to add a new
                                    subscription
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Service Name
                                </label>
                                <input
                                    type="text"
                                    value={serviceName}
                                    onChange={(e) =>
                                        setServiceName(e.target.value)
                                    }
                                    placeholder="Enter Service Name"
                                    className="w-full p-2 border rounded-lg text-sm"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Amount (ETH)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Enter Amount"
                                    className="w-full p-2 border rounded-lg text-sm"
                                    required
                                />
                            </div>

                            <div className="flex space-x-3 items-center w-full">
                                <div className="space-y-2 w-full">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Payment Frequency
                                    </label>
                                    <select
                                        value={paymentFrequency}
                                        onChange={(e) =>
                                            setPaymentFrequency(e.target.value)
                                        }
                                        className="w-full p-2 border rounded-lg text-sm"
                                    >
                                        <option value="Monthly">Monthly</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Quarterly">
                                            Quarterly
                                        </option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </div>
                                <div className="space-y-2 w-full">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Duration in Period
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={durationInPeriod}
                                        onChange={(e) =>
                                            setDurationInPeriod(e.target.value)
                                        }
                                        placeholder="1"
                                        className="w-full p-2 border rounded-lg text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={autoRenewal}
                                    onChange={(e) =>
                                        setAutoRenewal(e.target.checked)
                                    }
                                    className="form-checkbox"
                                />
                                <label className="text-sm">
                                    Enable Auto Renewal
                                </label>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Minimum Balance Alert (ETH)
                                </label>
                                <input
                                    type="number"
                                    step="0.0001"
                                    value={minimumBalance}
                                    onChange={(e) =>
                                        setMinimumBalance(e.target.value)
                                    }
                                    className="w-full p-2 border rounded-lg text-sm"
                                    placeholder="0.0000"
                                />
                                <p className="text-xs text-gray-500">
                                    You'll be notified when your balance falls
                                    below this amount
                                </p>
                            </div>
                            <div className="border border-primaryLight border-l-8 p-2 flex justify-center items-start space-x-3">
                                <MdOutlineInfo />
                                <p className="text-xs text-gray-500">
                                    Auto-renewal requires maintaining a minimum
                                    balance of 0 ETH
                                </p>
                            </div>

                            <div className="flex space-x-4 pt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="btn-secondary w-full"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn-primary w-full"
                                >
                                    Create Subscription
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

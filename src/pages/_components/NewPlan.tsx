import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NewPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const NewPlanModal: React.FC<NewPlanModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [billingCycle, setBillingCycle] = useState("Monthly");
    const [subscribersLimit, setSubscribersLimit] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("New plan created:", { name, description, price, billingCycle, subscribersLimit });
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
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 text-black">
                            <div className="text-left mb-4">
                                <h2 className="text-xl font-bold mb-2">Create New Plan</h2>
                                <p className="text-sm text-gray-600">Define your plan details below.</p>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Plan Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter Plan Name"
                                    className="w-full p-2 border rounded-lg text-sm"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Describe your plan"
                                    className="w-full p-2 border rounded-lg text-sm"
                                    rows={3}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Price (ETH)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full p-2 border rounded-lg text-sm"
                                    required
                                />
                            </div>

                            <div className="flex space-x-3">
                                <div className="space-y-2 w-full">
                                    <label className="block text-sm font-medium text-gray-700">Billing Cycle</label>
                                    <select
                                        value={billingCycle}
                                        onChange={(e) => setBillingCycle(e.target.value)}
                                        className="w-full p-2 border rounded-lg text-sm"
                                    >
                                        <option value="Monthly">Monthly</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Quarterly">Quarterly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </div>
                                <div className="space-y-2 w-full">
                                    <label className="block text-sm font-medium text-gray-700">Subscribers Limit</label>
                                    <input
                                        type="number"
                                        value={subscribersLimit}
                                        onChange={(e) => setSubscribersLimit(e.target.value)}
                                        className="w-full p-2 border rounded-lg text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex space-x-4 pt-4">
                                <button type="button" onClick={onClose} className="btn-secondary w-full">
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary w-full">
                                    Create Plan
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

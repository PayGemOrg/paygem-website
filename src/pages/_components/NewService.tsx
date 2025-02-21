import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NewServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const NewServiceModal: React.FC<NewServiceModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("New service created:", { name, description, tags });
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
                                    Create New Service
                                </h2>
                                <p className="text-sm text-gray-600">
                                    Define your service details below.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Service Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter Service Name"
                                    className="w-full p-2 border rounded-lg text-sm"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    placeholder="Describe your service"
                                    className="w-full p-2 border rounded-lg text-sm"
                                    rows={3}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Tags (Comma-separated)
                                </label>
                                <input
                                    type="text"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    placeholder="e.g., streaming, finance, gaming"
                                    className="w-full p-2 border rounded-lg text-sm"
                                />
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
                                    Create Service
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

import { motion } from "framer-motion";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import { NewPlanModal } from "./_components/NewPlan";
import { PlanCard } from "../components/UI/PlanCard";
import { plans } from "../data/plans";

export const Plan: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col justify-center mx-auto w-full py-6 px-4 space-y-8"
            >
                <section className="flex w-full justify-between items-center">
                    <p className="flex flex-col text-left">
                        <span className="text-xl font-bold">My Plans</span>
                    </p>
                    <p className="flex items-center space-x-3">
                        <button onClick={() => setIsModalOpen(true)} className="flex items-center space-x-2 btn-primary">
                            <FaPlusCircle />
                            <span>New Plan</span>
                        </button>
                    </p>
                </section>
                <div className="grid grid-cols-3 gap-4">
                    {plans.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} />
                    ))}
                </div>
            </motion.div>

            <NewPlanModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

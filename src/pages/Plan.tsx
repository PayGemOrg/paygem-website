import { motion } from "framer-motion";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import { NewPlanModal } from "./_components/NewPlan";
import { PlanCard } from "../components/UI/PlanCard";
import { plans as mockPlans } from "../data/plans";

export const Plans: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [plans, setPlans] = useState(mockPlans);
    const [editingPlan, setEditingPlan] = useState<string | null>(null);

    // Handle editing a plan
    const handleEdit = (id: string) => {
        if (editingPlan) {
            console.log("Editing plan:", id);
        }
        setEditingPlan(id);
        setIsModalOpen(true);
    };

    // Handle deleting a plan
    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this plan?")) {
            setPlans(plans.filter((plan) => plan.id !== id));
            console.log("Deleted plan:", id);
        }
    };

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
                        <PlanCard key={plan.id} plan={plan} onEdit={handleEdit} onDelete={handleDelete} />
                    ))}
                </div>
            </motion.div>

            <NewPlanModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

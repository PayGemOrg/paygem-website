import { motion } from "framer-motion";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import { NewServiceModal } from "./_components/NewService";
import { ServiceCard } from "../components/UI/ServiceCard";
import { services } from "../data/services";

export const Services: React.FC = () => {
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
                        <span className="text-xl font-bold">My Services</span>
                    </p>
                    <p className="flex items-center space-x-3">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center space-x-2 btn-primary"
                        >
                            <FaPlusCircle />
                            <span>New Service</span>
                        </button>
                    </p>
                </section>
                <div className="grid grid-cols-3 gap-4">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </motion.div>

            <NewServiceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

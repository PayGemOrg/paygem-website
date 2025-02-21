import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
    service: {
        id: string;
        merchant_id: string;
        name: string;
        description: string;
        is_active: boolean;
        tags: string;
    };
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all"
            onClick={() => navigate(`/viewservice?id=${service.id}`)}
        >
            <div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                <p className="text-xs text-gray-500 mb-2">Merchant ID: {service.merchant_id}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                    {service.tags.split(",").map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                            {tag.trim()}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className={`text-sm font-semibold ${service.is_active ? "text-green-600" : "text-red-600"}`}>
                    {service.is_active ? "Active" : "Inactive"}
                </span>
                <div className="flex space-x-2">
                    <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={(e) => {
                            e.stopPropagation();
                            console.log(`Editing service ${service.id}`);
                        }}
                    >
                        <FaEdit />
                    </button>
                    <button
                        className="text-red-600 hover:text-red-800"
                        onClick={(e) => {
                            e.stopPropagation();
                            console.log(`Deleting service ${service.id}`);
                        }}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

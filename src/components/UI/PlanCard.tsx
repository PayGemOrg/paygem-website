import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export interface PlanCardProps {
    plan: {
        id: string;
        name: string;
        description: string;
        price: string;
        currency: string;
        billingCycle: string;
        subscribersLimit: string | null;
        subscriberCount: number;
        is_active: boolean;
    };
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onEdit, onDelete }) => {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-all"
            onClick={() => navigate(`/view-plan?id=${plan.id}`)}
        >
            <div>
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
                <p className="text-sm font-semibold text-primaryBold">
                    Price: {plan.price} {plan.currency}
                </p>
                <p className="text-xs text-gray-500">Billing Cycle: {plan.billingCycle}</p>
                <p className="text-xs text-gray-500">
                    Subscribers: {plan.subscriberCount} /{" "}
                    {plan.subscribersLimit ? plan.subscribersLimit : "Unlimited"}
                </p>
            </div>

            <div className="flex justify-between items-center mt-4">
                <span
                    className={`text-sm font-semibold ${
                        plan.is_active ? "text-green-600" : "text-red-600"
                    }`}
                >
                    {plan.is_active ? "Active" : "Inactive"}
                </span>

                <div className="flex space-x-2">
                    <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit(plan.id);
                        }}
                    >
                        <FaEdit />
                    </button>
                    <button
                        className="text-red-600 hover:text-red-800"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(plan.id);
                        }}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

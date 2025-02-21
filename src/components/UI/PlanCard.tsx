import { useNavigate } from "react-router-dom";

interface PlanCardProps {
    plan: {
        id: string;
        name: string;
        description: string;
        price: string;
        billingCycle: string;
        subscribersLimit: string;
    };
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
    const navigate = useNavigate();

    return (
        <div
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-all"
            onClick={() => navigate(`/view-plan?id=${plan.id}`)}
        >
            <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
            <p className="text-sm font-semibold text-primaryBold">Price: {plan.price} ETH</p>
            <p className="text-xs text-gray-500">Billing Cycle: {plan.billingCycle}</p>
        </div>
    );
};

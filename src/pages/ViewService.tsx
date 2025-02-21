import { useSearchParams } from "react-router-dom";
import { services } from "../data/services";

export const ViewService: React.FC = () => {
    const [searchParams] = useSearchParams();
    const serviceId = searchParams.get("id"); // Get ID from search params
    const service = services.find((s) => s.id === serviceId);

    if (!service) {
        return (
            <div className="flex justify-center items-center h-screen text-xl font-bold">
                Service Not Found
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-6">
            <h2 className="text-3xl font-bold">{service.name}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <div className="mt-4">
                <span
                    className={`px-3 py-1 text-xs font-semibold rounded ${
                        service.is_active
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {service.is_active ? "Active" : "Inactive"}
                </span>
            </div>
        </div>
    );
};

import { FaTools, FaListAlt, FaChartLine } from "react-icons/fa";

export const HowItWorksForMerchants: React.FC = () => {
    return (
        <section className="py-16 bg-light-primary">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-primaryBold">
                    How It Works for Merchants
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                        <div className="w-16 h-16 bg-[rgb(42,122,123)] text-white rounded-full flex justify-center items-center mb-4">
                            <FaTools size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-primaryBold">
                            Create a Service
                        </h3>
                        <p className="text-light-text text-center mt-2">
                            Define your offerings and set up services for
                            customers to subscribe to.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                        <div className="w-16 h-16 bg-[rgb(42,122,123)] text-white rounded-full flex justify-center items-center mb-4">
                            <FaListAlt size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-primaryBold">
                            Add Plans
                        </h3>
                        <p className="text-light-text text-center mt-2">
                            Customize subscription plans with pricing,
                            billing cycles, and features.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                        <div className="w-16 h-16 bg-[rgb(42,122,123)] text-white rounded-full flex justify-center items-center mb-4">
                            <FaChartLine size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-primaryBold">
                            Monitor Earnings
                        </h3>
                        <p className="text-light-text text-center mt-2">
                            Track your revenue, manage subscriptions, and
                            withdraw funds effortlessly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

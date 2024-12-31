export const HeroSection: React.FC = () => {
    return (
        <section className="flex justify-center items-center space-y-4 py-6">
            <section className="flex flex-col justify-center items-center space-y-6 mx-auto w-2/5 text-center">
                <p className="font-bold text-4xl leading-10 bg-gradient-to-l from-[#7ee1d5] to-[#5c79e1] bg-clip-text text-transparent">
                    Manage Web3 Subscriptions with Ease
                </p>
                <p className="text-light text-sm">
                    PayGem enables secure, automated crypto payments for
                    subscriptions using MPC wallets. Take control of your
                    recurring payments in the decentralized world.
                </p>
                <button className="btn-primary">Get Started</button>
            </section>
        </section>
    );
};

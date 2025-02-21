import coinbase_logo from "../../assets/coinbase-logo.svg";

export const SupportedWallets: React.FC = () => {
    return (
        <section className="py-16 bg-light-primary">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-light-text">
                    Supported Wallets
                </h2>
                <p className="text-center text-light-text text-lg mb-12">
                    Seamlessly connect and manage your subscriptions with these trusted wallets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Card 1: Coinbase */}
                    <div className="flex flex-col items-center p-6 border border-light-secondary rounded-lg shadow-md bg-white transition-transform hover:scale-105">
                        <img
                            src={coinbase_logo}
                            alt="Coinbase"
                            className="w-20 h-20 object-contain rounded-full"
                        />
                        <p className="mt-4 text-lg font-semibold text-light-text">
                            Coinbase
                        </p>
                        <p className="text-center text-light-text text-sm mt-2">
                            A user-friendly wallet for secure crypto payments.
                        </p>
                    </div>

                    {/* Card 2: WalletConnect */}
                    <div className="flex flex-col items-center p-6 border border-light-secondary rounded-lg shadow-md bg-white transition-transform hover:scale-105">
                        <img
                            src="https://images.seeklogo.com/logo-png/43/1/walletconnect-logo-png_seeklogo-430923.png?v=1957907400795823728"
                            alt="WalletConnect"
                            className="w-20 h-20 object-contain rounded-full"
                        />
                        <p className="mt-4 text-lg font-semibold text-light-text">
                            WalletConnect
                        </p>
                        <p className="text-center text-light-text text-sm mt-2">
                            A bridge for connecting decentralized wallets.
                        </p>
                    </div>

                    {/* Card 3: MetaMask */}
                    <div className="flex flex-col items-center p-6 border border-light-secondary rounded-lg shadow-md bg-white transition-transform hover:scale-105">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                            alt="MetaMask"
                            className="w-20 h-20 object-contain rounded-full"
                        />
                        <p className="mt-4 text-lg font-semibold text-light-text">
                            MetaMask
                        </p>
                        <p className="text-center text-light-text text-sm mt-2">
                            A popular browser extension wallet for Ethereum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

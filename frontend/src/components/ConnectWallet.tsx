import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

export const ConnectWallet: React.FC = () => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [balance, setBalance] = useState<string | null>(null);

    // Connect to Wallet
    const connectWallet = async () => {
        try {
            const web3Modal = new Web3Modal({
                cacheProvider: false, // Optional: Cache the last used wallet
                providerOptions: {}, // Can specify custom provider options here
            });

            const instance = await web3Modal.connect();
            const provider = new ethers.BrowserProvider(instance);
            const signer = provider.getSigner();

            // Get Wallet Address
            const address = await (await signer).getAddress();
            setWalletAddress(address);

            // Get Wallet Balance
            const balance = await provider.getBalance(address);
            setBalance(ethers.formatEther(balance));
        } catch (error) {
            console.error("Connection failed", error);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* Button to Connect Wallet */}
            <button
                onClick={connectWallet}
                className="btn-primary px-6 py-3 text-white rounded-lg"
            >
                {walletAddress ? "Wallet Connected" : "Connect Wallet"}
            </button>

            {/* Display Wallet Info */}
            {walletAddress && (
                <div className="text-center mt-4">
                    <p className="text-sm text-light-text">
                        <strong>Wallet Address:</strong> {walletAddress}
                    </p>
                    <p className="text-sm text-light-text">
                        <strong>Balance:</strong> {balance} ETH
                    </p>
                </div>
            )}
        </div>
    );
};

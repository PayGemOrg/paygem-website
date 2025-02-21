import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useCookies } from "react-cookie";

interface WalletContextType {
    walletAddress: string | null;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => void;
    walletConnected: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);
interface WalletProviderProps {
    children: ReactNode
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [cookies, setCookie, removeCookie] = useCookies(["walletAddress"]);
    const [walletConnected, setWalletConnected] = useState(false);

    // Load wallet address from cookies on mount
    useEffect(() => {
        if (cookies.walletAddress) {
            setWalletAddress(cookies.walletAddress);
            setWalletConnected(true);
        }
    }, [cookies.walletAddress]);

    // Connect to wallet
    const connectWallet = async () => {
        try {
            const web3Modal = new Web3Modal({
                cacheProvider: true,
            });
            const instance = await web3Modal.connect();
            const provider = new ethers.BrowserProvider(instance)
            const signer = provider.getSigner();
            const address = await (await signer).getAddress();


            setWalletConnected(true);
            setWalletAddress(address);
            setCookie("walletAddress", address, { path: "/", maxAge: 3600 }); // Store in cookies for 1 hour
        } catch (error) {
            console.error("Wallet connection failed", error);
            setWalletConnected(false);
        }
    };

    // Disconnect wallet
    const disconnectWallet = () => {
        setWalletAddress(null);
        removeCookie("walletAddress", { path: "/" });
    };

    return (
        <WalletContext.Provider
            value={{ walletAddress, connectWallet, disconnectWallet, walletConnected }}
        >
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = (): WalletContextType => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
};

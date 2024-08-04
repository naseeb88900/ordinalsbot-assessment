"use client";

import React, { ReactNode } from 'react';
import "@rainbow-me/rainbowkit/styles.css";
import {
    apiProvider,
    configureChains,
    getDefaultWallets,
    RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { chain, createClient, WagmiProvider } from "wagmi";

const { chains, provider } = configureChains(
    [
        chain.mainnet,
        chain.polygon,
        chain.optimism,
        chain.arbitrum,
        chain.polygonMumbai,
        chain.rinkeby,
        chain.goerli,
        chain.kovan,
        chain.localhost,
        chain.hardhat
    ],
    [apiProvider.alchemy(process.env.ALCHEMY_ID), apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
    appName: "RainbowKit",
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
});

interface WalletProviderProps {
    children: ReactNode;
}

const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
    return (
        <WagmiProvider client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                {children}
            </RainbowKitProvider>
        </WagmiProvider>
    );
};

export default WalletProvider;
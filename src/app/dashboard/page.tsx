// src/app/dashboard/page.tsx

import * as React from 'react';
import { config } from '@/config';
import { Metadata } from 'next';
import { Brc20BalanceResult, fetchBrc20Balance } from '@/lib';

export const metadata = { title: `Dashboard | ${config.site.name}` } satisfies Metadata;

interface DashboardProps {
    balance: Brc20BalanceResult | null;
}

// Server Component to render the page
const Dashboard: React.FC = async () => {
    const apiKey = process.env.API_KEY!;
    const address = process.env.WALLET_ADDRESS!;

    // Fetch balance directly within the component
    const balance = await fetchBrc20Balance(apiKey, address);

    return (
        <div>
            <h1>Dashboard</h1>
            {balance ? (
                <div>
                    <h2>BRC20 Balance</h2>
                    <p><strong>Overall Balance:</strong> {balance.overall_balance}</p>
                    <p><strong>Available Balance:</strong> {balance.available_balance}</p>
                    <p><strong>Block Height:</strong> {balance.block_height}</p>
                    <p><strong>Tick:</strong> {balance.tick}</p>
                </div>
            ) : (
                <p>Unable to fetch BRC20 balance.</p>
            )}
        </div>
    );
}

export default Dashboard;

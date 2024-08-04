import * as React from 'react';
import { config } from '@/constants/config';
import { Metadata } from 'next';
import { Brc20BalanceResult, fetchBrc20Balance } from '@/lib';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { API_KEY, WALLET_ADDRESS } from '@/constants/global';
import { API_KEY_WALLET_ADDRESS_REQUIRED, UNABLE_TO_FETCH_BRC20_BALANCE, UNKNOWN_ERROR } from '@/constants/errors';

export const metadata = { title: `Dashboard | ${config.site.name}` } satisfies Metadata;

const Dashboard: React.FC = async () => {
    let balance: Brc20BalanceResult | null = null;
    let error: string | null = null;

    try {
        if (!API_KEY || !WALLET_ADDRESS) {
            throw new Error(API_KEY_WALLET_ADDRESS_REQUIRED);
        }
        balance = await fetchBrc20Balance(API_KEY, WALLET_ADDRESS);
    } catch (err) {
        error = (err instanceof Error) ? err.message : UNKNOWN_ERROR;
    }
    return (
        <DashboardLayout>
            <h1>BRC20 Balance</h1>
            {balance ? (
                <div>
                    <h2>BRC20 Balance</h2>
                    <p><strong>Overall Balance:</strong> {balance.overall_balance}</p>
                    <p><strong>Available Balance:</strong> {balance.available_balance}</p>
                    <p><strong>Block Height:</strong> {balance.block_height}</p>
                    <p><strong>Tick:</strong> {balance.tick}</p>
                </div>
            ) : (
                <p>{error || UNABLE_TO_FETCH_BRC20_BALANCE}</p>
            )}
        </DashboardLayout>
    );
};

export default Dashboard;

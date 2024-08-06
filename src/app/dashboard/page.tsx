import * as React from 'react';
import { config } from '@/constants/config';
import { Metadata } from 'next';
import { fetchBrc20Balance } from '@/lib';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { API_KEY, WALLET_ADDRESS } from '@/constants/global';
import { API_KEY_WALLET_ADDRESS_REQUIRED, NO_BALANCE_FOUND, UNKNOWN_ERROR } from '@/constants/errors';
import { Brc20BalanceResult } from '@/types/balance';
import BalanceDisplay from '@/components/dashboard/balance-display';

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
            {balance ? (
                <BalanceDisplay
                    overallBalance={balance.overall_balance}
                    availableBalance={balance.available_balance}
                />
            ) : (
                <p>{error || NO_BALANCE_FOUND}</p>
            )}
        </DashboardLayout>
    );
};

export default Dashboard;

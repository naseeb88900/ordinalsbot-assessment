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
            <div className="p-6 space-y-6">
                <h1 className="text-3xl font-bold mb-4">BRC20 Balance</h1>
                {error ? (
                    <div className="p-4 bg-red-100 text-red-800 rounded-md">
                        <h2 className="text-xl font-semibold">Error</h2>
                        <p>{error || NO_BALANCE_FOUND}</p>
                    </div>
                ) : (
                    balance && (
                        <BalanceDisplay
                            overallBalance={balance.overall_balance}
                            availableBalance={balance.available_balance}
                        />
                    )
                )}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;

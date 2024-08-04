import * as React from 'react';
import { config } from '@/config';
import { Metadata } from 'next';
import { Connect } from '@/lib/connect-wallet';
import DashboardLayout from '@/components/dashboard/dashboard-layout';

export const metadata = { title: `Connect Wallet | ${config.site.name}` } satisfies Metadata;



const ConnectWallet: React.FC = async () => {
    return (
        <DashboardLayout>
            <Connect />
        </DashboardLayout>
    );
};

export default ConnectWallet;

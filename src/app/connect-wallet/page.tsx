import * as React from 'react';
import { config } from '@/config';
import { Metadata } from 'next';
import { Connect } from '@/lib/connect-wallet';

export const metadata = { title: `Connect Wallet | ${config.site.name}` } satisfies Metadata;



const ConnectWallet: React.FC = async () => {
    return (
        <Connect />
    );
};

export default ConnectWallet;

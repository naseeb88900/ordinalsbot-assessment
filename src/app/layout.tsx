import * as React from 'react';
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import WalletProvider from '@/providers/rainbow-kit';
import DashboardLayout from '@/components/dashboard/dashboard-layout';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <DashboardLayout>
          <WalletProvider>
            {children}
          </WalletProvider>
        </DashboardLayout>
      </body>
    </html>
  );
}

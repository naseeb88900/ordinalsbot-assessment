import * as React from 'react';
import type { Viewport } from "next";
import "@/styles/globals.css";
import WalletProvider from '@/providers/rainbow-kit';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}

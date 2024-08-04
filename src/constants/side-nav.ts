import { paths } from '@/constants/paths';
import { NavItemConfig } from '@/types/nav';

export const navItems = [
    { key: 'balance', title: 'Get BRC20 Balance', href: paths.dashboard },
    { key: 'connect-wallet', title: 'Connect Wallet', href: paths.connectWallet },
] satisfies NavItemConfig[];

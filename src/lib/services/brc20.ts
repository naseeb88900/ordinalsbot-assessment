import { getBrc20Balance } from '@lib/api/brc20';

export async function fetchBrc20Balance(apiKey: string, address: string) {
    try {
        const data = await getBrc20Balance(apiKey, address);
        return data.result[0] || null;
    } catch (error) {
        console.error('Error fetching BRC20 balance:', error);
        return null;
    }
}

import { Brc20BalanceResponse } from '@/types/balance';
import axiosInstance from '../axios-instance';

export async function getBrc20Balance(apiKey: string, address: string): Promise<Brc20BalanceResponse> {
    try {
        const response = await axiosInstance.get('opi/v1/brc20/get_current_balance_of_wallet', {
            headers: {
                'x-api-key': apiKey,
            },
            params: {
                address
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching BRC20 balance:', error);
        throw new Error('Failed to fetch BRC20 balance');
    }
}

import axios from 'axios';
import { Brc20BalanceResponse } from '@lib/types';

export async function getBrc20Balance(apiKey: string, address: string): Promise<Brc20BalanceResponse> {
    try {
        const response = await axios.get('https://api.ordinalsbot.com/opi/v1/brc20/get_current_balance_of_wallet', {
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

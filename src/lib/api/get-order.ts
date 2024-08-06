import { OrderResponse } from '@/types/order';
import axios from 'axios';

export async function getOrder(id: string): Promise<OrderResponse> {
    try {
        const response = await axios.get('https://api.ordinalsbot.com/order', {
            params: {
                id
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching order:', error);
        throw new Error('Failed to fetch order');
    }
}

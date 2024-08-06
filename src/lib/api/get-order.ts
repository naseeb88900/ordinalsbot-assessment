import { OrderResponse } from '@/types/order';
import axiosInstance from '../axios-instance';

export async function getOrder(id: string): Promise<OrderResponse> {
    try {
        const response = await axiosInstance.get('/order', {
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

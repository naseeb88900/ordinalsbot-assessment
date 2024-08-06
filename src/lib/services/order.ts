import { getOrder } from '../api/get-order';

export async function fetchOrder(id: string) {
    try {
        const data = await getOrder(id);
        return data || null;
    } catch (error) {
        console.error('Error fetching order', error);
        return null;
    }
}

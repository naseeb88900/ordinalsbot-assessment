import React from 'react';

interface OrderStatusSummaryProps {
    orderId: string;
    status: string;
    completed: boolean;
}

const OrderStatusSummary: React.FC<OrderStatusSummaryProps> = ({ orderId, status, completed }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Order Status and Summary:</h2>
            <p><strong>Order ID:</strong> {orderId}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Completed:</strong> {completed ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default OrderStatusSummary;

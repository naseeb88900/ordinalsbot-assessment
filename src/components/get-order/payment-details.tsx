import React from 'react';

interface PaymentDetailsProps {
    amount: number;
    currency: string;
    paidAt: number;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ amount, currency, paidAt }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Payment Details:</h2>
            <p><strong>Amount Paid:</strong> {amount} satoshis</p>
            <p><strong>Currency:</strong> {currency}</p>
            <p><strong>Paid At:</strong> {new Date(paidAt).toLocaleString()}</p>
        </div>
    );
};

export default PaymentDetails;

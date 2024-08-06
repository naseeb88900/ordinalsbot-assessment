import React from 'react';

interface RefundDetailsProps {
    refundAmount: number;
    refundAddress: string;
    txid: string;
}

const RefundDetails: React.FC<RefundDetailsProps> = ({ refundAmount, refundAddress, txid }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Refund Details:</h2>
            <p><strong>Refund Amount:</strong> {refundAmount} satoshis</p>
            <p><strong>Refund Address:</strong> {refundAddress}</p>
            <p><strong>Transaction ID (TXID):</strong> {txid}</p>
        </div>
    );
};

export default RefundDetails;

import React from 'react';

interface PaymentInformationProps {
    checkoutUrl: string;
    receiveAddress: string;
    bitcoinUri: string;
}

const PaymentInformation: React.FC<PaymentInformationProps> = ({ checkoutUrl, receiveAddress, bitcoinUri }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Payment Information:</h2>
            <p><strong>Hosted Checkout URL:</strong> <a href={checkoutUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Checkout</a></p>
            <p><strong>Receive Address:</strong> {receiveAddress}</p>
            <p><strong>Bitcoin URI:</strong> <a href={bitcoinUri} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View URI</a></p>
        </div>
    );
};

export default PaymentInformation;

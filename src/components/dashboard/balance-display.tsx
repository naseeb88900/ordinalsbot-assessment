import React from 'react';

interface BalanceDisplayProps {
    overallBalance: string;
    availableBalance: string;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ overallBalance, availableBalance }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">BRC20 Balance</h2>
            <p><strong>Transferrable Balance:</strong> {overallBalance} sats</p>
            <p><strong>Available Balance:</strong> {availableBalance} sats</p>
        </div>
    );
};

export default BalanceDisplay;

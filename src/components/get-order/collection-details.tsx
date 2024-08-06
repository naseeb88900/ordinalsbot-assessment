import React from 'react';

interface CollectionDetailsProps {
    collectionId: string;
    collectionType: string;
}

const CollectionDetails: React.FC<CollectionDetailsProps> = ({ collectionId, collectionType }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-2">Collection Details:</h2>
            <p><strong>Collection ID:</strong> {collectionId}</p>
            <p><strong>Collection Type:</strong> {collectionType}</p>
        </div>
    );
};

export default CollectionDetails;

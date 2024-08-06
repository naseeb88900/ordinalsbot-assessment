interface Charge {
    address: string;
    amount: number;
    auto_settle: boolean;
    chain_invoice: {
        address: string;
    };
    created_at: number;
    currency: string;
    desc_hash: boolean;
    description: string;
    fiat_value: number;
    hosted_checkout_url: string;
    id: string;
    lightning_invoice: {
        expires_at: number;
        payreq: string;
    };
    source_fiat_value: number;
    status: string;
    ttl: number;
    uri: string;
    callback_url: string;
}

interface Collection {
    accessCode: string;
    count: number;
    id: string;
    type: string;
}

interface Refund {
    address: string;
    amount: number;
    txid: string;
}

export interface OrderResponse {
    additionalFeeCharged: number;
    amount: number;
    chainFee: number;
    charge: Charge;
    collection: Collection;
    completed: boolean;
    createdAt: number;
    error: string;
    fee: string;
    fileCount: number;
    id: string;
    lowPostage: boolean;
    orderType: string;
    paid: boolean;
    paidAt: number;
    postage: number;
    price: number;
    rareSats: string;
    rareSatsFee: number;
    receiveAddress: string;
    refund: Refund;
    serviceFee: number;
    state: string;
    status: string;
}

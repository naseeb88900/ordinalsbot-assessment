import * as React from 'react';
import { config } from '@/constants/config';
import { Metadata } from 'next';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { ID_BY_BULKORDER } from '@/constants/global';
import { BULK_ORDER_ID_REQUIRED, UNKNOWN_ERROR } from '@/constants/errors';
import { OrderResponse } from '@/types/order';
import { fetchOrder } from '@/lib/services/order';
import OrderStatusSummary from '@/components/get-order/order-status';
import PaymentDetails from '@/components/get-order/payment-details';
import RefundDetails from '@/components/get-order/refund-details';
import CollectionDetails from '@/components/get-order/collection-details';
import PaymentInformation from '@/components/get-order/payment-information';


export const metadata = { title: `Get Order | ${config.site.name}` } satisfies Metadata;

const Dashboard: React.FC = async () => {
    let order: OrderResponse | null = null;
    let error: string | null = null;

    try {
        if (!ID_BY_BULKORDER) {
            throw new Error(BULK_ORDER_ID_REQUIRED);
        }
        order = await fetchOrder(ID_BY_BULKORDER);
    } catch (err) {
        error = (err instanceof Error) ? err.message : UNKNOWN_ERROR;
    }

    return (
        <DashboardLayout>
            <div className="p-6 space-y-6">
                <h1 className="text-3xl font-bold mb-4">Order Details</h1>
                {error ? (
                    <div className="p-4 bg-red-100 text-red-800 rounded-md">
                        <h2 className="text-xl font-semibold">Error</h2>
                        <p>{error}</p>
                    </div>
                ) : (
                    order && (
                        <>
                            <OrderStatusSummary
                                orderId={order.id}
                                status={order.status}
                                completed={order.completed}
                            />
                            <PaymentDetails
                                amount={order.amount}
                                currency={order.charge.currency}
                                paidAt={order.paidAt}
                            />
                            {order.refund && (
                                <RefundDetails
                                    refundAmount={order.refund.amount}
                                    refundAddress={order.refund.address}
                                    txid={order.refund.txid}
                                />
                            )}
                            <CollectionDetails
                                collectionId={order.collection.id}
                                collectionType={order.collection.type}
                            />
                            <PaymentInformation
                                checkoutUrl={order.charge.hosted_checkout_url}
                                receiveAddress={order.receiveAddress}
                                bitcoinUri={order.charge.uri}
                            />
                        </>
                    )
                )}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;

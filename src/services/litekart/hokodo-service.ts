import { getAPI, post, put } from './../../utils/api'

export const getHokodoOrderHistory = async ({
    duration,
    flow_type,
    product_id,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    res = await post(
        `hokodo/get-order-history`,
        origin,
        {
            product_id,
            duration,
            flow_type,
            store: storeId
        },
        sid
    )

    return res
}

export const getBulkHokodoOrderHistory = async ({
    duration,
    flow_type,
    product_ids = [],
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    res = await post(
        `hokodo/check-bulk-reorder`,
        origin,
        {
            product_ids,
            duration,
            flow_type,
            store: storeId
        },
        sid
    )

    return res
}

export const createCompany = async ({
    credit,
    id,
    name,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    res = await post(
        `hokodo-onboarding/create-company`,
        origin,
        {
            credit,
            id,
            name,
            store: storeId
        },
        sid
    )

    return res
}

export const createOrganisation = async ({
    company_id,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    res = await post(
        `hokodo-onboarding/create-organisation`,
        origin,
        {
            company_id,
            store: storeId
        },
        sid
    )

    return res
}

export const createUser = async ({
    company_id,
    email,
    name,
    organisation_id,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    res = await post(
        `hokodo-onboarding/create-user`,
        origin,
        {
            company_id,
            email,
            name,
            organisation_id,
            store: storeId
        },
        sid
    )

    return res
}

export const getCreditLimit = async ({
    company_id,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    if (company_id) {
        // if (isServer) {
        //     res = await getBySid(`hokodo-onboarding/get-credit-limit?company_id=${company_id}&store=${storeId}`, sid)
        // } else {
        //     res = await getAPI(`hokodo-onboarding/get-credit-limit?company_id=${company_id}&store=${storeId}`, origin)
        // }

        res = await getAPI(`hokodo-onboarding/get-credit-limit?company_id=${company_id}&store=${storeId}`, origin, sid)
    }

    return res
}

export const createOrder = async ({
    address,
    cartId,
    org_id,
    user_id,
    origin,
    sid = null,
    storeId,
    payment_flow,
}: any) => {
    let res: any = {}

    res = await post(
        `hokodo-checkout/create-orders`,
        origin,
        {
            address,
            cart_id: cartId,
            org_id,
            return_url: `${origin}/payment/success`,
            user_id,
            store: storeId,
            payment_flow
        },
        sid
    )

    return res
}

export const createPaymentOffer = async ({
    hokodo_order_id,
    payment_flow,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    res = await post(
        `hokodo-checkout/payment-offer`,
        origin,
        {
            hokodo_order_id,
            payment_flow,
            store: storeId
        },
        sid
    )

    return res
}

export const getOrderDetailAfterPayment = async ({
    hokodo_order_id,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    // if (isServer) {
    //     res = await getBySid(`hokodo-checkout/order-detail-after-payment?hokodo_order_id=${hokodo_order_id}&store=${storeId}`, sid)
    // } else {
    //     res = await getAPI(`hokodo-checkout/order-detail-after-payment?hokodo_order_id=${hokodo_order_id}&store=${storeId}`, origin)
    // }

    res = await getAPI(`hokodo-checkout/order-detail-after-payment?hokodo_order_id=${hokodo_order_id}&store=${storeId}`, origin, sid)

    return res
}

export const getPaymentStatus = async ({
    payment_id,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    // if (isServer) {
    //     res = await getBySid(`hokodo-checkout/payment-status?payment_id=${payment_id}&store=${storeId}`, sid)
    // } else {
    //     res = await getAPI(`hokodo-checkout/payment-status?payment_id=${payment_id}&store=${storeId}`, origin)
    // }

    res = await getAPI(`hokodo-checkout/payment-status?payment_id=${payment_id}&store=${storeId}`, origin, sid)

    return res
}

export const updateCreditLimit = async ({
    company_id,
    credit,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    res = await post(
        `hokodo-onboarding/update-credit-limit`,
        origin,
        {
            company_id,
            credit,
            store: storeId
        },
        sid
    )

    return res
}

export const savePaymentInfo = async ({
    deferred_payment_id,
    hokodo_payment_offer_id,
    order_no,
    payment_plan_id,
    origin,
    sid = null,
    storeId,
}: any) => {
    let res: any = {}

    res = await post(
        `hokodo-checkout/save-payment-info`,
        origin,
        {
            deferred_payment_id,
            hokodo_payment_offer_id,
            order_no,
            payment_plan_id,
            store: storeId
        },
        sid
    )

    return res
}
import { getAPI, post, put } from './../../utils/api'

export const sendReturnRequest = async ({
    img,
    note,
    order_item_id,
    order_no,
    pid,
    reason,
    return_quantity,
    tracking_no,
    storeId,
    origin,
    sid = null
}: any) => {
    let res: any = {}

    res = await post(
        `returns`,
        origin,
        {
            img,
            note,
            order_item_id,
            order_no,
            pid,
            reason,
            return_quantity,
            tracking_no,
            store: storeId
        },
        sid
    )

    return res
}

export const sendBulkReturnRequest = async ({
    description,
    shipping,
    items,
    storeId,
    origin,
    sid = null
}: any) => {
    let res: any = {}

    res = await post(
        `bulk-returns`,
        origin,
        {
            description,
            shipping,
            items,
            store: storeId
        },
        sid
    )

    return res
}

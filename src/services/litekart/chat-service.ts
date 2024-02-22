import { getAPI, post, put } from './../../utils/api'

export const fetchAllChats = async ({
    origin,
    query,
    storeId,
    isCors = false,
    sid = null
}: any) => {
    let res: any = {}

    // if (isServer || isCors) {
    //     res = await getBySid(`chats?store=${storeId}`, sid)
    // } else {
    //     res = await getAPI(`chats?store=${storeId}`, origin)
    // }

    res = await getAPI(`chats?store=${storeId}`, origin, sid)

    return res || {}
}

export const sendNewMessage = async ({
    img = '',
    message = '',
    vendor = '',
    storeId,
    origin,
    isCors = false,
    sid = null
}: any) => {
    let res: any | {}

    res = await post(
        `chats`,
        origin,
        {
            img,
            message,
            vendor,
            store: storeId
        },
        sid
    )

    return res
}

export const updateMessageSeen = async ({
    id = '',
    storeId,
    origin,
    isCors = false,
    sid = null
}: any) => {
    let res: any = {}

    res = await put(`chats`, {
        id,
        store: storeId
    }, origin, sid)

    return res
}
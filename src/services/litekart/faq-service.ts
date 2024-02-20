import { getAPI } from './../../utils/api'


export const fetchFaqs = async ({ origin, storeId, sid = null}: any) => {
    let res: any = {}

    // if (isServer) {
    //   res = await getBySid(`faqs?store=${storeId}`, sid)
    // } else {
    //   res = await getAPI(`faqs?store=${storeId}`, origin)
    // }

    res = await getAPI(`faqs?store=${storeId}`, origin, sid)

    return res || {}
}

export const fetchFaq = async ({ slug, origin, sid = null, storeId }: any) => {
    let res: any = {}

    // if (isServer) {
    //   res = await getBySid(`faqs?topic=${slug}&store=${storeId}`, sid)
    // } else {
    //   res = await getAPI(`faqs?topic=${slug}&store=${storeId}`, origin)
    // }

    res = await getAPI(`faqs?topic=${slug}&store=${storeId}`, origin, sid)

    return res || {}
}

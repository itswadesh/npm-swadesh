import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const fetchFaqs = async ({ origin, storeId, sid = null ,isServer}: any) => {
  
    let res: any = {}

    if (isServer) {
      res = await getBySid(`faqs?store=${storeId}`, sid)
    } else {
      res = await getAPI(`faqs?store=${storeId}`, origin)
    }

    return res || {}
}

export const fetchFaq = async ({ slug, origin, sid = null, storeId,isServer }: any) => {
  
    let res: any = {}

    if (isServer) {
      res = await getBySid(`faqs?topic=${slug}&store=${storeId}`, sid)
    } else {
      res = await getAPI(`faqs?topic=${slug}&store=${storeId}`, origin)
    }

    return res || {}
}

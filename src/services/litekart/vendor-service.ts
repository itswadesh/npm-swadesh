import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'


export const fetchVendors = async ({ origin, storeId, sid = null, isServer }) => {
  
    let res: any = {}

    if (isServer) {
      res = await getBySid(`vendors?store=${storeId}`, sid)
    } else {
      res = await getAPI(`vendors?store=${storeId}`, origin)
    }

    return res || {}
}

export const fetchVendor = async ({ origin, slug, storeId, sid = null,isServer }) => {
  
    let res: any = {}

    if (isServer) {
      res = await getBySid(`vendors/${slug}?store=${storeId}`, sid)
    } else {
      res = await getAPI(`vendors/${slug}?store=${storeId}`, origin)
    }

    return res || {}
}

export const fetchProductsOfVendor = async ({
  slug,
  origin,
  page,
  sid = null,
  storeId,
  isServer
}) => {
    let res = {}

    if (isServer) {
      res = await getBySid(
        `es/products?vendors=${slug}&page=${page}&store=${storeId}`,
        sid
      )
    } else {
      res = await getAPI(
        `es/products?vendors=${slug}&page=${page}&store=${storeId}`,
        origin
      )
    }

    return res || {}
}

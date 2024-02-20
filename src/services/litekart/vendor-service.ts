import { getAPI } from './../../utils/api'



export const fetchVendors = async ({ origin, storeId, sid = null }) => {
    let res: any = {}

    // if (isServer) {
    //   res = await getBySid(`vendors?store=${storeId}`, sid)
    // } else {
    //   res = await getAPI(`vendors?store=${storeId}`, origin)
    // }
    
    res = await getAPI(`vendors?store=${storeId}`, origin, sid)

    return res || {}
}

export const fetchVendor = async ({ origin, slug, storeId, sid = null }) => {
    let res: any = {}

    // if (isServer) {
    //   res = await getBySid(`vendors/${slug}?store=${storeId}`, sid)
    // } else {
    //   res = await getAPI(`vendors/${slug}?store=${storeId}`, origin)
    // }

    res = await getAPI(`vendors/${slug}?store=${storeId}`, origin, sid)

    return res || {}
}

export const fetchProductsOfVendor = async ({
  slug,
  origin,
  page,
  sid = null,
  storeId,
}) => {
    let res = {}

    // if (isServer) {
    //   res = await getBySid(
    //     `es/products?vendors=${slug}&page=${page}&store=${storeId}`,
    //     sid
    //   )
    // } else {
    //   res = await getAPI(
    //     `es/products?vendors=${slug}&page=${page}&store=${storeId}`,
    //     origin
    //   )
    // }

    res = await getAPI(
      `es/products?vendors=${slug}&page=${page}&store=${storeId}`,
      origin, sid
    )

    return res || {}
}

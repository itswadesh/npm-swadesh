import { getAPI } from './../../utils/api'

export const fetchVendors = async ({ query = '', origin, storeId, sid = null }) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(`vendors?store=${storeId}&${query}`, sid)
  // } else {
  //   res = await getAPI(`vendors?store=${storeId}&${query}`, origin)
  // }

  res = await getAPI(`vendors?store=${storeId}&${query}`, origin, sid)

  return res || {}
}

export const fetchEsVendors = async ({ query = '', origin, storeId, sid = null }) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(`vendors?store=${storeId}&${query}`, sid)
  // } else {
  //   res = await getAPI(`vendors?store=${storeId}&${query}`, origin)
  // }

  res = await getAPI(`es/vendors?store=${storeId}&${query}`, origin, sid)

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

export const fetchVendorByProductCategory = async ({ origin, sid = null, storeId }) => {
  let res = {}

  // if (isServer) {
  //   res = await getBySid(`vendor-by-product-category-discount?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`vendor-by-product-category-discount?store=${storeId}`, origin)
  // }

  res = await getAPI(`vendor-by-product-category-discount?store=${storeId}`, origin, sid)

  return res || {}
}
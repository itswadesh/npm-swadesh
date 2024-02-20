import { getAPI } from './../../utils/api'

export const fetchPages = async ({ origin, storeId, sid = null }: any) => {
  let res: any = {}

  // if (isServer || isCors) {
  //   res = await getBySid(`pages?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`pages?store=${storeId}`, origin)
  // }

  res = await getAPI(`pages?store=${storeId}`, origin, sid)

  return res.data || []
}

export const fetchLatestPages = async ({
  origin,
  storeId,
  sid = null
}: any) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(
  //     `pages?sort=-updatedAt&limit=10&store=${storeId}`,
  //     sid
  //   )
  // } else {
  //   res = await getAPI(
  //     `pages?sort=-updatedAt&limit=10&store=${storeId}`,
  //     origin
  //   )
  // }

  res = await getAPI(
    `pages?sort=-updatedAt&limit=10&store=${storeId}`,
    origin,
    sid
  )

  return res.data || []
}

export const fetchPage = async ({
  origin,
  id,
  slug,
  storeId,
  sid = null
}: any) => {
  let res: any = {}

  // if (isServer || isCors) {
  //   res = await getBySid(`pages/${id || slug}?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`pages/${id || slug}?store=${storeId}`, origin)
  // }

  res = await getAPI(`pages/${id || slug}?store=${storeId}`, origin, sid)

  return res || {}
}

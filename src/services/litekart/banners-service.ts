import { getAPI } from './../../utils/api'

export const fetchBanners = async ({
  origin,
  pageId,
  storeId,
  sid = null
}: any) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(
  //     `banners?pageId=${pageId}&store=${storeId}&active=true`,
  //     sid
  //   )
  // } else {
  //   res = await getAPI(
  //     `banners?pageId=${pageId}&store=${storeId}&active=true`,
  //     origin
  //   )
  // }
  res = await getAPI(
    `banners?pageId=${pageId}&store=${storeId}&active=true`,
    origin,sid
  )

  return res.data || []
}

export const fetchBannersGroup = async ({
  origin,
  storeId,
  pageId,
  isServer,
  sid = null
}: any) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(
  //     `banners?pageId=${pageId}&store=${storeId}&active=true`,
  //     sid
  //   )
  // } else {
  //   res = await getAPI(
  //     `banners?pageId=${pageId}&store=${storeId}&active=true`,
  //     origin
  //   )
  // }
  res = await getAPI(
    `banners?pageId=${pageId}&store=${storeId}&active=true`,
    origin,sid
  )

  return res.data || []
}

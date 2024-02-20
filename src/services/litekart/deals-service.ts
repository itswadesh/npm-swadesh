import { getAPI } from './../../utils/api'

export const fetchDeals = async ({
  origin,
  query,
  storeId,
  sid = null
}: any) => {
  let res: any = {}

  // if (isServer || isCors) {
  //   res = await getBySid(`deals?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`deals?store=${storeId}`, origin)
  // }

  res = await getAPI(`deals?store=${storeId}`, origin, sid)

  return res || {}
}

import { getAPI } from './../../utils/api'

export const fetchCoupons = async ({ origin, storeId, sid = null }: any) => {
  let res: any = {}

  // if (isServer || isCors) {
  //   res = await getBySid(`coupons?sort=rank&store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`coupons?sort=rank&store=${storeId}`, origin)
  // }

  res = await getAPI(`coupons?sort=rank&store=${storeId}`, origin, sid)

  return res
}

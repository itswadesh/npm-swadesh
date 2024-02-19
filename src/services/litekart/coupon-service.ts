import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const fetchCoupons = async ({
  isCors = false,
  origin,
  storeId,
  sid = null,
  isServer
}: any) => {
 
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`coupons?sort=rank&store=${storeId}`, sid)
    } else {
      res = await getAPI(`coupons?sort=rank&store=${storeId}`, origin)
    }

    return res
}

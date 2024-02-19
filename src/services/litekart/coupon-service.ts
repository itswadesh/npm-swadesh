import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'
import { error } from '@sveltejs/kit'
// @ts-ignore
const isServer = import.meta.env.SSR

export const fetchCoupons = async ({
  isCors = false,
  origin,
  storeId,
  sid = null
}: any) => {
  try {
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`coupons?sort=rank&store=${storeId}`, sid)
    } else {
      res = await getAPI(`coupons?sort=rank&store=${storeId}`, origin)
    }

    return res
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

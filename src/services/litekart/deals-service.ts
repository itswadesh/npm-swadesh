import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'
// @ts-ignore
const isServer = import.meta.env.SSR

export const fetchDeals = async ({
  isCors = false,
  origin,
  query,
  storeId,
  sid = null
}: any) => {
  try {
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`deals?store=${storeId}`, sid)
    } else {
      res = await getAPI(`deals?store=${storeId}`, origin)
    }

    return res || {}
  } catch (e) {
    return {}
  }
}

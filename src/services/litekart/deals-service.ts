import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const fetchDeals = async ({
  isCors = false,
  origin,
  query,
  storeId,
  sid = null,
  isServer
}: any) => {
  
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`deals?store=${storeId}`, sid)
    } else {
      res = await getAPI(`deals?store=${storeId}`, origin)
    }

    return res || {}
}

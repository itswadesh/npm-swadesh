import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const fetchProductCheckDiscount = async ({
  origin,
  pid,
  storeId,
  sid = null,
  isServer
}: any) => {
    let res: any = {}

    if (isServer) {
      res = await getBySid(
        `products/check-discount/${pid}?store=${storeId}`,
        sid
      )
    } else {
      res = await getAPI(
        `products/check-discount/${pid}?store=${storeId}`,
        origin
      )
    }

    return res || {}
}

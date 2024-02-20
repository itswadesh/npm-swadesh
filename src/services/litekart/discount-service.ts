import { getAPI } from './../../utils/api'


export const fetchProductCheckDiscount = async ({
  origin,
  pid,
  storeId,
  sid = null,
}: any) => {
    let res: any = {}

    // if (isServer) {
    //   res = await getBySid(
    //     `products/check-discount/${pid}?store=${storeId}`,
    //     sid
    //   )
    // } else {
    //   res = await getAPI(
    //     `products/check-discount/${pid}?store=${storeId}`,
    //     origin
    //   )
    // }

    res = await getAPI(
      `products/check-discount/${pid}?store=${storeId}`,
      origin, sid
    )

    return res || {}
}

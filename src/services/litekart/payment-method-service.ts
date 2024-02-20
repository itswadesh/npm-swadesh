import { getAPI } from './../../utils/api'


export const fetchPaymentMethods = async ({
  origin = null,
  storeId,
  sid = null,
}) => {
    let res: any = {}

    // if (isServer) {
    //   res = await getBySid(`payment-methods?store=${storeId}`, sid)
    // } else {
    //   res = await getAPI(`payment-methods?store=${storeId}`, origin)
    // }

    res = await getAPI(`payment-methods?store=${storeId}`, origin, sid)

    return res?.data || []
}

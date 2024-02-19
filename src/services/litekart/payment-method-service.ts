import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'


export const fetchPaymentMethods = async ({
  origin = null,
  storeId,
  sid = null,
  isServer
}) => {
  
    let res: any = {}

    if (isServer) {
      res = await getBySid(`payment-methods?store=${storeId}`, sid)
    } else {
      res = await getAPI(`payment-methods?store=${storeId}`, origin)
    }
    return res?.data || []
}

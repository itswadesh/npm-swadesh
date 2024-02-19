import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'
import { error } from '@sveltejs/kit'
// @ts-ignore
const isServer = import.meta.env.SSR

export const fetchPaymentMethods = async ({
  origin = null,
  storeId,
  sid = null
}) => {
  try {
    let res: any = {}

    if (isServer) {
      res = await getBySid(`payment-methods?store=${storeId}`, sid)
    } else {
      res = await getAPI(`payment-methods?store=${storeId}`, origin)
    }
    return res?.data || []
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

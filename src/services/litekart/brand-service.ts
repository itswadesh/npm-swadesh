import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'
import { error } from '@sveltejs/kit'
// @ts-ignore
const isServer = import.meta.env.SSR

export const fetchBrands = async ({ origin, storeId, sid = null }: any) => {
  try {
    let res: any = {}

    if (isServer) {
      res = await getBySid(`brands?store=${storeId}`, sid)
    } else {
      res = await getAPI(`brands?store=${storeId}`, origin)
    }

    return res.data || []
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

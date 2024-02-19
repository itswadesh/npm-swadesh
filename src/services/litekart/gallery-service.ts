import { error } from '@sveltejs/kit'
import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'
// @ts-ignore
const isServer = import.meta.env.SSR

export const fetchGallery = async ({ origin, storeId, sid = null }: any) => {
  try {
    let res: any = {}

    if (isServer) {
      res = await getBySid(`gallery?store=${storeId}`, sid)
    } else {
      res = await getAPI(`gallery?store=${storeId}`, origin)
    }

    return res.data || []
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

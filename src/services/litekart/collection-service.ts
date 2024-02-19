import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'
// @ts-ignore
const isServer = import.meta.env.SSR

export const fetchCollections = async ({
  origin,
  query,
  storeId,
  isCors = false,
  sid = null
}: any) => {
  try {
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`collections?store=${storeId}`, sid)
    } else {
      res = await getAPI(`collections?store=${storeId}`, origin)
    }

    return res || {}
  } catch (e) {
    return {}
  }
}

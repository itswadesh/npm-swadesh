import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const fetchCollections = async ({
  origin,
  query,
  storeId,
  isCors = false,
  sid = null,
  isServer
}: any) => {
  
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`collections?store=${storeId}`, sid)
    } else {
      res = await getAPI(`collections?store=${storeId}`, origin)
    }

    return res || {}
}

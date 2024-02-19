import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const fetchFeedbacks = async ({
  origin,
  query,
  storeId,
  sid = null,
  isServer
}: any) => {
 
    let res: any = {}

    if (isServer) {
      res = await getBySid(`reviews/top?store=${storeId}`, sid)
    } else {
      res = await getAPI(`reviews/top?store=${storeId}`, origin)
    }

    return res || {}
}

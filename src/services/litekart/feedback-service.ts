import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'
// @ts-ignore
const isServer = import.meta.env.SSR

export const fetchFeedbacks = async ({
  origin,
  query,
  storeId,
  sid = null
}: any) => {
  try {
    let res: any = {}

    if (isServer) {
      res = await getBySid(`reviews/top?store=${storeId}`, sid)
    } else {
      res = await getAPI(`reviews/top?store=${storeId}`, origin)
    }

    return res || {}
  } catch (e) {
    return {}
  }
}

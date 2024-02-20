import { getAPI } from './../../utils/api'


export const fetchFeedbacks = async ({
  origin,
  query,
  storeId,
  sid = null,
}: any) => {
    let res: any = {}

    // if (isServer) {
    //   res = await getBySid(`reviews/top?store=${storeId}`, sid)
    // } else {
    //   res = await getAPI(`reviews/top?store=${storeId}`, origin)
    // }

    res = await getAPI(`reviews/top?store=${storeId}`, origin, sid)

    return res || {}
}

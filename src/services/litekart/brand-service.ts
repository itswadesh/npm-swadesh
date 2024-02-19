import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const fetchBrands = async ({
  origin,
  storeId,
  isServer,
  sid = null
}: any) => {
  let res: any = {}

  if (isServer) {
    res = await getBySid(`brands?store=${storeId}`, sid)
  } else {
    res = await getAPI(`brands?store=${storeId}`, origin)
  }

  return res.data || []
}

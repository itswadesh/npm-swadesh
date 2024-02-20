import { getAPI } from './../../utils/api'

export const fetchBrands = async ({
  origin,
  storeId,
  sid = null
}: any) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(`brands?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`brands?store=${storeId}`, origin)
  // }
  res = await getAPI(`brands?store=${storeId}`, origin,sid)
  return res.data || []
}

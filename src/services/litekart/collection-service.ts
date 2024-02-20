import { getAPI } from './../../utils/api'


export const fetchCollections = async ({
  origin,
  query,
  storeId,
  isCors = false,
  sid = null,
}: any) => {  
    let res: any = {}

    // if (isServer || isCors) {
    //   res = await getBySid(`collections?store=${storeId}`, sid)
    // } else {
    //   res = await getAPI(`collections?store=${storeId}`, origin)
    // }

    res = await getAPI(`collections?store=${storeId}`, origin, sid)

    return res || {}
}

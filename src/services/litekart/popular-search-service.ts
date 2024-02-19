import { getAPI, post } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const savePopularSearch = async ({
  storeId,
  id,
  text,
  origin,
  sid = null
}: any) => {
  
    let res: any = {}

    res = await post(
      `popular-search`,
      {
        id,
        text,
        // popularity: 0,
        store: storeId
      },
      origin
    )

    return res
  
}

export const fetchPopularSearch = async ({
  origin,
  storeId,
  sid = null,
  isCors = false,
  isServer
}) => {
  
    let res: any = {}
    if (isServer || isCors) {
      res = await getBySid(`popular-search?store=${storeId}&active=true`, sid)
    } else {
      res = await getAPI(`popular-search?store=${storeId}&active=true`, origin)
    }

    return res.data || []
  
}

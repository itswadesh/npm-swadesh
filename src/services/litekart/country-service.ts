import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const fetchCountries = async ({ origin, storeId, sid = null,isServer }: any) => {
 
    let res: any = {}

    if (isServer) {
      res = await getBySid(`countries?limit=500&page=0&store=${storeId}`, sid)
    } else {
      res = await getAPI(`countries?limit=500&page=0&store=${storeId}`, origin)
    }

  
}

export const fetchStates = async ({
  origin,
  storeId,
  countryCode,
  sid = null,
  isServer
}: any) => {
  
    let res: any = {}

    if (isServer) {
      res = await getBySid(
        `states?countryCode=${countryCode}&limit=500&page=0&sort=name&store=${storeId}`,
        sid
      )
    } else {
      res = await getAPI(
        `states?countryCode=${countryCode}&limit=500&page=0&sort=name&store=${storeId}`,
        origin
      )
    }

    return res?.data || []
 
}

import { getAPI } from './../../utils/api'


export const fetchCountries = async ({ origin, storeId, sid = null }: any) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(`countries?limit=500&page=0&store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`countries?limit=500&page=0&store=${storeId}`, origin)
  // }
    
  res = await getAPI(`countries?limit=500&page=0&store=${storeId}`, origin, sid)

  return res
}

export const fetchAllCountries = async ({ origin, storeId, sid = null }: any) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(`countries/all?limit=500&page=0&store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`countries/all?limit=500&page=0&store=${storeId}`, origin)
  // }
    
  res = await getAPI(`countries/all?limit=500&page=0&store=${storeId}`, origin, sid)

  return res
}

export const fetchStates = async ({
  origin,
  storeId,
  countryCode,
  sid = null
}: any) => {
    let res: any = {}

    // if (isServer) {
    //   res = await getBySid(
    //     `states?countryCode=${countryCode}&limit=500&page=0&sort=name&store=${storeId}`,
    //     sid
    //   )
    // } else {
    //   res = await getAPI(
    //     `states?countryCode=${countryCode}&limit=500&page=0&sort=name&store=${storeId}`,
    //     origin
    //   )
    // }

    res = await getAPI(
      `states?countryCode=${countryCode}&limit=500&page=0&sort=name&store=${storeId}`,
      origin, sid
    )

    return res?.data || []
}

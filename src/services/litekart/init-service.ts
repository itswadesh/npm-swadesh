import { DOMAIN } from './../../config'
import { getBySid, gett } from './../../utils/server'

export const fetchInit = async ({ host, origin = null ,isServer}) => {
    let res = {}

    // DOMAIN value is proviede in case of self hosted and host value in case of SaaS
    if (!isServer) {
      res = await gett(`init?domain=${DOMAIN ? DOMAIN : host}`, origin)
    } else {
      res = await getBySid(`init?domain=${DOMAIN ? DOMAIN : host}`)
    }

    return res || { storeOne: {} }
}

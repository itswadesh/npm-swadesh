import { getAPI } from '../../utils'
import { DOMAIN } from './../../config'

export const fetchInit = async ({ host, origin = null }) => {
  let res = {}

  // DOMAIN value is proviede in case of self hosted and host value in case of SaaS
  res = await getAPI(`init?domain=${DOMAIN ? DOMAIN : host}`, origin)

  return res || { storeOne: {} }
}

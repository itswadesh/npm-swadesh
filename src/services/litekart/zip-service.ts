
import { getAPI } from './../../utils/api'

export const findZip = async ({ zip, origin, sid = null }) => {
  let res: any = {}

  // if (isServer) res = getBySid(`pincodes/${zip}`)
  // else res = getAPI(`pincodes/${zip}`, origin)

  res = getAPI(`pincodes/${zip}`, origin, sid)

  return res
}

export const findByCity = async (locals, q: string, origin, sid = null) => {
  let res: any = {}

  // if (isServer) res = getBySid(`pincodes?${q}`)
  // else res = getAPI(`pincodes?${q}`, origin)

  res = getAPI(`pincodes?${q}`, origin, sid)

  return res
}

export const groupByCity = async (locals, id: string, origin, sid = null) => {
  let res: any = {}

  // if (isServer) res = getBySid(`pincodes/group-by-city`)
  // else res = getAPI(`pincodes/group-by-city`, origin)

  res = getAPI(`pincodes/group-by-city`, origin, sid)

  return res
}

export const groupByState = async (locals, id: string, origin, sid = null) => {
  let res: any = {}

  // if (isServer) res = getBySid(`pincodes/group-by-state`)
  // else res = getAPI(`pincodes/group-by-state`, origin)

  res = getAPI(`pincodes/group-by-state`, origin, sid)

  return res
}

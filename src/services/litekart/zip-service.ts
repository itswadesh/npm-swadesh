
import { getBySid } from './../../utils/server'
import { getAPI } from './../../utils/api'



export const findZip = async ({ zip, origin ,isServer}) => {
  
    let data = {}
    if (isServer) data = getBySid(`pincodes/${zip}`)
    else data = getAPI(`pincodes/${zip}`, origin)
    return data
 
}

export const findByCity = async (locals: App.Locals, q: string) => {
  
    const data = await getBySid(`pincodes?${q}`)
    return data
 
}

export const groupByCity = async (locals: App.Locals, id: string) => {
  
    const data = await getBySid(`pincodes/group-by-city`)
    return data
 
}

export const groupByState = async (locals: App.Locals, id: string) => {
  
    const data = await getBySid(`pincodes/group-by-state`)
    return data
 
}

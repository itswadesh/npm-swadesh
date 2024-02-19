import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'


export const fetchMenuData = async ({
  isCors = false,
  origin,
  sid = null,
  storeId,
  isServer
}) => {
  
    let data: any = []

    if (isServer || isCors) {
      data = await getBySid(`menus?active=true&store=${storeId}`, sid)
    } else {
      data = await getAPI(`menus?active=true&store=${storeId}`, origin)
    }

    return data.data || []

}

import { getAPI } from './../../utils/api'


export const fetchMenuData = async ({
  isCors = false,
  origin,
  sid = null,
  storeId,
}) => {
    let data: any = []

    // if (isServer || isCors) {
    //   data = await getBySid(`menus?active=true&store=${storeId}`, sid)
    // } else {
    //   data = await getAPI(`menus?active=true&store=${storeId}`, origin)
    // }

    data = await getAPI(`menus?active=true&store=${storeId}`, origin, sid)

    return data.data || []

}

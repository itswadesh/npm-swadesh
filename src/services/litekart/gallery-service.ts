import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'


export const fetchGallery = async ({ origin, storeId, sid = null,isServer }: any) => {
    let res: any = {}

    if (isServer) {
      res = await getBySid(`gallery?store=${storeId}`, sid)
    } else {
      res = await getAPI(`gallery?store=${storeId}`, origin)
    }

    return res.data || []
}

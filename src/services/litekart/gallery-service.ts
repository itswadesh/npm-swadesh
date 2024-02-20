import { getAPI } from './../../utils/api'



export const fetchGallery = async ({ origin, storeId, sid = null }: any) => {
    let res: any = {}

    // if (isServer) {
    //   res = await getBySid(`gallery?store=${storeId}`, sid)
    // } else {
    //   res = await getAPI(`gallery?store=${storeId}`, origin)
    // }

    res = await getAPI(`gallery?store=${storeId}`, origin, sid)

    return res.data || []
}

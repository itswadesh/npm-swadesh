import { del, getAPI, post } from './../../utils/api'
import { getBySid } from './../../utils/server'


export const fetchReels = async ({
  currentPage = 1,
  origin,
  q = '',
  sid = null,
  sort = '-updatedAt',
  storeId,
  isServer
}: any) => {
  
    let res = {}

    if (isServer) {
      res = await getBySid(
        `reels?page=${currentPage}&search=${q}&sort=${sort}&store=${storeId}`,
        sid
      )
    } else {
      res = await getAPI(
        `reels?page=${currentPage}&search=${q}&sort=${sort}&store=${storeId}`,
        origin
      )
    }

    return res
  
}

export const fetchReel = async ({ id, origin, sid = null, storeId, isServer }: any) => {
  
    let res = {}

    if (isServer) {
      res = await getBySid(`reels/${id}?store=${storeId}`, sid)
    } else {
      res = await getAPI(`reels/${id}?store=${storeId}`, origin)
    }

    return res
}

export const saveReel = async ({
  active,
  id,
  img,
  link,
  name,
  product,
  type,
  sid = null,
  storeId,
}: any) => {
  
    let res = {}

    res = await post(
      `reels`,
      {
        id,
        active,
        img,
        link,
        name,
        product,
        type,
        store: storeId
      },
      origin
    )

    return res
}

export const deleteReel = async ({ id, origin, sid = null, storeId }: any) => {
  await del(`reels/${id}?store=${storeId}`, origin)
}

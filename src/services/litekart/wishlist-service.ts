import { getAPI, post } from './../../utils/api'
import { getBySid, postBySid } from './../../utils/server'

export const moveUnavailableItemsToWishlist = async ({
  origin,
  storeId,
  sid = null,
  isServer
}) => {
  
    let res: any = {}

    if (isServer) {
      res = await postBySid(
        `wishlists/move-unavailable-items-to-wishlist?store=${storeId}`,
        { store: storeId },
        sid
      )
    } else {
      res = await post(
        `wishlists/move-unavailable-items-to-wishlist?store=${storeId}`,
        { store: storeId },
        origin
      )
    }

    return res || {}
}

export const fetchWishlist = async ({
  origin,
  storeId,
  search = null,
  sort = '-createdAt',
  currentPage = 1,
  sid = null,
  isServer
}) => {
  
    let res: any = {}

    if (isServer && sid != null) {
      res = await getBySid(
        `wishlists/my?search=${search || ''}&sort=${sort}&page=${currentPage}&store=${storeId}`,
        sid
      )
    } else {
      res = await getAPI(
        `wishlists/my?search=${search || ''}&sort=${sort}&page=${currentPage}&store=${storeId}`,
        origin
      )
    }

    return res || []
}

export const checkWishlist = async ({
  origin,
  storeId,
  pid,
  vid,
  isCors = false,
  sid = null,
  isServer
}) => {
  // if (!sid) return false

  
    let res: any = {}

    if (isServer) {
      res = await getBySid(
        `wishlists/check?product=${pid}&variant=${vid}&store=${storeId}`,
        sid
      )
    } else {
      res = await getAPI(
        `wishlists/check?product=${pid}&variant=${vid}&store=${storeId}`,
        origin
      )
    }

    return res
}

export const toggleWishlistService = async ({
  pid,
  vid,
  isCors = false,
  origin,
  sid = null,
  storeId,
  isServer
}) => {
  
    let res: any = {}

    if (isServer || isCors) {
      res = await postBySid(
        `wishlists/toggle`,
        { product: pid, variant: vid, store: storeId },
        sid
      )
    } else {
      res = await post(
        `wishlists/toggle`,
        { product: pid, variant: vid, store: storeId },
        origin
      )
    }

    return res
}

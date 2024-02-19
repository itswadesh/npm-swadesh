import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'



export const fetchHome = async ({
  isCors = false,
  origin,
  pageId = 'home',
  sid = null,
  storeId,
  isServer
}: any) => {
  
    let categories = {}
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`home?store=${storeId}&pageId=${pageId}`, sid)
    } else {
      res = await getAPI(`home?store=${storeId}&pageId=${pageId}`, origin)
    }

    if (res?.categories?.data?.length) {
      categories = res?.categories?.data
    }

    return {
      brands: res?.brands,
      categories,
      html: res?.html,
      page: res?.page,
      trending: res?.trending,
      youMayLike: res?.youMayLike
    }
}

export const fetchCategoriesProducts = async ({
  categories,
  origin,
  sid = null,
  storeId,
  isServer
}) => {
  let categoriesProducts

  if (isServer) {
    categoriesProducts = await getBySid(
      `es/products?categories=${categories}&sort=-updatedAt&limit=20&store=${storeId}`,
      sid
    )
  } else {
    categoriesProducts = await getAPI(
      `es/products?categories=${categories}&sort=-updatedAt&limit=20&store=${storeId}`,
      origin
    )
  }

  return categoriesProducts
}

import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

export const fetchBlogs = async ({
  query,
  origin = null,
  storeId,
  isServer,
  sid = null
}) => {
  let res = {}

  if (isServer) {
    res = await getBySid(`blogs?store=${storeId}&${query}&sort=-updatedAt`, sid)
  } else {
    res = await getAPI(
      `blogs?store=${storeId}&${query}&sort=-updatedAt`,
      origin
    )
  }

  return res || {}
}

export const fetchLatestBlogs = async ({
  origin = null,
  storeId,
  isServer,
  sid = null
}) => {
  let res: any = {}

  if (isServer) {
    res = await getBySid(`blogs?sort=-updatedAt&limit=10&store=${storeId}`, sid)
  } else {
    res = await getAPI(
      `blogs?sort=-updatedAt&limit=10&store=${storeId}`,
      origin
    )
  }

  return res.data || []
}

export const fetchBlog = async ({
  slug,
  origin = null,
  storeId,
  isServer,
  sid = null
}) => {
  let res = {}

  if (isServer) {
    res = await getBySid(`blogs/${slug}?store=${storeId}`, sid)
  } else {
    res = await getAPI(`blogs/${slug}?store=${storeId}`, origin)
  }

  return res || {}
}

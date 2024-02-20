import { getAPI } from './../../utils/api'

export const fetchBlogs = async ({
  query,
  origin = null,
  storeId,
  sid = null
}) => {
  let res = {}

  // if (isServer) {
  //   res = await getBySid(`blogs?store=${storeId}&${query}&sort=-updatedAt`, sid)
  // } else {
  //   res = await getAPI(
  //     `blogs?store=${storeId}&${query}&sort=-updatedAt`,
  //     origin
  //   )
  // }

  res = await getAPI(
        `blogs?store=${storeId}&${query}&sort=-updatedAt`,
        origin,sid
      )

  return res || {}
}

export const fetchLatestBlogs = async ({
  origin = null,
  storeId,
  sid = null
}) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(`blogs?sort=-updatedAt&limit=10&store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(
  //     `blogs?sort=-updatedAt&limit=10&store=${storeId}`,
  //     origin
  //   )
  // }

  res = await getAPI(
        `blogs?sort=-updatedAt&limit=10&store=${storeId}`,
        origin,sid
      )

  return res.data || []
}

export const fetchBlog = async ({
  slug,
  origin = null,
  storeId,
  sid = null
}) => {
  let res = {}

  // if (isServer) {
  //   res = await getBySid(`blogs/${slug}?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`blogs/${slug}?store=${storeId}`, origin)
  // }

  res = await getAPI(`blogs/${slug}?store=${storeId}`, origin,sid)
  
  return res || {}
}

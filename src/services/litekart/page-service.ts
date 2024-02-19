import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'
import { error } from '@sveltejs/kit'
// @ts-ignore
const isServer = import.meta.env.SSR

export const fetchPages = async ({
  isCors = false,
  origin,
  storeId,
  sid = null
}: any) => {
  try {
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`pages?store=${storeId}`, sid)
    } else {
      res = await getAPI(`pages?store=${storeId}`, origin)
    }

    return res.data || []
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

export const fetchLatestPages = async ({
  origin,
  storeId,
  sid = null
}: any) => {
  try {
    let res: any = {}

    if (isServer) {
      res = await getBySid(
        `pages?sort=-updatedAt&limit=10&store=${storeId}`,
        sid
      )
    } else {
      res = await getAPI(
        `pages?sort=-updatedAt&limit=10&store=${storeId}`,
        origin
      )
    }

    return res.data || []
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

export const fetchPage = async ({
  isCors = false,
  origin,
  id,
  slug,
  storeId,
  sid = null
}: any) => {
  try {
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`pages/${id || slug}?store=${storeId}`, sid)
    } else {
      res = await getAPI(`pages/${id || slug}?store=${storeId}`, origin)
    }

    return res || {}
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

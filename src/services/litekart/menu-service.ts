import { error } from '@sveltejs/kit'
import { getAPI } from './../../utils/api'
import { getBySid } from './../../utils/server'

// @ts-ignore
const isServer = import.meta.env.SSR

export const fetchMenuData = async ({
  isCors = false,
  origin,
  sid = null,
  storeId
}) => {
  try {
    let data: any = []

    if (isServer || isCors) {
      data = await getBySid(`menus?active=true&store=${storeId}`, sid)
    } else {
      data = await getAPI(`menus?active=true&store=${storeId}`, origin)
    }

    return data.data || []
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

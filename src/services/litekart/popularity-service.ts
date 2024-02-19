import { error } from '@sveltejs/kit'
import { post } from './../../utils/api'
import { postBySid } from './../../utils/server'

// @ts-ignore
const isServer = import.meta.env.SSR

export const updatePopulatiry = async ({
  pid,
  storeId,
  origin,
  isCors = false,
  sid = null
}: any) => {
  try {
    let res: any | {}

    if (isServer || isCors) {
      res = await postBySid(`update-popularity`, { pid, store: storeId }, sid)
    } else {
      res = await post(`update-popularity`, { pid, store: storeId }, origin)
    }

    return res
  } catch (err) {
    error(err.status, err.message)
  }
}

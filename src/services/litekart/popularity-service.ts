import { post } from './../../utils/api'
import { postBySid } from './../../utils/server'

export const updatePopulatiry = async ({
  pid,
  storeId,
  origin,
  isCors = false,
  sid = null,
  isServer
}: any) => {
  
    let res: any | {}

    if (isServer || isCors) {
      res = await postBySid(`update-popularity`, { pid, store: storeId }, sid)
    } else {
      res = await post(`update-popularity`, { pid, store: storeId }, origin)
    }

    return res
}

import { post } from './../../utils/api'

export const updatePopulatiry = async ({
  pid,
  storeId,
  origin,
  sid = null
}: any) => {
  let res: any | {}

  // if (isServer) {
  //   res = await postBySid(`update-popularity`, { pid, store: storeId }, sid)
  // } else {
  res = await post(`update-popularity`, origin, { pid, store: storeId }, sid)
  // }

  return res
}

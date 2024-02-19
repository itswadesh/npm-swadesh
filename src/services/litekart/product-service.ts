import { getApiEndpoint } from '..'
import { getAPI } from '../../utils/api'
import { getBySid } from '../../utils/server'

export const fetchProducts = async ({
  origin,
  isCors = false,
  sid = null,
  isServer = true,
  storeId
}: any) => {
  let res: any = {}
  const HTTP_ENDPOINT = getApiEndpoint()
  console.log(
    'zzzzzzzzzzzzzzzzzzzzzzzzzzz',
    HTTP_ENDPOINT,
    origin,
    isCors,
    sid,
    isServer,
    storeId
  )
  if (isServer || isCors) {
    res = await getBySid(
      `${HTTP_ENDPOINT}/api/es/products?store=${storeId}`,
      sid
    )
  } else {
    res = await getAPI(
      `${HTTP_ENDPOINT}/api/es/products?store=${storeId}`,
      origin
    )
  }

  return res?.data || []
}

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
  const HTTP_ENDPOINT1 = getApiEndpoint()
  console.log(
    'pppppppppppppppppppppp',
    HTTP_ENDPOINT1,
    origin,
    isCors,
    sid,
    isServer,
    storeId
  )
  if (isServer || isCors) {
    res = await getBySid(
      `${HTTP_ENDPOINT1}/api/es/products?store=${storeId}`,
      sid
    )
  } else {
    res = await getAPI(
      `${HTTP_ENDPOINT1}/api/es/products?store=${storeId}`,
      origin
    )
  }

  return res?.data || []
}

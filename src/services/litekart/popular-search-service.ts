import { getAPI, post } from './../../utils/api'

export const savePopularSearch = async ({
  storeId,
  id,
  text,
  origin,
  sid = null
}: any) => {
  let res: any = {}

  res = await post(
    `popular-search`,
    origin,
    {
      id,
      text,
      // popularity: 0,
      store: storeId
    },
    sid
  )

  return res
}

export const fetchPopularSearch = async ({ origin, storeId, sid = null }) => {
  let res: any = {}

  // if (isServer || isCors) {
  //   res = await getBySid(`popular-search?store=${storeId}&active=true`, sid)
  // } else {
  //   res = await getAPI(`popular-search?store=${storeId}&active=true`, origin)
  // }

  res = await getAPI(`popular-search?store=${storeId}&active=true`, origin, sid)

  return res.data || []
}

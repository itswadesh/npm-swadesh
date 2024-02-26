import { getAPI, post } from './../../utils/api'

export const fetchReviews = async ({
  origin,
  storeId,
  search,
  sort,
  currentPage,
  sid = null
}: any) => {
  let res: any = {}

  // if (isServer || isCors) {
  //   res = await getBySid(
  //     `es/reviews?search=${search || ''}&sort=${sort}&page=${currentPage}&store=${storeId}`,
  //     sid
  //   )
  // } else {
  //   res = await getAPI(
  //     `es/reviews?search=${search || ''}&sort=${sort}&page=${currentPage}&store=${storeId}`,
  //     origin
  //   )
  // }

  res = await getAPI(
    `es/reviews?search=${search || ''}&sort=${sort}&page=${currentPage}&store=${storeId}`,
    origin,
    sid
  )

  return {
    data: res.data || [],
    count: res.count,
    pageSize: res.pageSize,
    noOfPage: res.noOfPage,
    page: res.page
  }
}

// Fetch product reviews

export const fetchProductReviews = ({
  origin,
  page,
  slug,
  sid = null,
  storeId
}: any) => {
  return getAPI(
    `reviews/product-reviews?slug=${slug}&page=${page}&sort=-createdAt&store=${storeId}`,
    origin,
    sid
  )
}

export const saveReview = async ({
  id,
  images,
  message,
  oid,
  pid,
  rating,
  storeId,
  origin,
  sid
}: any) => {
  let res: any = {}

  res = await post(
    `reviews`,
    origin,
    {
      id,
      images,
      message,
      oid,
      pid,
      rating,
      store: storeId
    },
    sid
  )

  return res
}

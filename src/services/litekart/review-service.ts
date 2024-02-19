import { getAPI, post } from './../../utils/api'
import { getBySid } from './../../utils/server'


export const fetchReviews = async ({
  isCors = false,
  origin,
  storeId,
  search,
  sort,
  isServer,
  currentPage,
  sid = null
}: any) => {
  
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(
        `es/reviews?search=${search || ''}&sort=${sort}&page=${currentPage}&store=${storeId}`,
        sid
      )
    } else {
      res = await getAPI(
        `es/reviews?search=${search || ''}&sort=${sort}&page=${currentPage}&store=${storeId}`,
        origin
      )
    }

    return {
      data: res.data || [],
      count: res.count,
      pageSize: res.pageSize,
      noOfPage: res.noOfPage,
      page: res.page
    }
}

// Fetch product reviews

export const fetchProductReviews = async ({
  isCors = false,
  origin,
  page,
  slug,
  sid = null,
  storeId,
  isServer
}: any) => {
  
    let productReviewsRes: any = {}
    // : ProductReviews[]
    let productReviews = []

    if (isServer || isCors) {
      productReviewsRes = await getBySid(
        `reviews/product-reviews?slug=${slug}&page=${page}&sort=-createdAt&store=${storeId}`,
        sid
      )
    } else {
      productReviewsRes = await getAPI(
        `reviews/product-reviews?slug=${slug}&page=${page}&sort=-createdAt&store=${storeId}`,
        origin
      )
    }

    productReviews = productReviewsRes

    return productReviews || []
}

export const saveReview = async ({
  id,
  images,
  message,
  oid,
  pid,
  rating,
  storeId,
  origin
}: any) => {
    let res: any = {}

    res = await post(
      `reviews`,
      {
        id,
        images,
        message,
        oid,
        pid,
        rating,
        store: storeId
      },
      origin
    )

    return res
}

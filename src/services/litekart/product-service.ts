import { getAPI } from '../../utils/api'
import { getBySid } from '../../utils/server'

export const fetchProducts = async ({
  query = '',
  origin,
  sid = null,
  storeId
}: any) => {
  let res: any = {}

  // if (isServer || isCors) {
  //   res = await getBySid(`es/products?store=${storeId}&${query}`, sid)
  // } else {
  //   res = await getAPI(`es/products?store=${storeId}&${query}`, origin)
  // }

  res = await getAPI(`es/products?store=${storeId}&${query}`, origin, sid)

  return res || {}
}

export const fetchReels = async ({ origin, storeId, sid = null }: any) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(`reels?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`reels?store=${storeId}`, origin)
  // }

  res = await getAPI(`reels?store=${storeId}`, origin, sid)

  res.data = res.data.map((d) => {
    return { ...d, muted: false }
  })

  return res || {}
}

// Fetch single product

export const fetchProduct = ({ origin, slug, id, storeId, sid }) => {
  return getAPI(`es/products/${slug || id}?store=${storeId}`, origin, sid)
}

// Fetch products more requirements

export const fetchProduct2 = ({ origin, slug, storeId, id, sid = null }) => {
  return getAPI(`es/products2/${slug || id}?store=${storeId}`, origin, sid)
}

// Fetch products based on category

export const fetchProductsOfCategory = async ({
  categorySlug,
  origin,
  query,
  sid = null,
  storeId,
  zip = null
}) => {
  let res: any = {}
  let products: [] = []
  let count = 0
  let facets = ''
  let pageSize = 0
  let category = {}
  let err = ''

  // if (isServer) {
  //   res = await getBySid(
  //     `es/products?categories=${categorySlug}&zip=${zip || ''}&store=${storeId}&${query}`,
  //     sid
  //   )
  // } else {
  //   res = await getAPI(
  //     `es/products?categories=${categorySlug}&zip=${zip || ''}&store=${storeId}&${query}`,
  //     origin
  //   )
  // }

  res = await getAPI(
    `es/products?categories=${categorySlug}&zip=${zip || ''}&store=${storeId}&${query}`,
    origin,
    sid
  )

  products = res?.data?.map((p) => {
    if (p._source) {
      const p1 = { ...p._source }
      p1.id = p._id
      return p1
    } else {
      return p
    }
  })

  count = res?.count
  facets = res?.facets
  pageSize = res?.pageSize
  category = res?.category
  err = !res?.estimatedTotalHits ? 'No result Not Found' : null

  return { products, count, facets, pageSize, category, err }
}

// Fetch next product
export const fetchNextPageProducts = async ({
  origin,
  storeId,
  categorySlug,
  nextPage,
  searchParams = {},
  sid = null
}) => {
  let nextPageData = []
  let res: any = {}

  // if (isServer || isCors) {
  //   res = await getBySid(
  //     `es/products?categories=${categorySlug}&store=${storeId}&page=${nextPage}&${searchParams}`,
  //     sid
  //   )
  // } else {
  //   res = await getAPI(
  //     `es/products?categories=${categorySlug}&store=${storeId}&page=${nextPage}&${searchParams}`,
  //     origin
  //   )
  // }

  res = await getAPI(
    `es/products?categories=${categorySlug}&store=${storeId}&page=${nextPage}&${searchParams}`,
    origin,
    sid
  )

  nextPageData = res?.data?.map((p) => {
    if (p._source) {
      const p1 = { ...p._source }
      p1.id = p._id
      return p1
    } else {
      return p
    }
  })

  return {
    category: res.category,
    count: res.count,
    estimatedTotalHits: res.estimatedTotalHits,
    facets: res.facets,
    nextPageData: nextPageData || []
  }
}

// Fetch related products

export const fetchRelatedProducts = async ({
  origin,
  storeId,
  categorySlug,
  pid,
  sid = null
}) => {
  let relatedProductsRes: any = {}

  // if (isServer || isCors) {
  //   relatedProductsRes = await getBySid(
  //     `es/products?categories=${categorySlug}&store=${storeId}`,
  //     sid
  //   )
  // } else {
  //   relatedProductsRes = await getAPI(
  //     `es/products?categories=${categorySlug}&store=${storeId}`,
  //     origin
  //   )
  // }

  relatedProductsRes = await getAPI(
    `es/products?categories=${categorySlug}&store=${storeId}`,
    origin,
    sid
  )

  const relatedProducts = relatedProductsRes?.data.filter((p) => {
    return p._id !== pid
  })

  return relatedProducts || []
}

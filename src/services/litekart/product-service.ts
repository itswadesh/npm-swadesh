import { getAPI } from '../../utils/api'
import { getBySid } from '../../utils/server'

export const fetchProducts = async ({
  query = '',
  origin,
  isCors = false,
  sid = null,
  isServer = true,
  storeId
}: any) => {
  let res: any = {}

  if (isServer || isCors) {
    res = await getBySid(`es/products?store=${storeId}&${query}`, sid)
  } else {
    res = await getAPI(`es/products?store=${storeId}&${query}`, origin)
  }

  return res?.data || []
}

export const fetchReels = async ({
  origin,
  storeId,
  isServer,
  sid = null
}: any) => {
  let res: any = {}

  if (isServer) {
    res = await getBySid(`reels?store=${storeId}`, sid)
  } else {
    res = await getAPI(`reels?store=${storeId}`, origin)
  }
  res.data = res.data.map((d) => {
    return { ...d, muted: false }
  })
  return res || {}
}

// Fetch single product

export const fetchProduct = async ({
  origin,
  slug,
  id,
  isServer,
  storeId,
  isCors = false,
  sid
}) => {
  let res: object = {}

  if (isServer || isCors) {
    res = await getBySid(`es/products/${slug || id}?store=${storeId}`, sid)
  } else {
    res = await getAPI(`es/products/${slug || id}?store=${storeId}`, origin)
  }
  return res || {}
}

// Fetch products more requirements

export const fetchProduct2 = async ({
  origin,
  slug,
  isServer,
  storeId,
  id,
  sid = null
}) => {
  let res: object = {}
  if (isServer) {
    res = await getBySid(`es/products2/${slug || id}?store=${storeId}`, sid)
  } else {
    res = await getAPI(`es/products2/${slug || id}?store=${storeId}`, origin)
  }
  return res || {}
}

// Fetch products based on category

export const fetchProductsOfCategory = async ({
  categorySlug,
  origin,
  query,
  isServer,
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

  if (isServer) {
    res = await getBySid(
      `es/products?categories=${categorySlug}&zip=${zip || ''}&store=${storeId}&${query}`,
      sid
    )
  } else {
    res = await getAPI(
      `es/products?categories=${categorySlug}&zip=${zip || ''}&store=${storeId}&${query}`,
      origin
    )
  }

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
  isCors = false,
  origin,
  storeId,
  isServer,
  categorySlug,
  nextPage,
  searchParams = {},
  sid = null
}) => {
  let nextPageData = []
  let res: any = {}

  if (isServer || isCors) {
    res = await getBySid(
      `es/products?categories=${categorySlug}&store=${storeId}&page=${nextPage}&${searchParams}`,
      sid
    )
  } else {
    res = await getAPI(
      `es/products?categories=${categorySlug}&store=${storeId}&page=${nextPage}&${searchParams}`,
      origin
    )
  }

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
  isCors = false,
  origin,
  storeId,
  isServer,
  categorySlug,
  pid,
  sid = null
}) => {
  let relatedProductsRes: any = {}

  if (isServer || isCors) {
    relatedProductsRes = await getBySid(
      `es/products?categories=${categorySlug}&store=${storeId}`,
      sid
    )
  } else {
    relatedProductsRes = await getAPI(
      `es/products?categories=${categorySlug}&store=${storeId}`,
      origin
    )
  }

  const relatedProducts = relatedProductsRes?.data.filter((p) => {
    return p._id !== pid
  })

  return relatedProducts || []
}

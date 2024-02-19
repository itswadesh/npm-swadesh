import { error } from '@sveltejs/kit'
import { getAPI } from '../../utils/api'
import { getBySid } from '../../utils/server'
// @ts-ignore
import type { AllProducts, Product } from '$lib/types'
// @ts-ignore
const isServer = import.meta.env.SSR

// Search product

export const searchProducts = async ({
  origin,
  query,
  storeId,
  sid = null
}) => {
  try {
    let category = ''
    let count = 0
    let err = ''
    let facets = ''
    let pageSize = 0
    let products = []
    let res: any = {}
    let style_tags = []

    if (isServer) {
      res = await getBySid(`es/products?${query}&store=${storeId}`, sid)
    } else {
      res = await getAPI(`es/products?${query}&store=${storeId}`, origin)
    }
    res = res || {}
    // @ts-ignore
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
    err = !res?.estimatedTotalHits ? 'No result Not Found' : null

    return { products, count, facets, pageSize, err }
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

// Fetch all products

export const fetchProducts = async ({
  id,
  query = '',
  origin,
  isCors = false,
  sid = null,
  slug,
  storeId
}: any) => {
  try {
    let res: AllProducts | {} = {}

    if (isServer || isCors) {
      res = await getBySid(`es/products?store=${storeId}&${query}`, sid)
    } else {
      res = await getAPI(`es/products?store=${storeId}&${query}`, origin)
    }

    return res?.data || []
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

export const fetchReels = async ({
  origin,
  storeId,
  slug,
  id,
  sid = null
}: any) => {
  try {
    let res: AllProducts | {} = {}

    if (isServer) {
      res = await getBySid(`reels?store=${storeId}`, sid)
    } else {
      res = await getAPI(`reels?store=${storeId}`, origin)
    }
    res.data = res.data.map((d) => {
      return { ...d, muted: false }
    })
    return res || {}
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

// Fetch single product

export const fetchProduct = async ({
  origin,
  slug,
  id,
  storeId,
  isCors = false,
  sid
}) => {
  try {
    let res: Product | object = {}

    if (isServer || isCors) {
      res = await getBySid(`es/products/${slug || id}?store=${storeId}`, sid)
    } else {
      res = await getAPI(`es/products/${slug || id}?store=${storeId}`, origin)
    }
    return res || {}
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

// Fetch products more requirements

export const fetchProduct2 = async ({
  origin,
  slug,
  storeId,
  id,
  sid = null
}) => {
  try {
    let res: Product | object = {}
    if (isServer) {
      res = await getBySid(`es/products2/${slug || id}?store=${storeId}`, sid)
    } else {
      res = await getAPI(`es/products2/${slug || id}?store=${storeId}`, origin)
    }
    return res || {}
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
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
  try {
    let res: any = {}
    let products: Product[] = []
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
  } catch (e) {
    return {}
  }
}

// Fetch next product

export const fetchNextPageProducts = async ({
  isCors = false,
  origin,
  storeId,
  categorySlug,
  nextPage,
  searchParams = {},
  sid = null
}) => {
  try {
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
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

// Fetch related products

export const fetchRelatedProducts = async ({
  isCors = false,
  origin,
  storeId,
  categorySlug,
  pid,
  sid = null
}) => {
  try {
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
  } catch (e) {
    error(e.status, e.data?.message || e.message)
  }
}

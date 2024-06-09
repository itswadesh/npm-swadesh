import { getAPI } from './../../utils/api'

export const fetchFooterCategories = async ({
  origin,
  megamenu = false,
  sid = null,
  storeId
}) => {
  let data: []

  // if (isServer || isCors) {
  //   data = await getBySid(
  //     `categories?megamenu=${megamenu}&limit=6&page=0&level=0&store=${storeId}`,
  //     sid
  //   )
  // } else {
  //   data = await getAPI(
  //     `categories?megamenu=${megamenu}&limit=6&page=0&level=0&store=${storeId}`,
  //     origin
  //   )
  // }

  data = await getAPI(
    `categories?megamenu=${megamenu}&limit=6&page=0&level=0&store=${storeId}`,
    origin,
    sid
  )

  return data || []
}

export const fetchCategory = async ({
  children = false,
  id,
  origin,
  sid = null,
  storeId
}) => {
  let res = {}

  // if (isServer || isCors) {
  //   res = await getBySid(
  //     `es/categories/${id}?store=${storeId}&children=${children}`,
  //     sid
  //   )
  // } else {
  //   res = await getAPI(
  //     `es/categories/${id}?store=${storeId}&children=${children}`,
  //     origin
  //   )
  // }

  res = await getAPI(
    `es/categories/${id}?store=${storeId}&children=${children}`,
    origin,
    sid
  )

  return res || {}
}

export const fetchAllCategories = async ({
  featured = false,
  home = false,
  limit = null,
  origin,
  sid = null,
  storeId
}) => {
  let res: any = {}

  let catQ = `categories?store=${storeId}&page=0&limit=${limit || '1000'}`

  if (featured) {
    catQ += '&featured=true'
  }

  if (home) {
    catQ += '&home=true'
  }

  // if (isServer || isCors) {
  //   res = await getBySid(catQ, sid)
  // } else {
  //   res = await getAPI(catQ, origin)
  // }

  res = await getAPI(catQ, origin, sid)

  const currentPage = res.currentPage
  const data = res.data
  const pageSize = res.pageSize

  return { data, pageSize, currentPage }
}

export const fetchAllProductsOfCategories = async ({
  featured = false,
  origin,
  sid = null,
  storeId
}) => {
  let res: any = {}
  let products = []
  let productsCount = 0
  let currentPage = 0
  let facets = {}
  let err = null

  let catQ = `categories?store=${storeId}`

  if (featured) {
    catQ += '&featured=true'
  }

  // if (isServer || isCors) {
  //   res = await getBySid(catQ, sid)
  // } else {
  //   res = await getAPI(catQ, origin)
  // }

  res = await getAPI(catQ, origin, sid)

  // must return link:string, slug:string(optional) name:string, new:boolean

  currentPage = res?.page
  err = !products ? 'No result Not Found' : null
  facets = res?.facets?.all_aggs
  products = res?.data || []
  productsCount = res?.count

  return { products, productsCount, currentPage, facets, err }
}

export const fetchMegamenuData = async ({
  megamenu = false,
  origin,
  sid = null,
  storeId
}) => {
  let data: []

  // if (isServer || isCors) {
  //   data = await getBySid(
  //     `categories/megamenu?megamenu=${megamenu}&store=${storeId}&active=true`,
  //     sid
  //   )
  // } else {
  //   data = await getAPI(
  //     `categories/megamenu?megamenu=${megamenu}&store=${storeId}&active=true`,
  //     origin
  //   )
  // }

  data = await getAPI(
    `categories/megamenu?megamenu=${megamenu}&store=${storeId}&active=true`,
    origin,
    sid
  )

  return data || []
}

export const fetchCategoriesSelectedByUser = async ({
  isCors = false,
  origin,
  sid = null,
  storeId
}) => {
  let data: []

  // if (isServer || isCors) {
  //   data = await getBySid(
  //     `category-selected-by-user?store=${storeId}`,
  //     sid
  //   )
  // } else {
  //   data = await getAPI(
  //     `category-selected-by-user?store=${storeId}`,
  //     origin
  //   )
  // }

  data = await getAPI(
    `category-selected-by-user?store=${storeId}`,
    origin, sid
  )

  return data || []
}
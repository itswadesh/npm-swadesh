import { del, getAPI, post } from './../../utils/api'

export const fetchCartData = async ({
  cartId = null,
  origin,
  sid = null,
  storeId
}) => {
  let res = {}

  if (cartId) {
    // if (isServer) {
    //   res = await getBySid(`cart?store=${storeId}&cart_id=${cartId}`, sid)
    // } else {
    //   res = await getAPI(`cart?store=${storeId}&cart_id=${cartId}`, origin)
    // }

    res = await getAPI(`cart?store=${storeId}&cart_id=${cartId}`, origin, sid)
  }

  return res || {}
}

export const fetchRefreshCart = async ({
  cartId,
  paymentFlow,
  origin = null,
  sid = null,
  storeId
}) => {
  let res = {}

  if (cartId) {
    // if (isServer || isCors) {
    //   res = await getBySid(
    //     `carts/refresh-cart?store=${storeId}&cart_id=${cartId}`,
    //     sid
    //   )
    //   // res = await getBySid(`carts/my?store=${storeId}`, sid)
    // } else {
    //   res = await getAPI(
    //     `carts/refresh-cart?store=${storeId}&cart_id=${cartId}`,
    //     origin
    //   )
    // }

    res = await getAPI(
      `carts/refresh-cart?store=${storeId}&cart_id=${cartId}&payment_flow=${paymentFlow}`,
      origin,
      sid
    )
  }

  return res || {}
}

export const fetchMyCart = async ({
  cartId = null,
  origin,
  sid = null,
  storeId
}) => {
  let res = {}

  if (cartId) {
    // if (isServer) {
    //   res = await getBySid(`carts/my?store=${storeId}&cart_id=${cartId}`, sid)
    // } else {
    //   res = await getAPI(`carts/my?store=${storeId}&cart_id=${cartId}`, origin)
    // }

    res = await getAPI(
      `carts/my?store=${storeId}&cart_id=${cartId}`,
      origin,
      sid
    )
  }

  return res || {}
}

export const addToCartService = async ({
  cartId,
  customizedData = null,
  customizedImg = null,
  is_free_item = false,
  options = null,
  pid,
  qty,
  replaceQty = false,
  vid,
  origin = null,
  sid = null,
  storeId
}) => {
  let res = {}
  res = await post(
    `carts/add-to-cart?store=${storeId}&cart_id=${cartId}`,
    origin,
    {
      cart_id: cartId,
      customizedData,
      customizedImg,
      is_free_item,
      options,
      pid,
      qty,
      replaceQty,
      vid,
      store: storeId
    },
    sid
  )
  return res || {}
}

export const createBackOrder = async ({
  pid,
  qty,
  origin = null,
  sid = null,
  storeId
}) => {
  let res = {}

  // if (isServer) {
  //   res = await postBySid(
  //     `backorder`,
  //     {
  //       pid,
  //       qty,
  //       store: storeId
  //     },
  //     sid
  //   )
  // } else {
  res = await post(
    `backorder`,
    origin,
    {
      id: 'new',
      pid,
      qty,
      store: storeId
    },
    sid
  )


  return res || {}
}

export const applyCouponService = async ({
  cartId,
  code,
  origin,
  sid = null,
  storeId
}) => {
  let res = {}

  res = await post(
    `coupons/apply?cart_id=${cartId}`,
    origin,
    {
      cart_id: cartId,
      code,
      store: storeId
    },
    sid
  )

  return res || {}
}

export const removeCouponService = async ({
  cartId,
  code,
  origin,
  sid = null,
  storeId
}) => {
  let res = {}

  res = await del(
    `coupons/remove?code=${code}&store=${storeId}&cart_id=${cartId}`,
    origin, sid
  )

  return res || {}
}

export const updateCart = async ({
  billing_address_id,
  billingAddress,
  cartId = '',
  selfTakeout,
  shipping_address_id,
  origin = null,
  sid = null,
  shippingAddress,
  storeId
}) => {
  let res = {}

  // if (isServer) {
  //   res = await postBySid(
  //     `carts/update-cart`,
  //     {
  //       billing_address_id,
  //       billing_address: billingAddress,
  //       cart_id: cartId,
  //       selfTakeout,
  //       shipping_address_id,
  //       shipping_address: shippingAddress,
  //       store: storeId
  //     },
  //     sid
  //   )
  // } else {
  res = await post(
    `carts/update-cart`,
    origin,
    {
      billing_address_id,
      billing_address: billingAddress,
      cart_id: cartId,
      selfTakeout,
      shipping_address_id,
      shipping_address: shippingAddress,
      store: storeId
    },
    sid
  )
}

export const updateCart2 = async ({
  cartId,
  selected_products_for_checkout,
  origin = null,
  sid = null,
  storeId
}) => {
  let res = {}

  // if (isServer) {
  //   res = await postBySid(
  //     `carts/update-cart`,
  //     {
  //       cart_id: cartId,
  //       selected_products_for_checkout,
  //       store: storeId
  //     },
  //     sid
  //   )
  // } else {
  res = await post(
    `carts/update-cart`,
    origin,
    {
      cart_id: cartId,
      selected_products_for_checkout,
      store: storeId
    },
    sid
  )

  return res || {}
}

export const updateCart3 = async ({
  shipping_address,
  billing_address,
  cartId,
  selfTakeout,
  origin = null,
  sid = null,
  storeId
}) => {
  let res = {}

  // if (isServer) {
  //   res = await postBySid(
  //     `carts/update-cart`,
  //     {
  //       cart_id: cartId,
  //       selfTakeout,
  //       shipping_address,
  //       billing_address,
  //       store: storeId
  //     },
  //     sid
  //   )
  // } else {
  res = await post(
    `carts/update-cart`,
    origin,
    {
      cart_id: cartId,
      selfTakeout,
      shipping_address,
      billing_address,
      store: storeId
    },
    sid
  )


  return res || {}
}

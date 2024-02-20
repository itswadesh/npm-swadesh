import { del, getAPI, post } from './../../utils/api'
import {  postBySid } from './../../utils/server'

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

    res = await getAPI(`cart?store=${storeId}&cart_id=${cartId}`, origin,sid)
  }

  return res || {}
}

export const fetchRefreshCart = async ({
  cartId,
  isCors = false,
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
          `carts/refresh-cart?store=${storeId}&cart_id=${cartId}`,
          origin,sid
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
    
    res = await getAPI(`carts/my?store=${storeId}&cart_id=${cartId}`, origin, sid)
  }

  return res || {}
}

export const addToCartService = async ({
  cartId,
  customizedData = null,
  customizedImg = null,
  options = null,
  pid,
  qty,
  vid,
  origin = null,
  sid = null,
  isServer,
  storeId
}) => {
  let res = {}

  if (isServer) {
    res = await postBySid(
      `carts/add-to-cart?store=${storeId}&cart_id=${cartId}`,
      {
        cart_id: cartId,
        customizedData,
        customizedImg,
        options,
        pid,
        qty,
        vid,
        store: storeId
      },
      sid
    )
  } else {
    res = await post(
      `carts/add-to-cart?store=${storeId}&cart_id=${cartId}`,
      {
        pid,
        vid,
        qty,
        customizedImg,
        store: storeId,
        cart_id: cartId,
        customizedData,
        options
      },
      origin
    )
  }

  return res || {}
}

export const createBackOrder = async ({
  pid,
  qty,
  origin = null,
  sid = null,
  isServer,
  storeId
}) => {
  let res = {}
  
  if (isServer) {
    res = await postBySid(
      `backorder`,
      {
        pid,
        qty,
        store: storeId
      },
      sid
    )
  } else {
    res = await post(
      `backorder`,
      {
        id: 'new',
        pid,
        qty,
        store: storeId
      },
      origin
    )
  }

  return res || {}
}

export const applyCouponService = async ({
  cartId,
  code,
  origin,
  isServer,
  sid = null,
  storeId
}) => {
  let res = {}

  res = await post(
    `coupons/apply?cart_id=${cartId}`,
    {
      cart_id: cartId,
      code,
      store: storeId
    },
    origin
  )

  return res || {}
}

export const removeCouponService = async ({
  cartId,
  code,
  origin,
  sid = null,
  isServer,
  storeId
}) => {
  let res = {}

  res = await del(
    `coupons/remove?code=${code}&store=${storeId}&cart_id=${cartId}`,
    origin
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
  isServer,
  shippingAddress,
  storeId
}) => {
  let res = {}

  if (isServer) {
    res = await postBySid(
      `carts/update-cart`,
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
  } else {
    res = await post(
      `carts/update-cart`,
      {
        billing_address_id,
        billing_address: billingAddress,
        cart_id: cartId,
        selfTakeout,
        shipping_address_id,
        shipping_address: shippingAddress,
        store: storeId
      },
      origin
    )
  }
}

export const updateCart2 = async ({
  cartId,
  selected_products_for_checkout,
  origin = null,
  sid = null,
  isServer,
  storeId
}) => {
  let res = {}

  if (isServer) {
    res = await postBySid(
      `carts/update-cart`,
      {
        cart_id: cartId,
        selected_products_for_checkout,
        store: storeId
      },
      sid
    )
  } else {
    res = await post(
      `carts/update-cart`,
      {
        cart_id: cartId,
        selected_products_for_checkout,
        store: storeId
      },
      origin
    )
  }

  return res || {}
}

export const updateCart3 = async ({
  shipping_address,
  billing_address,
  cartId,
  selfTakeout,
  isServer,
  origin = null,
  sid = null,
  storeId
}) => {
  let res = {}

  if (isServer) {
    res = await postBySid(
      `carts/update-cart`,
      {
        cart_id: cartId,
        selfTakeout,
        shipping_address,
        billing_address,
        store: storeId
      },
      sid
    )
  } else {
    res = await post(
      `carts/update-cart`,
      {
        cart_id: cartId,
        selfTakeout,
        shipping_address,
        billing_address,
        store: storeId
      },
      origin
    )
  }

  return res || {}
}

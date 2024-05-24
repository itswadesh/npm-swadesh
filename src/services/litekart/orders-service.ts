import { getAPI, post } from './../../utils/api'

export const fetchOrders = async ({ query = '', status = null, statuses = null, origin = null, sid = null, storeId }) => {
  const res: any = await getAPI(`orders/my?store=${storeId}&status=${status}&statuses=${statuses}&active=true&${query}`,  origin, sid)

		return {
			count: res.count || 0,
			data: res.data || [],
			noOfPage: res.noOfPage || 0,
			page: res.page || 1,
			pageSize: res.pageSize || 40
		}
}

export const fetchOrder = async ({
  origin = null,
  sid = null,
  storeId,
  id
}) => {
  let res = {}

  // if (isServer) {
  //   res = await getBySid(`orders/${id}?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`orders/${id}?store=${storeId}`, origin)
  // }

  res = await getAPI(`orders/${id}?store=${storeId}`, origin, sid)

  return res || {}
}

export const fetchOrderSummary = async ({ origin = null, sid = null, storeId }) => {
  let res = {}

  // if (isServer) {
  //   res = await getBySid(`orders/order-summary-by-status?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`orders/order-summary-by-status?store=${storeId}`, origin)
  // }

  res = await getAPI(`orders/order-summary-by-status?store=${storeId}`, origin, sid)

  return res || {}
}

export const updateOrderStatus = async ({
  comment,
  order_no,
  status,
  origin,
  sid = null,
  storeId
}) => {
  let res = {}

  res = await post(
    `orders/update-order-status`,
    origin,
    {
      comment,
      order_no,
      status,
      store: storeId
    },
    sid
  )

  return res || {}
}

export const fetchTrackOrder = async ({ id, origin, sid = null, storeId }) => {
  let res = {}

  // if (isServer) {
  //   res = await getBySid(`order-tracking/${id}?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`order-tracking/${id}?store=${storeId}`, origin)
  // }

  res = await getAPI(`order-tracking/${id}?store=${storeId}`, origin, sid)

  return res || []
}

export const getOrder = async ({
  orderNo,
  cartId,
  origin,
  sid = null,
  storeId
}) => {
  let res = {}

  // if (isServer) {
  //   res = await getBySid(
  //     `orders-public?order_no=${orderNo}&store=${storeId}&cart_id=${cartId}`,
  //     sid
  //   )
  // } else {
  //   res = await getAPI(
  //     `orders-public?order_no=${orderNo}&store=${storeId}&cart_id=${cartId}`,
  //     origin
  //   )
  // }

  res = await getAPI(
    `orders-public?order_no=${orderNo}&store=${storeId}&cart_id=${cartId}`,
    origin,
    sid
  )

  return res || {}
}

export const paySuccessPageHit = async ({
  orderId,
  paymentMode,
  paymentReferenceId,
  status,
  origin,
  sid = null,
  storeId,
}) => {
  let res = {}

  // if (isServer) {
  //   res = await postBySid(
  //     `orders/pay-success-page-hit`,
  //     {
  //       orderId,
  //       paymentMode,
  //       paymentReferenceId,
  //       status,
  //       store: storeId
  //     },
  //     sid
  //   )
  // } else {
  res = await post(
    `orders/pay-success-page-hit`,
    origin,
    {
      orderId,
      paymentMode,
      status,
      store: storeId
    },
    sid
  )


  return res || {}
}

export const codCheckout = async ({
  address,
  cartId,
  comment = '',
  paymentMethod,
  prescription,
  origin,
  sid = null,
  storeId
}) => {
  let res = {}

  res = await post(
    `orders/checkout/cod?cart_id=${cartId}`,
    origin,
    {
      address,
      cart_id: cartId,
      comment,
      paymentMethod,
      prescription,
      store: storeId
    },
    sid
  )

  return res || {}
}

export const phonepeCheckout = async ({
  address,
  origin,
  orderNo,
  prescription = '',
  storeId,
  cartId,
  sid = null
}) => {
  let res = {}

  res = await post(
    `checkout/phonepe`,
    origin,
    {
      address,
      cart_id: cartId,
      domain: origin,
      order_no: orderNo,
      prescription,
      return_url: `${origin}/payment/success`,
      store: storeId
    },
    sid
  )

  return res || {}
}

export const cashfreeCheckout = async ({
  address,
  orderNo,
  prescription = '',
  origin,
  cartId,
  storeId,
  sid = null
}) => {
  let res = {}

  res = await post(
    `checkout/cashfree`,
    origin,
    {
      address,
      cart_id: cartId,
      domain: origin,
      order_no: orderNo,
      prescription,
      return_url: `${origin}/payment/process-cf`,
      store: storeId
    },
    sid
  )

  return res || {}
}

export const cashfreeCapture = async ({ order_no, origin, sid, storeId }) => {
  let res = {}

  res = await post(
    `checkout/cashfree-capture`,
    origin,
    {
      domain: origin,
      order_no,
      store: storeId
    },
    sid
  )

  return res || {}
}

export const razorpayCheckout = async ({
  address,
  orderNo,
  cartId,
  prescription = '',
  origin,
  storeId,
  sid = null
}) => {
  let res = {}

  res = await post(
    `checkout/razorpay`,
    origin,
    {
      address,
      cart_id: cartId,
      domain: origin,
      order_no: orderNo,
      prescription,
      return_url: `${origin}/payment/process`,
      store: storeId,
      paymentMethod: 'Razorpay'
    },
    sid
  )

  return res || {}
}

export const razorpayCapture = async ({
  rpOrderId,
  rpPaymentId,
  origin,
  storeId,
  sid = null
}) => {
  let res = {}

  res = await post(
    `checkout/razorpay-capture`,
    origin,
    {
      domain: origin,
      return_url: `${origin}/payment/process`,
      rpOrderId,
      rpPaymentId,
      store: storeId
    },
    sid
  )

  return res || {}
}

export const stripeCheckoutV2 = async ({ address, paymentMethodId, origin, cartId, storeId }) => {
		let res = {}
		res = await post(
			`checkout/stripe-v2`,
      origin,
			{
				address,
				paymentMethodId,
				cart_id: cartId,
				store: storeId,
				return_url: `${origin}/payment/process`
			},
			origin
		)
		return res || {}
}

export const stripeCheckoutService = async ({
  address,
  paymentMethodId,
  origin,
  cartId,
  sid = null,
  storeId
}) => {
  let res = {}

  res = await post(
    `checkout/stripe`,
    origin,
    {
      address,
      paymentMethodId,
      cart_id: cartId,
      store: storeId
    },
    sid
  )

  return res || {}
}

export const paypalCheckout = async ({
  address,
  orderNo,
  cartId,
  origin,
  storeId,
  sid = null
}) => {
  let res = {}

  res = await post(
    `checkout/paypal`,
    origin,
    {
      address,
      cart_id: cartId,
      domain: origin,
      order_no: orderNo,
      return_url: `${origin}/payment/process`,
      store: storeId,
      paymentMethod: 'Paypal'
    },
    sid
  )

  return res || {}
}

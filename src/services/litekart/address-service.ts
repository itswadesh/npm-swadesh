import { del, getAPI, post } from './../../utils/api'

export const fetchAddresses = async ({ origin, storeId, sid = null }) => {
  let res: any = {}
  let preSelectedAddress = ''
  let myAddresses = []

  // if (isServer || isCors) {
  //   res = await getBySid(`addresses/my?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`addresses/my?store=${storeId}`, origin)
  // }

  res = await getAPI(`addresses/my?store=${storeId}`, origin, sid)

  preSelectedAddress = res?.data[0]?._id
  myAddresses = res?.data || []

  return {
    myAddresses: { data: myAddresses },
    preSelectedAddress,
    count: res?.count
  }
}

export const fetchAddress = async ({ origin, storeId, sid = null, id }) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(`addresses/${id}?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`addresses/${id}`, origin)
  // }

  res = await getAPI(`addresses/${id}?store=${storeId}`, origin, sid)

  return res || {}
}

export const saveAddress = async ({
  id,
  address,
  city,
  country,
  email,
  firstName,
  lastName,
  phone,
  state,
  zip,
  storeId,
  origin,
  sid = null
}) => {
  let res: any = {}

  res = await post(
    `addresses`,
    origin,
    {
      id,
      address,
      city,
      country,
      email,
      firstName,
      lastName,
      phone,
      state,
      zip,
      store: storeId
    },
    sid
  )

  return res
}

export const editAddress = async ({
  id,
  address,
  city,
  country,
  email,
  firstName,
  lastName,
  phone,
  state,
  zip,
  storeId,
  origin,
  sid = null
}) => {
  let res: any = {}

  res = await post(
    `addresses`,
    origin,
    {
      id,
      address,
      city,
      country,
      email,
      firstName,
      lastName,
      phone,
      state,
      zip,
      store: storeId
    },
    sid
  )

  return res
}

export const deleteAddress = async ({ id, storeId, origin, sid = null }) => {
  const res = await del(`addresses/${id}?store=${storeId}`,origin, sid)

  return res
}

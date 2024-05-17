import { getAPI, post, put } from './../../utils/api'

export const fetchMeData = async ({ origin, storeId, sid = null }: any) => {
  let res: any = {}

  // if (isServer || isCors) {
  //   res = await getBySid(`users/me?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`users/me?store=${storeId}`, origin)
  // }

  res = await getAPI(`users/me?store=${storeId}`, origin, sid)

  return res || {}
}

export const fetchProfileData = async ({ origin, storeId, sid = null }: any) => {
  let res: any = {}

  // if (isServer) {
  //   res = await getBySid(`users/profile?store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`users/profile?store=${storeId}`, origin)
  // }

  res = await getAPI(`users/profile?store=${storeId}`, origin, sid)

  return res || {}
}

export const signupService = async ({
  email,
  firstName,
  lastName,
  password,
  passwordConfirmation,
  phone,
  role = "user",
  storeId,
  origin,
  sid = null
}: any) => {
  let res: any = {}

  res = await post(
    `signup`,
    origin,
    {
      email,
      firstName,
      lastName,
      password,
      phone,
      role,
      passwordConfirmation,
      store: storeId,
      origin
    },
    sid
  )

  return res
}

export const isEmailExist = async ({ email, storeId, origin, sid = null }: any) => {
  let res: boolean = false

  // if (isServer) {
  //   res = await getBySid(`users/is-email-exists?email=${email}&store=${storeId}`, sid)
  // } else {
  //   res = await getAPI(`users/is-email-exists?email=${email}&store=${storeId}`, origin)
  // }

  res = await getAPI(`users/is-email-exists?email=${email}&store=${storeId}`, origin, sid)

  return res
}

export const googleOneTapLoginService = async ({
  data,
  storeId,
  origin,
  sid = null
}: any) => {
  let res: any = {}

  res = await post(`auth/google/onetap`, data, origin)

  return res
}

export const loginService = async ({
  email,
  password,
  storeId,
  origin,
  sid = null
}: any) => {
  let res: any = {}

  res = await post(
    `login`,
    origin,
    {
      email,
      password,
      store: storeId
    },
    sid
  )

  return res
}

export const forgotPasswordService = async ({
  email,
  referrer,
  storeId,
  origin,
  sid = null
}: any) => {
  let res: any = {}

  res = await post(
    `users/forgot-password`,
    origin,
    {
      email,
      referrer,
      store: storeId
    },
    sid
  )

  return res
}

export const resetPasswordService = async ({
  id,
  token,
  password,
  passwordConfirmation,
  storeId,
  origin,
  sid = null
}: any) => {
  let res: any = {}

  res = await post(
    `users/reset-password`,
    origin,
    {
      id,
      token,
      password,
      passwordConfirmation,
      store: storeId
    },
    sid
  )

  return res
}

export const changePasswordService = async ({
  oldPassword,
  password,
  passwordConfirmation,
  storeId,
  origin,
  sid = null
}: any) => {
  let res: any = {}

  res = await post(
    `users/change-password`,
    origin,
    {
      oldPassword,
      password,
      passwordConfirmation,
      store: storeId
    },
    sid
  )

  return res
}

export const getOtpService = async ({
  firstName,
  lastName,
  phone,
  email,
  password,
  passwordConfirmation,
  storeId,
  origin,
  sid = null
}: any) => {
  let res: any = {}

  res = await post(
    `get-otp`,
    origin,
    {
      phone,
      store: storeId
    },
    sid
  )

  return res
}

export const verifyOtpService = async ({
  phone,
  otp,
  storeId,
  origin
}: any) => {
  let res: any = {}

  res = await post(
    `verify-otp`,
    origin,
    {
      phone,
      otp,
      store: storeId
    },
    null
  )

  return res
}

export const logoutService = async ({ storeId, origin, sid = null }: any) => {
  let res: any = {}

  res = await post(`logout?store=${storeId}`, origin, {}, sid)

  return res
}

export const updateProfileService = async ({
  storeId,
  e,
  origin,
  sid = null
}: any) => {
  let res: any = {}

  res = await put(`users/update-profile`, e, origin)

  return res
}

export const verifyEmail = async ({
  id,
  expires,
  signature,
  token,
  origin,
  sid = null,
  storeId
}) => {
  let res = {}

  // if (isServer) {
  //   res = await postBySid(
  //     `verify-email`,origin
  //     {
  //       id,
  //       expires,
  //       signature,
  //       token,
  //       store: storeId
  //     },
  //     sid
  //   )
  // } else {
  res = await post(
    `verify-email`,
    origin,
    {
      id,
      expires,
      signature,
      token,
      store: storeId,
      origin
    },
    sid
  )
  // }

  return res
}

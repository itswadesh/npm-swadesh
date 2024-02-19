import { getAPI, post, put } from './../../utils/api'
import { getBySid, postBySid } from './../../utils/server'


export const fetchMeData = async ({
  isCors = false,
  origin,
  storeId,
  sid = null,
  isServer
}: any) => {
 
    let res: any = {}

    if (isServer || isCors) {
      res = await getBySid(`users/me?store=${storeId}`, sid)
    } else {
      res = await getAPI(`users/me?store=${storeId}`, origin)
    }

    return res || {}
}

export const signupService = async ({
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
      `signup`,
      {
        firstName,
        lastName,
        phone,
        email,
        password,
        passwordConfirmation,
        store: storeId
      },
      origin
    )

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

    res = await postBySid(
      `login`,
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
      {
        email,
        referrer,
        store: storeId
      },
      origin
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
      {
        id,
        token,
        password,
        passwordConfirmation,
        store: storeId
      },
      origin
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
      {
        oldPassword,
        password,
        passwordConfirmation,
        store: storeId
      },
      origin
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
      {
        phone,
        store: storeId
      },
      origin
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
      {
        phone,
        otp,
        store: storeId
      },
      origin
    )

    return res
}

export const logoutService = async ({ storeId, origin, sid = null }: any) => {
  
    let res: any = {}

    res = await postBySid(`logout?store=${storeId}`, {}, sid)

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
  storeId,
  isServer
}) => {
 
    let res = {}

    if (isServer) {
      res = await postBySid(
        `verify-email`,
        {
          id,
          expires,
          signature,
          token,
          store: storeId
        },
        sid
      )
    } else {
      res = await post(
        `verify-email`,
        {
          id,
          expires,
          signature,
          token,
          store: storeId
        },
        origin
      )
    }

    return res
}

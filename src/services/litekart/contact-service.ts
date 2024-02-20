import { post } from './../../utils/api'

export const submitContactUsForm = async ({
  storeId,
  fullName,
  email,
  phone,
  subject,
  message,
  origin,
  sid = null
}: any) => {
    let res: any = {}

    res = await post(
      `contact-us`,
      origin,
      {
        fullName,
        email,
        phone,
        subject,
        message,
        store: storeId
      },
      sid
    )

    return res
  
}

export const bulkOrderEnquiry = async ({
  storeId,
  name,
  companayName,
  email,
  phone,
  interestedProducts,
  minQty,
  message,
  origin,
  sid = null
}: any) => {
    let res: any = {}

    res = await post(
      `bulk-order-enquiry`,
      origin,
      {
        name,
        companayName,
        email,
        phone,
        interestedProducts,
        minQty,
        message,
        store: storeId
      },
      sid
    )

    return res
}

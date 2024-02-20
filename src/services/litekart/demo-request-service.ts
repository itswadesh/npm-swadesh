import { post } from './../../utils/api'

export const saveScheduleDemo = async ({
  storeId,
  schedule,
  origin,
  sid = null,
  isServer
}: any) => {
    let res: any = {}

    res = await post(
      `saveScheduleDemo`,
      {
        schedule,
        store: storeId
      },
      origin
    )

    return res
}

import { post } from './../../utils/api'

export const saveScheduleDemo = async ({
  storeId,
  schedule,
  origin,
  sid = null,
}: any) => {
    let res: any = {}

    res = await post(
      `saveScheduleDemo`,
      origin,
      {
        schedule,
        store: storeId
      },
      sid
    )

    return res
}

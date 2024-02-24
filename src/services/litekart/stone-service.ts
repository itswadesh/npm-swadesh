import { getAPI, post } from './../../utils/api'

export const fetchStones = async ({ origin, storeId, sid = null }: any) => {
	let res: any = {}

	// if (isServer) {
	// 	res = await getBySid(`stones?store=${storeId}&sort=-updatedAt`, sid)
	// } else {
	// 	res = await getAPI(`stones?store=${storeId}&sort=-updatedAt`, origin)
	// }

	res = await getAPI(`stones?store=${storeId}&sort=-updatedAt`, origin, sid)

	return res || {}
}

export const fetchStone = async ({ slug, origin, storeId, sid = null }: any) => {
	let res: any = {}

	// if (isServer) {
	// 	res = await getBySid(`stones/${slug}?store=${storeId}`, sid)
	// } else {
	// 	res = await getAPI(`stones/${slug}?store=${storeId}`, origin)
	// }

	res = await getAPI(`stones/${slug}?store=${storeId}`, origin, sid)

	return res || {}
}

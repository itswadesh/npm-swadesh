import { getAPI, post, put } from './../../utils/api'

export const fetchInvoices = async ({ query = '', isCors = false, origin = null, sid = null, storeId }) => {
	let res = {}

	// if (isServer || isCors) {
	// 	res = await getBySid(`get-orders-invoices?store=${storeId}&${query}`, sid)
	// } else {
	// 	res = await getAPI(`get-orders-invoices?store=${storeId}&${query}`, origin)
	// }

	res = await getAPI(`get-orders-invoices?store=${storeId}&${query}`, origin, sid)

	return res || {}
}

export const fetchAllInvoices = async ({ query = '', isCors = false, origin = null, sid = null, storeId }) => {
	let res = {}

	// if (isServer || isCors) {
	// 	res = await getBySid(`get-all-invoices?store=${storeId}&${query}`, sid)
	// } else {
	// 	res = await getAPI(`get-all-invoices?store=${storeId}&${query}`, origin)
	// }

	res = await getAPI(`get-all-invoices?store=${storeId}&${query}`, origin, sid)

	return res || {}
}

export const fetchAllRetailerInvoices = async ({ query = '', isCors = false, origin = null, sid = null, storeId }) => {
	let res = {}

	// if (isServer || isCors) {
	// 	res = await getBySid(`get-all-invoices?store=${storeId}&${query}`, sid)
	// } else {
	// 	res = await getAPI(`get-all-invoices?store=${storeId}&${query}`, origin)
	// }

	res = await getAPI(`/api/invoices-of-retailer?store=${storeId}`, origin, sid)

	return res || {}
}
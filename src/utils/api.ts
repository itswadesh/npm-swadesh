// @ts-ignore
import cookie from 'cookie'
// @ts-ignore
let typingTimer: any
const send = async ({ method, path, params, data, headers, origin }: any) => {
	if (
		path.includes('.png') ||
		path.includes('.jpg') ||
		path.includes('.svg') ||
		path.includes('.json') ||
		path.includes('.css') ||
		path.includes('dev-sw')
	) {
		return
	}

	let uri = new URL(path, origin)
	if (!path.includes('/api/')) {
		// When microservice path provided
		uri = new URL('api/' + path, origin)
	}

	const opts: any = {
		method
	}

	opts.headers = headers ? headers : { Cache: 'no-cache' }

	if (data) {
		// data.store = storeId //'6135b76e5dfeaf011301827d'
		const contentType = data?.file ? data.file?.type : data?.files && data?.files[0]?.type

		if (
			!(
				contentType == 'application/msword' ||
				contentType == 'application/pdf' ||
				contentType == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
				contentType == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
				contentType == 'image/gif' ||
				contentType == 'image/ico' ||
				contentType == 'image/jpeg' ||
				contentType == 'image/png' ||
				contentType == 'image/svg' ||
				contentType == 'image/svg+xml' ||
				contentType == 'image/webp'
			)
		) {
			opts.headers['Content-Type'] = 'application/json'
			opts.body = JSON.stringify(data)
		} else {
			const form = new FormData()

			if (data && data.files) {
				for (const x of data.files) {
					form.append('files', x)
				}
			}
			for (const d in data) {
				if (d !== 'files') form.append(d, data[d])
			}
			opts.body = form
		}
	}

	// if (token) {
	//   opts.headers['Authorization'] = `Bearer ${token}`
	// }

	// else if (tkn) {
	// 	opts.headers['Authorization'] = `Bearer ${tkn}`
	// }

	if (!params) {
		params = {}
	}

	// if (storeId) params.store = storeId //'6135b76e5dfeaf011301827d'

	if (params) {
		Object.keys(params).forEach((key) => uri.searchParams.append(key, params[key]))
	}

	const url = uri.toString()

	// alert(JSON.stringify(url))
	// alert(JSON.stringify(opts))
	const sid = headers?.sid
	if (sid) {
		opts.credentials = 'include'
		opts.headers['cookie'] = `connect.sid=${sid}`
	}
	// console.log(opts, url)
	const response = await fetch(url, opts)
	if (method === 'POST' && sid && path.includes('logout')) {
		return true
	}
	const isJson = response.headers.get('content-type')?.includes('application/json')

	const res = isJson ? await response.json() : await response.text()

	if (res?.status > 399) {
		throw { status: res.status, message: res }
	} else if (response?.status > 399) {
		throw { status: response.status, message: res }
	} else {
		const setCookieForLogin = response.headers.get('set-cookie')
		if (setCookieForLogin) {
			const sidCookie = cookie.parse(setCookieForLogin)
			if (typeof res === 'object' && res !== null) {
			  res.sid = sidCookie['connect.sid']
			}
		}
		return res
	}
}

export const getAPI = (path: string, origin: string, sid?: string) => {
	const headers = {
		sid: sid
	}
	return send({ method: 'GET', path, origin, headers })
}

// const send = async ({
//   method,
//   path,
//   params,
//   data,
//   token,
//   headers,
//   origin,
// }: any) => {
//   if (
//     path.includes('.png') ||
//     path.includes('.jpg') ||
//     path.includes('.svg') ||
//     path.includes('.json') ||
//     path.includes('.css') ||
//     path.includes('dev-sw')
//   ) {
//     return
//   }

//   let uri = new URL(path, origin)

//   if (!path.includes('/api/')) {
//     // When microservice path provided
//     uri = new URL('api/' + path, origin)
//   }

//   const opts: any = {
//     method
//   }

//   opts.headers = headers ? headers : { Cache: 'no-cache' }

//   if (data) {
//     // data.store = storeId //'6135b76e5dfeaf011301827d'
//     const contentType = data?.file
//       ? data.file?.type
//       : data?.files && data?.files[0]?.type

//     if (
//       !(
//         contentType == 'application/msword' ||
//         contentType == 'application/pdf' ||
//         contentType ==
//           'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
//         contentType ==
//           'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
//         contentType == 'image/gif' ||
//         contentType == 'image/ico' ||
//         contentType == 'image/jpeg' ||
//         contentType == 'image/png' ||
//         contentType == 'image/svg' ||
//         contentType == 'image/svg+xml' ||
//         contentType == 'image/webp'
//       )
//     ) {
//       opts.headers['Content-Type'] = 'application/json'
//       opts.body = JSON.stringify(data)
//     } else {
//       const form = new FormData()

//       if (data && data.files) {
//         for (const x of data.files) {
//           form.append('files', x)
//         }
//       }
//       for (const d in data) {
//         if (d !== 'files') form.append(d, data[d])
//       }
//       opts.body = form
//     }
//   }

//   if (token) {
//     opts.headers['Authorization'] = `Bearer ${token}`
//   }

//   // else if (tkn) {
//   // 	opts.headers['Authorization'] = `Bearer ${tkn}`
//   // }

//   if (!params) {
//     params = {}
//   }

//   // if (storeId) params.store = storeId //'6135b76e5dfeaf011301827d'

//   if (params) {
//     Object.keys(params).forEach((key) =>
//       uri.searchParams.append(key, params[key])
//     )
//   }

//   const url = uri.toString()

//   // alert(JSON.stringify(url))
//   // alert(JSON.stringify(opts))
//   const response = await fetch(url, opts)
//   const isJson = response.headers
//     .get('content-type')
//     ?.includes('application/json')

//   const res = isJson ? await response.json() : await response.text()

//   if (res?.status > 399) {
//     throw { status: res.status, message: res }
//   } else if (response?.status > 399) {
//     throw { status: response.status, message: res }
//   } else {
//     const setCookieForLogin = response.headers.get('set-cookie')
//     if (setCookieForLogin) {
//       const sidCookie = cookie.parse(setCookieForLogin)
//       res.sid = sidCookie['connect.sid']
//     }
//     return res
//   }
// }

// export const getAPI = (path: string, origin: string, headers?: any) => {
//   return send({ method: 'GET', path, origin, headers })
// }

export const del = (path: string, origin: string, sid?: any) => {
	const headers = {
		sid: sid
	}
  return send({ method: 'DELETE', path, origin, headers })
}

export const post = (
  path: string,
  origin: string,
  data?: any,
  sid?: string
) => {
	const headers = {
		sid: sid
	}
  return send({ method: 'POST', path, data, origin, headers })
}

export const put = (
  path: string,
  data?: any,
  origin?: string,
  headers?: any
) => {
  return send({ method: 'PUT', path, data, origin, headers })
}

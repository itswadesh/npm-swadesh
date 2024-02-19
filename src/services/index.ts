export * from './litekart'

let LITEKART_API_ENDPOINT = ''

export const setApiEndpoint = (endpoint: string) => {
  LITEKART_API_ENDPOINT = endpoint
  return LITEKART_API_ENDPOINT
}

export const getApiEndpoint = () => {
  return LITEKART_API_ENDPOINT
}

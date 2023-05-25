import { Configuration } from 'daoly-client-sdk'

export const config = new Configuration({
  basePath: import.meta.env.VITE_API_BASE_PATH,
})

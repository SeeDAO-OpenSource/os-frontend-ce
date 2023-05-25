import { config } from '@/api'
import { InfraToolsApi } from 'daoly-client-sdk'

const toolApi = new InfraToolsApi(config)

export default toolApi


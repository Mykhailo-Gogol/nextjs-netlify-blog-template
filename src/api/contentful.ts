import {
  createClient,
  CreateClientParams,
  ContentfulClientApi,
} from 'contentful'

const config: CreateClientParams = {
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN || '',
}

const client: ContentfulClientApi = createClient(config)

export default client

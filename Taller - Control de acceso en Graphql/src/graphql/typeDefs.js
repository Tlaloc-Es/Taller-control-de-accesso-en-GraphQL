import { join } from 'path'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadTypedefsSync } from '@graphql-tools/load'

const sources = loadTypedefsSync(join(__dirname, './typeDefs.gql'), {
  loaders: [
      new GraphQLFileLoader()
  ]
});

const typeDefs = sources.map(source => source.document)

export default typeDefs
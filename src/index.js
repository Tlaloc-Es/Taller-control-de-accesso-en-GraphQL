import { queries } from './db'
import {ApolloServer} from 'apollo-server'
import {typeDefs} from './graphql'
import {resolvers as generaterResolvers} from './graphql'
import tokenUtils from './tools/tokenUtils'

const resolvers = generaterResolvers(queries)


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
    const token = req.headers.authorization

    if (token){
      const userInfo = tokenUtils.getAll(token)
      return {userInfo}
    }

  }
})


server.listen().then(({url}) => {
  console.log(`Iniciado servidor en ${url}`)
})
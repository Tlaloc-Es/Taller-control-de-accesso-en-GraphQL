import database from './db'
import querifier from './queries'

const queries = querifier(database)

export {database, queries} 
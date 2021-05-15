import jwt from 'jsonwebtoken'

const tokenUtils = {

  getAll: (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET)
  },

  getUser: (token) => {
    return getAll(token)['user']
  },

  getRole: (token) => {
    return getAll(token)['role']
  },

  generateToken: (user, role) => {
    return jwt.sign({
      user,
      role
    }, process.env.TOKEN_SECRET)
  }

}

export default tokenUtils
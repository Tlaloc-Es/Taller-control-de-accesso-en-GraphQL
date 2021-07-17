const jwt = require('jsonwebtoken');

const token = jwt.sign({
  name: 'Paco'
}, process.env.SECRETO)

console.log(token)

const verificado = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSnVhbiIsImlhdCI6MTYyNjUzOTk5MX0.Syq85grWFSquY1jqNUrQOAWyPO5kEbF8U6o5v7L48oQ', process.env.SECRETO)

console.log(verificado)
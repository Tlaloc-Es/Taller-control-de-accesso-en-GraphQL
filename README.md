# Taller de control de acceso en GraphQL

## Requisitos

Lo primero que vamos a ver son los requisitos básicos necesarios para poder aprovechar este curso, que son saber programar en javascript, en Node.js, y conocer GraphQL, tambien estaria interesante que echarais un ojo al video que tiene openwebinars sobre JWT, porque aunque lo voy a explicar brevemente en el video lo explican con mayor profundidad, y podéis aprender sobre todas estas cosas en OpenWebinars ya que cuenta con cursos para cada uno de estos requisitos.

## Diferencias entre autenticación y autorización

Cuando hablamos de control de acceso, podemos ver dos acciones típicas

### Autenticación

La primera sería la autenticación, que es cuando el sistema comprueba que somos quien decimos ser.

### Autorización

Y luego estaría la autorización, que es el proceso de permitir a un usuario realizar una acción.

## Ejemplo

Veamos un ejemplo para que quede más claro

### Ejemplo - Autenticación

Cuando entramos en OpenWebinars, en un principio lo hacemos sin hacer login, o autenticarnos, por lo que no aparece nuestro nombre de usuario en ningún lado, el back no sabe quién somos, y por lo tanto quizás no nos pueda asignar contenido personalizado etc.

Al iniciar sesión en OpenWebinars, estaríamos autenticando en su back y por lo tanto todas las peticiones que le haríamos sería a través de un usuario autenticado.

### Ejemplo - Autorización

Una vez ya estamos autenticados en el sistema, es cuando nuestro perfil tiene un rol que puede ser cualquiera de los siguientes, dándonos acceso a según qué acciones o contenido.

## JWT

Como indiqué antes, os recomiendo que miréis el vídeo que hay en OpenWebinars acerca de JWT dado que explica en detalle el proceso, aquí simplemente vamos a refrescar un poco el concepto, dado que es lo que vamos a usar para autenticar y autorizar.

https://openwebinars.net/academia/aprende/seguridad-api-rest-spring-boot/7501/

## Código

Cuando definmos nuestro Apollo Server, le podemos pasar un parametro llamado contexto por el cual es capaz de acceder a las peticiones http y retornar un objeto que sera enviado a cada consulta graphql, podemos decir que es algo asi como un middleware, entre la peticion ha graphql y nuestro resolver.

```javascript
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
```

Luego en nuestro resolver solo tendriamos que acceder a los atributos que se esten retornarndo desde el conexto definido en el apollo server de la siguiente manera:

```javascript
  getProfile: (obj, {name}, context) => {

    const userInfo = context.userInfo

    if (userInfo.user  === name){
      const user = queries.getUser(name);
      return user
    }

    throw 'No tienes acceso a este perfil'        
  }
```

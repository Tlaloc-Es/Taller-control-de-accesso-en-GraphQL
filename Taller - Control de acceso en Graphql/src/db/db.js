const database = {
  users: [
    {
      id: "1",
      role: "ADMIN",
      name: "Angel",
      password: "123456"
    },
    {
      id: "2",
      role: "ADMIN",
      name: "Juan",
      password: "123456"
    },
    {
      id: "3",
      role: "TEACHER",
      name: "Joseba",
      password: "123456"
    },
    {
      id: "4",
      role: "TEACHER",
      name: "Pablo",
      password: "123456"
    },
    {
      id: "5",
      role: "USER",
      name: "Ana",
      password: "123456"
    },
    {
      id: "6",
      role: "USER",
      name: "Paco",
      password: "123456"
    }
  ],
  contents: [
    {
      id: "1",
      userId: "3",
      name: "Publicación de paquetes en Pypi",
      isPublic: true,
      url: "https://openwebinars.net/academia/portada/publicar-paquete-pypi/"
    },
    {
      id: "2",
      userId: "3",
      name: "Curso de introducción a las estructuras de datos",
      isPublic: true,
      url: "https://openwebinars.net/academia/portada/introduccion-estructuras-datos/"
    },
    {
      id: "3",
      userId: "4",
      isPublic: true,
      name: "Curso de Kubernetes para desarrolladores",
      url: "https://openwebinars.net/academia/portada/kubernetes/"
    },
    {
      id: "4",
      userId: "4",
      isPublic: true,
      name: "Desarrollo nativo en Kubernetes de forma efectiva",
      url: "https://openwebinars.net/academia/portada/desarrollo-nativo-kubernetes/"
    },
    {
      id: "5",
      userId: "3",
      isPublic: false,
      name: "Control de acceso en GraphQL",
      url: ""
    }
  ]
}

export default database
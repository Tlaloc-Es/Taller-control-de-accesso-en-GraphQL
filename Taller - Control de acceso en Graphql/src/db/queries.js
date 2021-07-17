const querifier = (database) => {
  return {
    login: (name, password) => {
      const validUsers = database.users.filter(user => user.name === name && user.password === password)
      return validUsers.length > 0 ? validUsers[0] : null
    },

    getUser: (name) => {
      const validUsers = database.users.filter(user => user.name === name)
      return validUsers.length > 0 ? validUsers[0] : null
    },

    publicContent:(contentId) => {
      let updated = false
      
      database.contents = database.contents.map((content) => {
        if(content.id === contentId && !content.isPublic){
          updated = true
          content.isPublic = true;
        }
        return content
      })

      return updated
    }
  }
}

export default querifier
var { users, posts } = require("./data");

const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = users.find(user => user.id === id)
    cb(user)
  }, 150)
}

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const postsConst = posts.filter(post => post.createdBy === userId)
    cb(postsConst)
  }, 150)
}

module.exports = {
    getPostsForUser,
    getUserById
}


// 1st. Get ride of everything that's not gonna work on Node, so firts start with 'window',
// As can see there are variables like users and posts that are gonna need to be required

// 2nd. I'm gonna need to export all this functions with module.exports
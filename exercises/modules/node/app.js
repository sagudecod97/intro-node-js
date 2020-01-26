var { getPostsForUser, getUserById } = require("./api")

const showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    })
    cb(postTemplates)
  })
}

const showUserProfile = (userId, cb) => {
  getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `
    cb(user)
  })
}

module.exports = {
    showPostsForCurrentUser,
    showUserProfile
}

// 1st. Get ride of everything that's not gonna work on Node, so firts start with 'window'. Note that
// there's not DOM stuff in node, but in the functions, I'm bassically returning just a string

// 2nd. Export all my functions with module.exports
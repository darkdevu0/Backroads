const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
            tours: allContentfulTour {
              edges {
                node {
                  slug
                }
              }
            }
            
            posts: allContentfulPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `/tours/${node.slug}`,
      component: path.join(__dirname, "src", "templates", "tour-template.js"),
      context: {
        slug: node.slug
      }
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.join(__dirname, "src", "templates", "blog-template.js"),
      context: {
        slug: node.slug
      }
    })
  })

  // amount of posts
  const posts = data.posts.edges

  // posts per page
  const postsPerPage = 5

  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: (i === 0 ? `/blogs` : `/blogs/${i + 1}`),
      component: path.join(__dirname, "src", "templates", "blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: postsPerPage * i,
        currentPage: i + 1,
        numPages: numPages
      }
    })
  })
}


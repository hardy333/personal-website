const path = require(`path`)

const slugify = string => {
  return string.split(" ").join("-")
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allMdx {
        edges {
          next {
            frontmatter {
              title
            }
          }
          previous {
            frontmatter {
              title
            }
          }
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  const templatePath = path.resolve(`./src/templates/post-template.jsx`)

  result.data.allMdx.edges.forEach(edge => {
    createPage({
      path: slugify(edge.node.frontmatter.title),
      component: templatePath,
      context: {
        title: edge.node.frontmatter.title,
        next: edge.next,
        previous: edge.previous,
      },
    })
  })
}

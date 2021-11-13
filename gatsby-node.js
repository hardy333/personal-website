const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allMdx {
        edges {
          next {
            frontmatter {
              name
            }
          }
          previous {
            frontmatter {
              name
            }
          }
          node {
            frontmatter {
              name
            }
          }
        }
      }
    }
  `)
  const templatePath = path.resolve(`./src/templates/post-template.jsx`)

  result.data.allMdx.edges.forEach(edge => {
    console.log({ edge })
    createPage({
      path: edge.node.frontmatter.name,
      component: templatePath,
      context: {
        name: edge.node.frontmatter.name,
        next: edge.next,
        previous: edge.previous,
      },
    })
  })
}

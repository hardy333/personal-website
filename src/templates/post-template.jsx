import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/Layout"

const PostTemplate = ({ data, pageContext }) => {
  const { next } = pageContext
  const { previous } = pageContext
  console.log(next, previous)

  return (
    <Layout>
      <h2>This is post template</h2>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      {previous && (
        <Link style={{ margin: 10 }} to={"/" + previous.frontmatter.name}>
          {"<<---" + previous.frontmatter.name}
        </Link>
      )}
      {next && (
        <Link style={{ margin: 10 }} to={"/" + next.frontmatter.name}>
          {next.frontmatter.name + "--->>"}
        </Link>
      )}
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query postTemplateQuery($name: String) {
    mdx(frontmatter: { name: { eq: $name } }) {
      frontmatter {
        name
        tags
        title
      }
      body
    }
  }
`

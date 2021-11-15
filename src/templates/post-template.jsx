import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/Layout"

const PostTemplate = ({ data, pageContext }) => {
  const { next } = pageContext
  const { previous } = pageContext
  const { title, tags, date } = data.mdx.frontmatter
  return (
    <Layout>
      <section className="post">
        <div className="post__container">
          <h1>{title}</h1>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
          <div className="post__link-container">
            {previous && (
              <Link
                style={{ margin: 10 }}
                to={"/" + previous.frontmatter.title.split(" ").join("-")}
              >
                {"<<---" + previous.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link
                style={{ margin: 10 }}
                to={"/" + next.frontmatter.title.split(" ").join("-")}
              >
                {next.frontmatter.title + "--->>"}
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query postTemplateQuery($title: String) {
    mdx(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        tags
        date
      }
      body
    }
  }
`

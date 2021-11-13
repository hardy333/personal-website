import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Blog = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Blog | Gela Samsonidze"
        description="Gela Samonidze's personal blog"
      />
      <h1>This is Blog</h1>
      <ul>
        {data.allMdx.nodes.map(node => (
          <li key={node.frontmatter.name}>
            <Article frontmatter={node.frontmatter} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

const Article = ({ frontmatter }) => {
  return (
    <article>
      <Link to={"/" + frontmatter.name}>
        <h2>{frontmatter.name}</h2>
      </Link>
      <p>title - {frontmatter.title}</p>
      <p>tags - {frontmatter.tags}</p>
    </article>
  )
}

export default Blog

export const query = graphql`
  query blogQuery {
    allMdx {
      nodes {
        frontmatter {
          name
          tags
          title
        }
      }
    }
  }
`

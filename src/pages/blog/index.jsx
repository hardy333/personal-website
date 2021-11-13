import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const Blog = ({ data }) => {
  const [tag, setTag] = useState(null)

  useEffect(() => {
    const currTag = new URLSearchParams(window.location.search).get("tag")
    setTag(currTag || "")
  }, [setTag])

  return (
    <Layout>
      <Seo
        title="Blog | Gela Samsonidze"
        description="Gela Samonidze's personal blog"
      />
      <h1>This is Blog</h1>
      <Link to="./tags">All tags</Link>
      <ul>
        {data.allMdx.nodes.map(node => (
          <li
            key={node.frontmatter.name}
            style={{
              display: node.frontmatter.tags.includes(tag) ? "" : "none",
            }}
          >
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

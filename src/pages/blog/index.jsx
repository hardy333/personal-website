import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const Blog = ({ data }) => {
  const [tag, setTag] = useState(null)

  useEffect(() => {
    const currTag = new URLSearchParams(window.location.search).get("tag")
    setTag(currTag || "")
  })

  return (
    <Layout>
      <Seo
        title="Blog | Gela Samsonidze"
        description="Gela Samonidze's personal blog"
      />
      <section className="blog">
        <div className="blog-container">
          <header className="blog-header">
            <h1>This is Blog</h1>
            <Link to="./tags" className="btn btn-danger">
              All tags
            </Link>
          </header>
          <ul className="posts-container">
            {data.allMdx.nodes.map(node => (
              <li
                key={node.frontmatter.title}
                style={{
                  display: node.frontmatter.tags.includes(tag) ? "" : "none",
                }}
              >
                <Article
                  frontmatter={node.frontmatter}
                  timeToRead={node.timeToRead}
                  excerpt={node.excerpt}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

const Article = ({ frontmatter, excerpt, timeToRead }) => {
  const { date, title, tags } = frontmatter
  return (
    <Link to={"/" + title.split(" ").join("-")}>
      <article className="post-card">
        <h2 className="post-card__title">{title}</h2>
        <p className="post-card__text">{excerpt}</p>
      </article>
    </Link>
  )
}

export default Blog

export const query = graphql`
  query blogQuery {
    allMdx {
      nodes {
        frontmatter {
          tags
          title
          date
        }
        timeToRead
        excerpt(pruneLength: 250)
      }
    }
  }
`

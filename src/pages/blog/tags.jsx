import { graphql, Link, navigate } from "gatsby"
import React from "react"

const Tags = ({ data }) => {
  const nodes = data.allMdx.nodes
  const tags = nodes
    .map(node => node.frontmatter.tags)
    .map(tagsString => tagsString.split(" ").filter(tag => tag !== ""))
    .flat()

  const uniqueTags = Array.from(new Set(tags))

  return (
    <div>
      <h1>This is tags page</h1>
      <Link to="/"> - - - - - - - - -</Link>
      <button onClick={() => navigate(-1)}> Back</button>
      <ul>
        {uniqueTags.map(tag => (
          <li key={tag}>
            <Link to={"/blog?tag=" + tag}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`

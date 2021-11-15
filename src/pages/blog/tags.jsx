import { graphql, Link, navigate } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

const colorsArr = ["primary", "danger", "warning", "success", "info", "dark"]

const Tags = ({ data }) => {
  const nodes = data.allMdx.nodes
  const tags = nodes
    .map(node => node.frontmatter.tags)
    .map(tagsString => tagsString.split(" ").filter(tag => tag !== ""))
    .flat()

  const uniqueTags = Array.from(new Set(tags))

  // {a: [angular, arrow-function, array], ..}
  const tagsObj = {}
  // [["a", ["angular", "arrow", ""]], ["b", ["bootstrap", "boot"]...]
  const tagsArr = []
  // ["a", "b", "c"]
  const tagsLettersArr = []

  uniqueTags.forEach(tag => {
    const firstLetter = tag.slice(0, 1)
    if (tagsObj[firstLetter]) {
      tagsObj[firstLetter].push(tag)
    } else {
      tagsObj[firstLetter] = []
      tagsObj[firstLetter].push(tag)
    }
  })

  for (let prop in tagsObj) {
    const tagsArrItem = []

    tagsArrItem.push(prop)
    tagsArrItem.push(tagsObj[prop])
    tagsArr.push(tagsArrItem)
  }

  for (let prop in tagsObj) {
    tagsLettersArr.push(prop)
  }

  return (
    <Layout>
      <section className="tags">
        <div className="container">
          <div className="tags__container">
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate(-1)}
            >
              {" "}
              Back
            </button>
            <h1 className="tags__title">TAGS ({uniqueTags.length})</h1>
            <ul>
              {tagsLettersArr.sort().map(letter => {
                return (
                  <li key={letter}>
                    <ul className="tags__letter-list">
                      <h2 className="tags__letter">{letter}</h2>
                      <ul className="tags__list">
                        {tagsObj[letter].map(tag => (
                          <li key={tag} className="tags__tag-li">
                            <Link
                              to={"/blog?tag=" + tag}
                              className={`btn btn-soft-${
                                colorsArr[
                                  Math.floor(Math.random() * colorsArr.length)
                                ]
                              }`}
                            >
                              {tag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
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

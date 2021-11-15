import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import "../styles/style.scss"
import "../styles/index.scss"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home | Gela Samsonidze" />
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__text">
            <h1>Hey, I’m Alex</h1>
            <h2>Graphic Designer & Illustrator</h2>
            <div className="hero__btn-wrapper">
              <a href="#" className="btn btn-outline-primary">
                Download CV
              </a>
              <a href="#" className="btn btn-outline-primary">
                Portfolio
              </a>
            </div>
          </div>
          <div className="hero__img-wrapper">{/* <img src="" alt="" /> */}</div>
        </div>
      </section>
    </Layout>
  )
}

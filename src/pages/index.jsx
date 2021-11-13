import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import "../styles/style.scss"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home | Gela Samsonidze" />
      <div>Hello world!</div>
      <StaticImage src="../images/image-3.jpg" alt="sample image" />
      <StaticImage src="../images/image-4.jpg" alt="sample image" />
    </Layout>
  )
}

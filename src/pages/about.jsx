import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const aboutPageDescription = "About Gela Samsonidze"

const About = () => {
  return (
    <Layout>
      <Seo title="About | Gela Samsonidze" description={aboutPageDescription} />
      <h1>This is About page</h1>
    </Layout>
  )
}

export default About

import React from "react"
import Navbar from "../components/Navbar"

const Page = () => {
  return (
    <div className="container">
      <Navbar />
      <button className="btn btn-success">Hello</button>
      <button className="btn btn-outline-success">Hello</button>
      <button className="btn btn-outline-danger">Hello</button>
      <button className="btn btn-outline-primary">Hello</button>
      <button className="btn btn-outline-info">Hello</button>
      <button className="btn btn-outline-warning">Hello</button>
      <button className="btn btn-outline-dark">Hello</button>
      <button className="btn btn-outline-light">Hello</button>
      {/*  */}
      <div className="btn-container">
        <button className="btn btn-soft-primary">Travel</button>
        <button className="btn btn-soft-warning">Buisness</button>
        <button className="btn btn-soft-success">Tech</button>
        <button className="btn btn-soft-danger">Gadgets</button>
        <button className="btn btn-soft-info">Lifestyle</button>
        <button className="btn btn-soft-primary">Vaccine</button>
        <button className="btn btn-soft-warning">Marketing</button>
        <button className="btn btn-soft-success">Sports</button>
        <button className="btn btn-soft-danger">Covid-19</button>
        <button className="btn btn-soft-info">Politics</button>
      </div>
    </div>
  )
}

export default Page

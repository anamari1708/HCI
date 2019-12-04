import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ApartmentsPage = () => (
  <Layout>
    <SEO title="Apartments" />
    <h1>Hi from the apartments</h1>
    <p>Welcome to the apartments</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ApartmentsPage

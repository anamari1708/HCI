import React from "react"
import TitleBar from "../components/titleBar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/formReview"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import styles from "../styles/layout.module.css"

const ReviewPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <SEO title="Reviews" />
          <TitleBar>
            <h3>RECENZIJE</h3>
          </TitleBar>
          <p>
            Ovdje možete pronaći iskustva naših gostiju te ukoliko želite,
            možete ostaviti vaše osobno iskustvo.
          </p>
          {Posts}
          <div>
            <h2>Vaše iskustvo:</h2>
            <Form id="root"></Form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ReviewPage

export const pageQuery = graphql`
  query($skip: Int, $limit: Int) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 50)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            author
          }
        }
      }
    }
  }
`

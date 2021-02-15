import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"


export default function About({ data }) {
    return (
        <Layout>
            <div style={{ color: `teal` }}>
                <Header headerText="About Gatsby" arbitraryPhrase="is arbitrary" />
                <p>Welcome to About Me!</p>
                <h1>About {data.site.siteMetadata.title}</h1>
                <p>
                    We're the only site running on your computer dedicated to showing the
                    best photos and videos of pandas eating lots of food.
      </p>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"



const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
                <h3
                    css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
                >
                    {data.site.siteMetadata.title}
                </h3>
            </header>
            {children}
        </div>
    )
}
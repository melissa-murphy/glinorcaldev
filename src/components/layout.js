/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import { FaHeart } from "react-icons/fa"

import Header from "./header"
import FooterMain from "./FooterMain"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>
          <Container fluid className="m-0 px-0">
            <main>{children}</main>
          </Container>
        </Container>
        <Container fluid className="footer-wrapper">
          <FooterMain
            siteTitle={data.site.siteMetadata.title}
            tagline={data.site.siteMetadata.description}
          />
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  <small>
                    © {new Date().getFullYear()}, GLI Norcal Landscape
                    Construction Inc., All Rights Reserved <br />
                    Built with <FaHeart /> by
                    {data.site.siteMetadata.author}
                  </small>
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout

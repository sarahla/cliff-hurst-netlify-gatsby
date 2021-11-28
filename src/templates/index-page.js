import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Features from '../components/Features'
import Poster from '../components/Poster'

export const IndexPageTemplate = ({ blurbs }) => (
  <>
    <Poster />
    <Features gridItems={blurbs} />
  </>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  blurbs: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <IndexPageTemplate
      blurbs={frontmatter.blurbs}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        blurbs {
          image: img {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
          headline
          text
          url
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({blurbs }) => (
  <Features gridItems={blurbs} />
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  blurbs: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout hideLogo={true}>
      <IndexPageTemplate
        blurbs={frontmatter.blurbs}
      />
    </Layout>
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

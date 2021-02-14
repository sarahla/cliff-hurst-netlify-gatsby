import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TestimonialSection from '../components/TestimonialSection'
import Content, { HTMLContent } from '../components/Content'

export const TestimonialPageTemplate = ({ 
  title, 
  content, 
  contentComponent,
  image,
  description
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
        <Hero title={title} image={image} />
        <main>
            <section className="wrapper u-mb-30">
              <div className="content">
                { description ? (
                   <h2 class="t-h5 u-mb-8">{description}</h2>
                ): ''}
                <PageContent className="content" content={content} />
              </div>
            </section>
            <TestimonialSection />
        </main>
    </div>
  )
}

TestimonialPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
}

const TestimonialPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TestimonialPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
      />
    </Layout>
  )
}

TestimonialPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TestimonialPage

export const TestimonialPageQuery = graphql`
  query TestimonialPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

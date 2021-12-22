import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import { HTMLContent } from '../components/Content'

export const MediaPageTemplate = ({ title, items }) => (
  <>
    <Hero title={title} style="sub" />
    <main>
      <section className="wrapper u-mb-30">
        <div>
          <ul className="list list--plain list--downloads">
            {
              items.map(article => (
                <li className="t-h5" key={article.title}>
                  <a className="link" target="_blank" rel="noreferrer" noopener="true" href={article.url}> {article.title} </a>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </main>
  </>
)

MediaPageTemplate.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

const MediaPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <MediaPageTemplate
      title={frontmatter.title}
      items={frontmatter.items}
    />
  )
}

MediaPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MediaPage

export const pageQuery = graphql`
  query MediaPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "media-page" } }) {
      frontmatter {
        title
        items {
          title
          url
        }
      }
    }
  }
`

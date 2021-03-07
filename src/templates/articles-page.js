import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const ArticlesPageTemplate = ({ title, articles }) => (
  <>
    <section class="hero--sub in-view" data-animate="">
        <h1 class="t-h1 u-mb-0">
            {title}
        </h1>
    </section>
    <main>
        <section class="wrapper u-mb-30">
          <div>
            <ul class="list list--plain list--downloads">
              {
                articles.map( article => (
                  <li className="t-h5">
                    <a className="link" target="_blank" noopener href={article.pdf.publicURL}> {article.title} </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
    </main>
  </>
)

ArticlesPageTemplate.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.array,
}

const ArticlesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <Layout>
      <ArticlesPageTemplate
        title={frontmatter.title}
        articles={frontmatter.articles}
      />
    </Layout>
  )
}

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ArticlesPage

export const pageQuery = graphql`
  query ArticlesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "articles-page" } }) {
      frontmatter {
        title
        articles {
          title
          pdf {
            publicURL
          }
        }
      }
    }
  }
`

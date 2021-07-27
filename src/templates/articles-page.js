import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'

export const ArticlesPageTemplate = ({ title, articles }) => (
  <>
    <Hero title={title} style="sub" />
    <main>
      <section className="wrapper u-mb-30">
        <div>
          <ul className="list list--plain list--downloads">
            {
              articles.map(article => (
                <li className="t-h5">
                  <a className="link" target="_blank" rel="noreferrer" noopener="true" href={article.pdf.publicURL}> {article.title} </a>
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
  return (
    <Layout location="articles" >
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

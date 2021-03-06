import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const ArticlesPageTemplate = ({ articles }) => (
  <ul>
    {
      articles.map( article => (
        <li>
          <a href={article.pdf}> {article.title} </a>
        </li>
      ))
    }
  </ul>
)

ArticlesPageTemplate.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.array,
}

const ArticlesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <Layout hideLogo={true}>
      <ArticlesPageTemplate
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
          pdf
        }
      }
    }
  }
`

import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
      <section className="section">
        <Helmet title={`Tags | ${title}`} />
        <Hero title={`Tags`} style="sub" />
        <div className="wrapper">
          <div className="columns">
            <div
              style={{ marginBottom: '6rem' }}
            >
              <ul className="list list--tags">
                {group.map((tag) => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} <span className="list--tags__count">({tag.totalCount})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

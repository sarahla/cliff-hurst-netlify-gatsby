import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ImagePlaceholder = function (props) {
  const { children, aspectRatio } = props;
  const padding = (1 / aspectRatio) * 100;
  console.log(padding);
  return (
    <div className="placeholder" style={{ paddingTop: `${padding}%` }}>
      {children}
    </div>
  )
}

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="grid blog-list">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="grid-col-6 u-mb-6" key={post.id}>
              <article
                className={`blog-list__item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="blog-list__item__thumb">
                      <PreviewCompatibleImage
                        imageInfo={{
                          aspectRatio: 1.618,
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : <ImagePlaceholder aspectRatio="1.618"></ImagePlaceholder>}
                  <p className="post-meta u-mt-6">
                    <span className="u-upper t-eyebrow">
                      {post.frontmatter.date}
                    </span>
                    <br />
                    <h3 className="t-h4 u-mt-2 u-mb-4">
                      <Link
                        className="link"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                  </p>
                </header>
                <p className="t-lead4 u-mb-4">
                  {post.excerpt}
                </p>
                <Link className="link link--cta link--cta--small" to={post.fields.slug}>
                  Keep Reading
                </Link>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

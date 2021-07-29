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
      <div className="blog-list">
        {posts &&
          posts.map(({ node: post }) => {
            const [year, month, day] = post.frontmatter.date?.split(" ");
            return (
              <article
                key={post.id}
                className={`blog-list__item tile is-child box notification u-mb-4 ${post.frontmatter.featuredpost ? 'is-featured grid-col-12' : 'grid-col-12'
                  }`}
              >
                <header>
                  <div className="post-meta u-mr-6">
                    {
                      post.frontmatter.date &&
                      (
                        <div className="u-upper t-eyebrow blog-list__date">
                          <span className="blog-list__date__month">{month}</span>
                          <span className="blog-list__date__day">{day}</span>
                          <span className="blog-list__date__year">{year}</span>
                        </div>
                      )
                    }
                  </div>
                  <div className="blog-list__item__thumb u-mr-6">
                    {post.frontmatter.featuredimage ? (
                      <PreviewCompatibleImage
                        imageInfo={{
                          aspectRatio: 1.618,
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    ) : <ImagePlaceholder aspectRatio="1.618"></ImagePlaceholder>}
                  </div>
                </header>
                <div className="blog-list__item__content">
                  <h3 className="t-h3 u-mb-2">
                    <Link
                      className="link"
                      to={post.fields.slug}
                    >
                      <span className="t-black">{post.frontmatter.title}</span>
                    </Link>
                  </h3>
                  {
                    post.frontmatter.tags?.length > 0 && (
                      <ul class="list list--plain list--inline list--inline--comma list--small u-mt-0 u-mb-4">
                        {
                          post.frontmatter.tags.map(t => <li style={{ marginBottom: 0 }}><Link to={`/tags/${t}`}>{t}</Link></li>)
                        }
                      </ul>
                    )
                  }
                  <p className="t-lead4 u-mb-4">
                    {post.excerpt}
                    &nbsp; <Link style={{ display: 'inline-block', fontSize: '1em' }} className="link link--cta link--cta--inline" to={post.fields.slug}>
                      Keep Reading
                  </Link>
                  </p>
                </div>
              </article>
            )
          })}
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
                tags
                date(formatString: "YYYY MMM DD")
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

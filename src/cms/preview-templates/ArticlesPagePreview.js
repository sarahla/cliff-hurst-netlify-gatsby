import React from 'react'
import PropTypes from 'prop-types'
import { ArticlesPageTemplate } from '../../templates/articles-page'

const ArticlesPagePreview = ({ entry, getAsset }) => {
  const entryArticles= entry.getIn(['data', 'intro', 'articles'])
  const articles = entryArticles ? entryArticles.toJS() : []

  return (
    <ArticlesPageTemplate
      articles={articles}
    />
  )
}

ArticlesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ArticlesPagePreview

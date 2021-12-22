import React from 'react'
import PropTypes from 'prop-types'
import { MediaPageTemplate } from '../../templates/media-page'

const MediaPagePreview = ({ entry, getAsset }) => {
  const entryMedia= entry.getIn(['data', 'intro', 'Media'])
  const Media = entryMedia ? entryMedia.toJS() : []

  return (
    <MediaPageTemplate
      Media={Media}
    />
  )
}

MediaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MediaPagePreview

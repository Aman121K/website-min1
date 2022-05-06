import React from 'react';
import {Helmet} from 'react-helmet'

const HtmlHead = ({title,desc}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
    </Helmet>
  )
}

export default HtmlHead
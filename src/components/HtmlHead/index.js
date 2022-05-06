import React from 'react';
import { Helmet } from 'react-helmet';

const HtmlHead = ({ title, desc, pathname }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={desc} />
			<link rel='canonical' href={`https://getexcelsior.com/${pathname}`} />
		</Helmet>
	);
};

export default HtmlHead;

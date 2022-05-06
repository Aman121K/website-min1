import React from 'react';

const CheckSquare = ({ ...props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			{...props}
		>
			<path d='M17 5L10.6329 12.2032C10.2511 12.6351 9.58418 12.6556 9.17656 12.248L6.92857 10'></path>
			<path d='M11 2L5.5 2C4.09554 2 3.39331 2 2.88886 2.33706C2.67048 2.48298 2.48298 2.67048 2.33706 2.88886C2 3.39331 2 4.09554 2 5.5L2 14.5C2 15.9045 2 16.6067 2.33706 17.1111C2.48298 17.3295 2.67048 17.517 2.88886 17.6629C3.39331 18 4.09554 18 5.5 18L14.5 18C15.9045 18 16.6067 18 17.1111 17.6629C17.3295 17.517 17.517 17.3295 17.6629 17.1111C18 16.6067 18 15.9045 18 14.5L18 11'></path>
		</svg>
	);
};

export default CheckSquare;

import React from 'react';

const Star = ({ ...props }) => {
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
			<path d='M9.09413 2.93747C9.45349 2.16887 10.5465 2.16887 10.9059 2.93747L12.4188 6.17326C12.5602 6.47565 12.8431 6.68755 13.173 6.73816L16.6418 7.2702C17.4452 7.39343 17.7738 8.37275 17.2073 8.9556L14.6304 11.6071C14.4098 11.834 14.3097 12.152 14.3604 12.4644L14.9594 16.1503C15.0933 16.9748 14.2174 17.5904 13.4871 17.1851L10.4852 15.5193C10.1834 15.3518 9.81658 15.3518 9.51477 15.5193L6.51293 17.1851C5.78261 17.5904 4.90669 16.9748 5.04064 16.1503L5.63956 12.4644C5.69032 12.152 5.5902 11.834 5.36961 11.6071L2.79266 8.9556C2.22619 8.37275 2.55478 7.39343 3.35816 7.2702L6.82695 6.73816C7.1569 6.68755 7.43984 6.47565 7.58122 6.17326L9.09413 2.93747Z'></path>
		</svg>
	);
};

export default Star;
import React from 'react';

const ChartUp = ({ ...props }) => {
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
			<path d='M18 18L4 18C2.89543 18 2 17.1046 2 16L2 2'></path>
			<path d='M18 5L12.6464 10.2263C11.9734 10.8833 10.903 10.8957 10.2149 10.2545V10.2545C9.5268 9.61336 8.45638 9.62579 7.78337 10.2828L5 13'></path>
			<path d='M14 5H18V9'></path>
		</svg>
	);
};

export default ChartUp;

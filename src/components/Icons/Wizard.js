import React from 'react';

const Wizard = ({ ...props }) => {
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
			<g clipPath='url(#clip0)'>
				<path d='M17.0203 2.66268C17.2165 2.59613 17.4039 2.78349 17.3373 2.97972L16.3358 5.93306C16.3094 6.01099 16.323 6.09692 16.3722 6.16287L18.2373 8.66218C18.3613 8.82825 18.241 9.06433 18.0338 9.06168L14.9155 9.02182C14.8332 9.02077 14.7557 9.06027 14.7082 9.12745L12.9076 11.6736C12.7879 11.8428 12.5262 11.8014 12.4647 11.6035L11.539 8.62551C11.5146 8.54693 11.4531 8.48541 11.3745 8.46098L8.39652 7.53529C8.19865 7.47378 8.1572 7.21208 8.32638 7.09244L10.8725 5.29181C10.9397 5.2443 10.9792 5.16677 10.9782 5.0845L10.9383 1.96622C10.9357 1.75903 11.1718 1.63874 11.3378 1.76266L13.8371 3.62779C13.9031 3.677 13.989 3.69061 14.0669 3.66418L17.0203 2.66268Z'></path>
				<path d='M11.1924 9L8 12'></path>
				<path d='M7.82891 12.2977C8.07719 12.5459 8.20133 12.6701 8.23092 12.8188C8.24373 12.8832 8.24373 12.9495 8.23092 13.0139C8.20133 13.1627 8.07719 13.2868 7.82891 13.5351L4.03297 17.331C3.78469 17.5793 3.66055 17.7035 3.5118 17.733C3.4474 17.7459 3.3811 17.7459 3.31671 17.733C3.16795 17.7035 3.04381 17.5793 2.79553 17.331L2.61876 17.1543C2.37048 16.906 2.24634 16.7819 2.21675 16.6331C2.20394 16.5687 2.20394 16.5024 2.21675 16.438C2.24634 16.2892 2.37048 16.1651 2.61876 15.9168L6.4147 12.1209C6.66298 11.8726 6.78711 11.7485 6.93587 11.7189C7.00027 11.7061 7.06656 11.7061 7.13096 11.7189C7.27972 11.7485 7.40386 11.8726 7.65214 12.1209L7.82891 12.2977Z'></path>
			</g>
			<defs>
				<clipPath id='clip0'>
					<path d='M0 0H20V20H0z'></path>
				</clipPath>
			</defs>
		</svg>
	);
};

export default Wizard;

import { BugFilled, BulbFilled, CloudFilled, CodeFilled } from '@ant-design/icons';
import { Menu, Col } from 'antd';
import React, { useState } from 'react';

function LearningExperience({ learningExperience }) {
	const [activeKey, setActiveKey] = useState(1);

	return (
		<div className='mb-5'>
			<h2 className='admission_heading '> Career Support </h2>
			<p>
				Excelsior’s industry experts are the ultimate resource for anyone looking to
				build their profile Resume Building LinkedIn Profile Building Github Building
			</p>
			<div className='LearningExperience mt-3'>
				<div className='row m-0 p-1'>
					<Col md={8} className='px-0 w-100'>
						<Menu
							className='back d-flex flex-column justify-space-evenly h-100'
							onSelect={({ selectedKeys }) => {
								setActiveKey(parseInt(selectedKeys));
							}}
						>
							<Menu.Item
								key='1'
								className='text-center'
								style={{ fontSize: '16px' }}
							>
								Profile Building
							</Menu.Item>
							<Menu.Item
								key='2'
								className='text-center'
								style={{ fontSize: '16px' }}
							>
								Expert Sessions
							</Menu.Item>
							<Menu.Item
								key='3'
								className='text-center'
								style={{ fontSize: '16px' }}
							>
								Mock Interviews
							</Menu.Item>
							<Menu.Item
								key='4'
								className='text-center'
								style={{ fontSize: '16px' }}
							>
								Project Guidance
							</Menu.Item>
						</Menu>
					</Col>
					<Col
						md={16}
						className='d-flex px-0 py-2 align-items-center justify-content-center'
						style={{ borderLeft: '1px solid #ececec' }}
					>
						{learningExperience.map(
							({ body }, index) =>
								activeKey === index + 1 && (
									<div
										className='p-3 w-100'
										style={{
											backgroundColor: 'white',
											lineHeight: '1.5',
											fontSize: '16px',
										}}
										key={index}
									>
										{body}
									</div>
								)
						)}
					</Col>
				</div>
			</div>
		</div>
	);
}

export default LearningExperience;

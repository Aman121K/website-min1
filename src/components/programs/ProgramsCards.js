import { Card, Col } from 'antd';
import React from 'react';

function ProgramsCards({ features }) {
	return (
		<Col xs={24} sm={24} lg={4}>
			<Card className='h-100 text-center' title={features.title} bordered={false}>
				<ul className='card_list text-center' style={{ listStyle: 'none' }}>
					{features.content.map((item, i) => (
						<li className='mb-2' key={i}>
							{item}
						</li>
					))}
				</ul>
			</Card>
		</Col>
	);
}

export default ProgramsCards;

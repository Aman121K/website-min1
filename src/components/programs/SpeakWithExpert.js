import { Button, Card, Col, Row } from 'antd';
import React from 'react';

function SpeakWithExpert() {
	return (
		<div className='mb-3'>
			<h2 className='admission_heading '>Speak With Expert</h2>
			<Row gutter={[20, 30]}>
				<Col lg={12}>
					<Card style={{ backgroundColor: '#f35d5d' }}>
						<h2 className='text-white mb-3'>
							Lorem ipsum dolor sit amet consectetur
						</h2>
						<h3 className=' text-white mb-3' style={{ lineHeight: '1.5' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
							blanditiis illum est possimus culpa architecto adipisci. Explicabo
							modi ullam quo!"
						</h3>
						<Row className='text-white mb-3'>
							<Col lg={20}></Col>
							<Col lg={4}>
								<Button>View</Button>
							</Col>
						</Row>
					</Card>
				</Col>
				<Col lg={12}>
					<Card style={{ backgroundColor: '#f35d5d' }}>
						<h2 className='text-white mb-3'>
							Lorem ipsum dolor sit amet consectetur
						</h2>
						<h3 className='text-white mb-3' style={{ lineHeight: '1.5' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
							blanditiis illum est possimus culpa architecto adipisci. Explicabo
							modi ullam quo!"
						</h3>
						<Row className='text-white mb-3'>
							<Col lg={20}></Col>
							<Col lg={4}>
								<Button>View</Button>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default SpeakWithExpert;

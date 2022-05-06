import { Row, Col, Card, Timeline, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Chart from './Chart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Aboutus() {
	const data = [
		{ type: 'Maths', value: 27 },
		{ type: 'Chemistry', value: 30 },
		{ type: 'Phtysis', value: 40 },
		{ type: 'Zoo', value: 3 },
	];

	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Home</title>
				<link rel='canonical' href='http://mysite.com/example' />
			</Helmet>
			<div className='container mt-4'>
				<h1 className='Banner_Heading'>EXCELSIOR</h1>
				<p className='mb-4'>Excelsior is ideal for professionals who wants to</p>
			</div>
			<div>
				<div className='banner mb-3 container'>
					<div className='container pl-4'>
						<h1 className='admission_heading mb-3' style={{ color: '#fff' }}>
							About US
						</h1>
					</div>
				</div>
				<div className='container'>
					<h2 className='admission_heading mb-3'> Our Values</h2>
					<Row gutter={[20, 30]} className='mb-5'>
						<Col xs={24} sm={24} md={12} lg={8}>
							<Card title='Efficiency' hoverable>
								<p>
								Their can be growth only where there is efficiency
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={8}>
							<Card title='Committment' hoverable>
								<p>
								Committment reflects in the output
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={8}>
							<Card title='Reliability' hoverable>
								<p>
									Reliability is the pre-condition to trust
								</p>
							</Card>
						</Col>
					</Row>
					<h2 className='admission_heading mb-3'> ABOUT EXCELSIOR</h2>
					<Row gutter={[20, 30]} className='mb-5'>
						<Col xs={24} sm={24} md={12} lg={12}>
							<Card title='Our Mission' hoverable>
								<p>
								Excelsior aspires to fulfill its purpose of re-inventing the student learning experience by elevating mentoring, learning, and placement to new heights. Our philosophy is that learning and experiential mentoring should go hand in hand. 
Excelsior aims equip learners with the resources and inspiration they need to reshape their careers, fulfill their dreams, and make a real difference in the world.
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
							<Card title='Our Vision' hoverable>
								<p>
								We have a problem. And Excelsior is working on a solution. We have the problem of rising tuition and diminishing returns for students who are placed in the wrong classes or receive weak guidance. We seek to solve this problem by offering a dynamic learning experience that guides students through the most efficient paths for knowledge acquisition and development of skills and passions to achieve long term success.
								</p>
							</Card>
						</Col>
					</Row>
					<Row gutter={[20, 30]} className='mb-5'>
						<Col xs={24} sm={24} md={12} lg={12}>
							<h2 className='admission_heading mb-3'> TimeLine</h2>
							<Card>
								<Timeline mode={'alternate'}>
									<Timeline.Item className='custom-text-primary' label='Beginning (2017)'>
									Excelsior was born
									</Timeline.Item>
									<Timeline.Item label='First Milestone 2019'>
									1000+ students succesfully placed
									</Timeline.Item>
									<Timeline.Item className='custom-text-primary' label='We expanded 2019'>
										Succesfully Launched IT Vertical
									</Timeline.Item>
									<Timeline.Item label='Proven results(2020)'>
										5000+ careers transformed
									</Timeline.Item>
									<Timeline.Item className='custom-text-primary' label='And growing'>
										..and we continue our journey towards excellence
									</Timeline.Item>
								</Timeline>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
							<h2 className='admission_heading mb-3'> Our Achievements</h2>
							<Row gutter={[20, 30]} className='mb-3'>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar size={42} />
										<h3 className='mt-2'>{'97% Placement'}</h3>
									</div>
								</Col>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar size={42} />
										<h3 className='mt-2'>{'160+ partners'}</h3>
									</div>
								</Col>
							</Row>
							<Row gutter={[20, 30]} className='mb-3'>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar size={42} />
										<h3 className='text-center mt-2'>{'6,000+ students have successfully transformed their career with us'}</h3>
									</div>
								</Col>
								<Col xs={12} sm={12} md={12} lg={12}>
									<div className='home__stats-item'>
										<Avatar size={42} />
										<h3 className='text-center mt-2'>{'Revolutionary product that provides relevant data about the job market'}</h3>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Aboutus;

{
	/* <Row gutter={[20, 30]}>
            {statsData?.map((item, index) => (
              <Col xs={24} sm={24} md={6} lg={4} key={index}>
                <div className="home__stats-item">
                  <Avatar size={42} />
                  <p>{item.title}</p>
                  <h3 className="text-primary">{item.text}</h3>
                </div>
              </Col>
            ))}
          </Row> */
}

import { Card, Carousel, Col, Image, Row } from 'antd';
import React, { Fragment } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronLeft className={className} style={{ ...style }} onClick={onClick} />;
}

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronRight className={className} style={{ ...style }} onClick={onClick} />;
}

function Projects({ projectsData }) {
	return (
		<div className='container mb-5'>
			<h2 className='admission_heading'>Projects</h2>
			<Carousel
				className='d-lg-jsjs'
				dots={false}
				autoplay={false}
				arrows={true}
				prevArrow={<PrevArrow />}
				nextArrow={<NextArrow />}
			>
				{projectsData.map((e, i) => (
					<div className='mb-4' key={i}>
						<Row gutter={[20, 30]}>
							<Col lg={12} className='d-flex'>
								<Card>
									<div className='d-flex flex-column'>
										<div
											className='project_header'
											style={{ backgroundColor: 'rgb(243 93 93 / 90%)' }}
										>
											<header className='text-center'>
												<h3 style={{ color: '#fff' }}>{e.firstRow.title}</h3>
											</header>
										</div>
										<div className='order-lg-2 p-2 mt-2'>
											<p style={{ lineHeight: '1.5' }}>
												{e.firstRow.description}
											</p>
										</div>
									</div>
								</Card>
							</Col>
							<Col lg={12} className='d-flex'>
								<Card>
									<div className='d-flex flex-column'>
										<div
											className='project_header'
											style={{ backgroundColor: 'rgb(243 93 93 / 90%)' }}
										>
											<header className='text-center'>
												<h3 style={{ color: '#fff' }}>{e.secondRow.title}</h3>
											</header>
										</div>
										<div className='order-lg-2 p-2 mt-2'>
											<p style={{ lineHeight: '1.5' }}>
												{e.secondRow.description}
											</p>
										</div>
									</div>
								</Card>
							</Col>
						</Row>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default Projects;

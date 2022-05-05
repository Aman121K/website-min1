import { Card, Carousel, Col, Rate, Row } from 'antd';
import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronLeft className={className} style={{ ...style }} onClick={onClick} />;
}

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronRight className={className} style={{ ...style }} onClick={onClick} />;
}

function Review({ reviews }) {
	return (
		<div className='container mb-4'>
			<h2 className='admission_heading'>Reviews</h2>

			<Carousel
				className='d-lg-jsjs'
				dots={false}
				autoplay
				arrows
				prevArrow={<PrevArrow />}
				nextArrow={<NextArrow />}
			>
				{reviews.map(({ firstRow, secondRow }, index) => {
					return (
						<div key={index}>
							<Row gutter={[20, 30]}>
								<Col lg={12} className='d-flex'>
									<Card>
										<Row gutter={[20, 30]} className='align-items-center mb-2'>
											<Col lg={4}>
												<img
													className='img-fluid rounded-xl'
													alt='ak'
													src={firstRow.imageURL}
												/>
											</Col>
											<Col lg={16}>
												<div className='d-flex align-items-center'>
													<p className='mr-1'>{firstRow.name}</p>
													<a href='/' className='d-flex'>
														<FaLinkedin color='#0A66C2' size='28' />
													</a>
												</div>
											</Col>
										</Row>
										<div className='p-2'>
											<p>{firstRow.description}</p>
										</div>
									</Card>
								</Col>
								<Col lg={12} className='d-flex'>
									<Card>
										<Row gutter={[20, 30]} className='align-items-center mb-2'>
											<Col lg={4}>
												<img
													className='img-fluid rounded-xl'
													alt='ak'
													src={secondRow.imageURL}
												/>
											</Col>
											<Col lg={16}>
												<div className='d-flex align-items-center'>
													<p className='mr-1'>{secondRow.name}</p>
													<a href='/' className='d-flex'>
														<FaLinkedin color='#0A66C2' size='28' />
													</a>
												</div>
											</Col>
										</Row>
										<div className='p-2'>
											<p>{secondRow.description}</p>
										</div>
									</Card>
								</Col>
							</Row>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}

export default Review;

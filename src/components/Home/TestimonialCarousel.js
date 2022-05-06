import React from 'react';
import { Card, Carousel, Col, Rate, Row } from 'antd';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronLeft className={className} style={{ ...style }} onClick={onClick} />;
}

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronRight className={className} style={{ ...style }} onClick={onClick} />;
}

const TestimonialCarousel = ({ carouselData }) => {
	return (
		<div className='px-2'>
			<Carousel
				className='d-lg-jsjs'
				dots={false}
				autoplay={false}
				arrows={true}
				prevArrow={<PrevArrow />}
				nextArrow={<NextArrow />}
			>
				{carouselData.map(({ firstRow, secondRow }, index) => {
					return (
						<div key={index}>
							<Row>
								<Col className='d-flex'>
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
							</Row>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default TestimonialCarousel;

import { Card, Carousel, Col, Row } from 'antd';
import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronLeft className={className} style={{ ...style }} onClick={onClick} />;
}

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <FiChevronRight className={className} style={{ ...style }} onClick={onClick} />;
}

function Review({ reviews }) {
	const settings = {
		infinite: true,
		swipeToSlide: true,
		slidesToShow: 2,
		speed: 500,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true,
				},
			},
		],
	};

	return (
		<div className='container mb-4'>
			<h2 className='admission_heading'>Reviews</h2>

			<Slider {...settings}>
				{reviews.map(({ name, imageURL, description, linkedin }, index) => {
					return (
						<div key={index}>
							<Row gutter={[20, 30]} className='m-2 review-card'>
								<Col lg={24} className='d-flex p-0'>
									<Card className='p-0'>
										{/* <Row gutter={[20, 30]} className='align-items-center mb-2'> */}
										{/* <Col lg={4}>
												<img
													className='img-fluid rounded-xl'
													alt='ak'
													src={imageURL}
												/>
											</Col> */}
										<Col lg={24}>
											<div className='d-flex align-items-center'>
												<h3 className='mr-2 custom-text-primary'>{name}</h3>
												<a
													href={linkedin}
													className='d-flex'
													target='_blank'
													rel='noopener noreferrer'
												>
													<FaLinkedin color='#0A66C2' size='28' />
												</a>
											</div>
										</Col>
										{/* </Row> */}
										<div className='p-2'>
											<p>{description}</p>
										</div>
									</Card>
								</Col>
							</Row>
						</div>
					);
				})}
			</Slider>
		</div>
	);
}

export default Review;

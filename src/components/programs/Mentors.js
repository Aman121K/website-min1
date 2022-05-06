import React from 'react';
import { Card, Row, Col } from 'antd';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
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

function Mentors({ mentorsData }) {
	const settings = {
		infinite: true,
		swipeToSlide: true,
		slidesToShow: 1,
		speed: 500,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					adaptiveHeight: true,
				},
			},
		],
	};

	return (
		<div className='container mb-4'>
			<h2 className='admission_heading'>Mentors</h2>
			<Slider {...settings}>
				{mentorsData.map((e, i) => (
					<div key={i}>
						<Row gutter={[20, 30]} className='m-2 mentor-card'>
							<Col lg={24} className='d-flex p-0'>
								<Card className='p-0'>
									<Col lg={24}>
										<div className='d-flex flex-column justify-content-center'>
											<div className='sw-13 position-relative mb-2'>
												<img
													className='img-fluid rounded-xl'
													alt={e.name}
													src={e.imageURL}
												/>
											</div>
											<h3 className='mt-3 mb-1 custom-text-primary'>
												{e.name}
											</h3>
											<div className='mb-3'>{e.areaOfExpert}</div>
											<div className=''>{e.description}</div>
										</div>
									</Col>
								</Card>
							</Col>
						</Row>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Mentors;

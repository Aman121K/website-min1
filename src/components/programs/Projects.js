import { Card, Col, Row } from 'antd';
import React from 'react';
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

function Projects({ projectsData }) {
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
			<h2 className='admission_heading'>Sample Projects</h2>
			<Slider {...settings}>
				{projectsData.map((e, i) => (
					<div key={i}>
						<Row gutter={[20, 30]} className='m-2 project-card'>
							<Col lg={24} className='d-flex p-0'>
								<Card className='p-0'>
									<div className='d-flex flex-column'>
										<div
											className='project_header'
											style={{ backgroundColor: 'rgb(243 93 93 / 90%)' }}
										>
											<header className='text-center'>
												<h3 style={{ color: '#fff' }}>{e.title}</h3>
											</header>
										</div>
										<div className='order-lg-2 p-2 mt-2'>
											<p style={{ lineHeight: '1.5' }}>{e.description}</p>
										</div>
									</div>
								</Card>
							</Col>
						</Row>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Projects;

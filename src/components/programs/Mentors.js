import { RightCircleOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React, { Fragment } from 'react';

function Mentors({ mentorsData }) {
	return (
		<div>
			<h2 className='admission_heading'>Mentors</h2>
			<div className='row'>
				{mentorsData.map((e, i) => (
					<Fragment key={i}>
						<div className='col col-lg-3 col-md-3 col-sm-12 mb-3'>
							<Card hoverable className='h-100'>
								<div className='mb-n5 card-body'>
									<div className='d-flex align-items-center flex-column justify-content-center'>
										<div className='sw-13 position-relative mb-2'>
											<img
												className='img-fluid rounded-xl'
												alt='ak'
												src={e.imageURL}
											/>
										</div>
										<div className='h5 my-3 text-center'>{e.name}</div>
										<Button type='primary'>Read More</Button>
									</div>
								</div>
							</Card>
						</div>
					</Fragment>
				))}
			</div>
		</div>
	);
}

export default Mentors;

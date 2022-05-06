import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Form, Input, Radio, Row, Button, DatePicker, TimePicker } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import ProgramsCards from '../ProgramsCards';
import Program_DB_Master from '../../../assets/static/Program_DB_Master';
import { programData } from './data';

const Program = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const ProgramFormSubmit = async () => {
		if (!name && !email) {
			toast.error('Some parameter is missing');
		} else {
			let body = {};
			let response = await axios.post('', body);
			if (response.data.Success === 1) {
				toast.success('Form succesfully submitted');
			} else {
				toast.error('Something went wrong into the server side');
			}
		}
	};

	return (
		<div className='container mt-3'>
			<ToastContainer />
			<div className='mb-5'>
				<h2 className='admission_heading'>Features</h2>
				<Row gutter={[20, 30]}>
					{programData.features.map((item, i) => (
						<ProgramsCards features={item} key={i} />
					))}
				</Row>
			</div>
			<div className='mb-3'>
				<Row gutter={[20, 30]}>
					<Col lg={24}>
						<h2 className='admission_heading'>Programs</h2>
						<div className='programs_lists'>
							<li className='programs_list'>
								<ul>
									<b>Name Of Program</b>
								</ul>
								<ul>
									<b>Duration In Weeks</b>
								</ul>
								<ul>
									<b>Rating</b>
								</ul>
								<ul>
									<b>Completed By</b>
								</ul>
							</li>
							{Program_DB_Master.map((e, index) => (
								<Link to={e.pathname} key={index}>
									<li className='programs_list'>
										<ul className='custom-text-primary'>{e.nameOfProgram}</ul>
										<ul className='programs_listdark'>{e.durationInWeeks}</ul>
										<ul className='programs_listdark'>{e.rating}</ul>
										<ul className='programs_listdark'>{e.completedBy}</ul>
									</li>
								</Link>
							))}
						</div>
					</Col>
					<Col className='mb-5' lg={24}>
						<h2 className='admission_heading'>Homework</h2>
					</Col>
				</Row>
			</div>
			<div className='mb-5'>
				<Row gutter={[20, 30]}>
					<Col xs={24} sm={24} md={8} lg={8} className='mb-5 d-flex flex-column'>
						<h2 className='admission_heading'>List of Quizes</h2>
						<div className='quizes_lists'>
							<li className='quizes_list'>
								<ul>lorem</ul>
								<ul>ipsum</ul>
							</li>
							<li className='quizes_list'>
								<ul>lorem</ul>
								<ul>ipsum</ul>
							</li>
							<li className='quizes_list'>
								<ul>lorem</ul>
								<ul>ipsum</ul>
							</li>
						</div>
					</Col>
					<Col
						className='mb-5'
						xs={24}
						sm={24}
						md={8}
						lg={8}
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<h2 className='admission_heading'>Events and webinars</h2>
						<>
							<Form
								//   form={form}
								name='horizontal_login'
								layout='outline'
								className='form'
								autoComplete='off'
								// onFinish={(values) => console.log(values)}
							>
								<Form.Item
									name='name'
									rules={[
										{ required: true, message: 'Please input your Name!' },
									]}
								>
									<Input
										placeholder='Name'
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Form.Item>
								<Form.Item
									name='email'
									rules={[
										{ required: true, message: 'Please input your email!' },
									]}
								>
									<Input
										type='text'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder='Email Address '
									/>
								</Form.Item>
								<Form.Item
									name='phonenumber'
									rules={[
										{
											required: true,
											message: 'Please input your phone number!',
										},
									]}
								>
									<Input
										type='number'
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										placeholder='Phone Number '
									/>
								</Form.Item>
								<Form.Item
									name='date'
									rules={[
										{
											required: true,
											message: 'Please provide date',
										},
									]}
								>
									<DatePicker />
								</Form.Item>
								<Form.Item
									name='time'
									rules={[
										{
											required: true,
											message: 'Please provide time',
										},
									]}
								>
									<TimePicker format={'HH:mm'} />
								</Form.Item>
								<Form.Item shouldUpdate>
									{() => (
										<Button
											onClick={() => ProgramFormSubmit()}
											type='primary'
											htmlType='submit'
										>
											Submit
										</Button>
									)}
								</Form.Item>
							</Form>
						</>
					</Col>
					<Col
						className='mb-5'
						xs={24}
						sm={24}
						md={8}
						lg={8}
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<h2 className='admission_heading'>Notifications</h2>
						<li className='notifications_list'>
							{programData.notifications.map((item, index) => (
								<div className='d-flex flex-column' key={index}>
									<div className='d-flex mb-2'>
										<span className='mr-2'>&#10146;</span>
										<h4 style={{ lineHeight: '1.3' }}>{item.title}</h4>
									</div>
								</div>
							))}
						</li>
					</Col>
				</Row>
			</div>
			<div className='mb-5'>
				<h2 className='admission_heading'>Mentors</h2>
				<div className='row'>
					{programData.mentors.map((e, i) => (
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
		</div>
	);
};

export default Program;

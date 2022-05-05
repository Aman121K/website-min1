import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Form, Input, Radio, Row, Button } from 'antd';
import ProgramsCards from './ProgramsCards';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import Program_DB_Master from '../../assets/static/Program_DB_Master';
const { Meta } = Card;


const Program = () => {
	const [name,setName]=useState();
		const [email,setEmail]=useState();
		const [phone,setPhone]=useState();
	const ProgramFormSubmit=async()=>{
		
		if(!name && !email){
			toast.error("Some parameter is missing");
		}
		else{
		let body={

		}
		let response=await axios.post('',body)
		if(response.data.Success===1){
			toast.success("Form succesfully submitted")
		}
		else{
			toast.error("Something went wrong into the server side")
		}
	}
}
	return (
		<div className='container mt-3'>
			  <ToastContainer/>
			<div className='mb-5'>
				<h2 className='admission_heading'>Features</h2>
				<Row gutter={[20, 30]}>
					<ProgramsCards />
					<ProgramsCards />
					<ProgramsCards />
					<ProgramsCards />
					<ProgramsCards />
					<ProgramsCards />
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
								<Link
									// to={{
									// 	pathname: e.pathname,
									// }}
									to={e.pathname}
									// state={e}
									key={index}
								>
									<li className='programs_list'>
										<ul>{e.nameOfProgram}</ul>
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
					<Col
						className='mb-5'
						xs={24}
						sm={24}
						md={8}
						lg={8}
						style={{ display: 'flex', flexDirection: 'column' }}
					>
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
									<Input placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
								</Form.Item>
								<Form.Item
									name='email'
									rules={[
										{ required: true, message: 'Please input your email!' },
									]}
								>
									<Input type='text'  value ={email} onChange={(e)=>setEmail(e.target.value)}
									placeholder='Email Address ' />
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
									<Input type='number' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone Number ' />
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
									<TimePicker  format={'HH:mm'} />
								</Form.Item>
								<Form.Item shouldUpdate>
									{() => (
										<Button
										onClick={()=>ProgramFormSubmit()}
											type='primary'
											htmlType='submit'
											// disabled={
											// //   !form.isFieldsTouched(true) ||
											// //   !!form.getFieldsError().filter(({ errors }) => errors.length).length
											// }
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
							<ul>
								Lorem Ipsum is simply dummy text of the printing and typesetting
							</ul>
							<ul>
								Lorem Ipsum is simply dummy text of the printing and typesetting
							</ul>
							<ul>
								Lorem Ipsum is simply dummy text of the printing and typesetting
							</ul>
							<ul>
								Lorem Ipsum is simply dummy text of the printing and typesetting
							</ul>
							<ul>
								Lorem Ipsum is simply dummy text of the printing and typesetting
							</ul>
						</li>
					</Col>
				</Row>
			</div>
			<div className='mb-5'>
				<h2 className='admission_heading'>Mentor</h2>
				<Row gutter={[20, 30]}>
					<Col xs={24} sm={24} lg={6}>
						<Card
							hoverable
							cover={
								<img
									className='image'
									alt='example'
									src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
								/>
							}
						>
							<Meta title='Europe Street beat' description='www.instagram.com' />
						</Card>
					</Col>
					<Col xs={24} sm={24} lg={6}>
						<Card
							hoverable
							cover={
								<img
									className='image'
									alt='example'
									src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
								/>
							}
						>
							<Meta title='Europe Street beat' description='www.instagram.com' />
						</Card>
					</Col>
					<Col xs={24} sm={24} lg={6}>
						<Card
							hoverable
							cover={
								<img
									className='image'
									alt='example'
									src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
								/>
							}
						>
							<Meta title='Europe Street beat' description='www.instagram.com' />
						</Card>
					</Col>
					<Col xs={24} sm={24} lg={6}>
						<Card
							hoverable
							cover={
								<img
									className='image'
									alt='example'
									src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
								/>
							}
						>
							<Meta title='Europe Street beat' description='www.instagram.com' />
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Program;

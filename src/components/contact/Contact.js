import { Button, Col, Divider, Form, Input, Row,Card } from 'antd';
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import validator from 'validator'
import { ToastContainer, toast } from 'react-toastify';
function Contact() {
	const [name, setName] = useState();
	const [company, setCompany] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [comment, setComment] = useState();
	const [chooseProgram, setChooseProgram] = useState();
	const [currentFruit,setcurrentFruit]=useState();
	const [HighestQualification,setHighestQualification]=useState();
	// const [experience,setExperience]=useState();
	const contactUs = async () => {
		if(!name && !email && !phone && !currentFruit && !HighestQualification){
			toast.error("All fileds are required")
		}else{
			if (validator.isEmail(email)) {
		let body = {
			// name: name,
			// company_name: company,
			// email: email,
			// phone_number: phone,
			// program: chooseProgram,
			// comments: comment,
			name: name,
     
			email:email,
			phone_number:phone,
			qualification: HighestQualification,
			experience: currentFruit,
			comments : comment
		};
		let response = await axios.post('http://3.111.207.167:8000/api/contact_us', body);
		console.log('contact us', response.data.Success);
		if (response.data.Success === 1) {
			toast.success('Form Successfully submitted');
		} else {
			toast.warning('Form not  submitted');
		}
	}else{
		toast.error("Email is not Valid")
	}
}
	};
	const changeFruit = (newFruit) => {
		console.log("selected value is..",newFruit)
		setcurrentFruit(newFruit)
	  }
	  const changeHighestQulaification=(newFruit)=>{
		console.log("selected value is..",newFruit)
		setHighestQualification(newFruit)
	  }

	return (
		<>
			<ToastContainer />
			<Helmet>
				<meta charSet='utf-8' />
				<title>Home</title>
				<link rel='canonical' href='http://mysite.com/example' />
			</Helmet>
			<div className='container mt-4'>
				<h1 className='Banner_Heading'>EXCELSIOR</h1>
				<p className='mb-4 '>Excelsior is ideal for professionals who wants to</p>
			</div>
			<div className='mb-3'>
				<div id='contact_section' className='container pl-4'>
					<h2 className='container text-center text-white  mb-3'>
						<b>Contact US</b>
					</h2>
				</div>
				<div className='container'>
					<h2 className='text-center text-black pt-3 pb-3 mt-4  mb-4'>
						{' '}
						<b>Let’s Start a Conversation</b>
					</h2>
					<Row gutter={[20, 30]} className='mb-3'>
						<Col xs={24} sm={24} md={12} lg={12}>
							<h5 className='mb-5'>
								<strong>Ask how we can help you:</strong>
							</h5>
							<div className='mb-4'>
								<Divider
									className='mb-2'
									orientation='left'
									orientationMargin={0}
								>
									Are you getting enough practical learning?
								</Divider>
								<p className='text-muted pl-3'>Ask us about the projects</p>
							</div>
							<div className='mb-4'>
								<Divider
									className='mb-2'
									orientation='left'
									orientationMargin={0}
								>
									Are you stuck in your career?
								</Divider>
								<p className='text-muted pl-3'>
									Ask us how our course can help you with career growth
								</p>
							</div>
							<div className='mb-4'>
								<Divider
									className='mb-2'
									orientation='left'
									orientationMargin={0}
								>
									Are you able to learn in big batches?
								</Divider>
								<p className='text-muted pl-3'>
									Ask us how we give you personalized learning experience
								</p>
							</div>
							<div className='mt-5'>
								<div className='mb-3'>
									<h3 className='mb-5 '>
										<b> Points of Contact</b>
									</h3>
									<div className='mb-4'>
										<div className='d-flex mb-3'>
											<h6>
												{' '}
												D612, 7th Cross Road, 3rd Block, Koramangala,
												Bengaluru 560034{' '}
											</h6>
										</div>
										{/* <div className='mb-3'>
											<p className='text-muted'>
												11350 McCormick Rd, EP III, Suite 200, Hunt Valley, MD
												21031
											</p>
										</div> */}
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Know about the course</h6>
										</div>
										<div className='mb-3'>
											<a href='#'>contact@getexcelsior.com</a>
										</div>
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Speak to a Career Counselor</h6>
										</div>
										<div className='mb-3'>
											<a href='#'>info@getexcelsior.com</a>
										</div>
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Speak to a Data Scientist</h6>
										</div>
										<div className='mb-3'>
											<a href='#'>dscounselling@getexcelsior.com</a>
										</div>
									</div>
								</div>
								<div className='mb-4'>
										<div className='mb-3'>
											<h6>OUR CONTACT NUMBER</h6>
										</div>
										<div className='mb-3'>
											<a href='#'><ul><li>tel: +91 9289460444</li>
															<li>tel: +91 9289460555</li>
															</ul></a>
										</div>
									</div>
									<div className='mb-4'>
										<div className='mb-3'>
											<h6>Whatsapp Us</h6>
										</div>
										<div className='mb-3'>
											<a href='https://wa.me/+919289460444' target="_blank" rel="noreferrer">+91 9289460444 </a>
															
										</div>
									</div>
							</div>

						</Col>
						<Col xs={24} sm={24} md={12} lg={12}>
						<Card>
								<Form name='horizontal_login' layout='outline'>
									<Form.Item
										name='name'
										rules={[
											{ required: true, message: 'Please input your Name!' },
										]}
										className='mb-3'
									>
										<Input
											value={name}
											placeholder='Name'
											onChange={(text) => setName(text.target.value)}
										/>
									</Form.Item>
									<Form.Item
										name='email'
										rules={[
											{ required: true, message: 'Please input your email!' },
										]}
										className='mb-3'
									>
										<Input
											value={email}
											type='text'
											placeholder='Email Address '
											onChange={(text) => setEmail(text.target.value)}
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
										className='mb-3'
									>
										<Input
										min={9}
											value={phone}
											type='number'
											placeholder='Phone Number '
											onChange={(text) => setPhone(text.target.value)}
										/>
									</Form.Item>

									<Form.Item>
										<select
											defaultValue='experience'
											name='experience'
											id='experience'
											value={currentFruit}
											onChange={(event) => changeFruit(event.target.value)}
										>
											<option value='experience'>Experience</option>
											<option value='fresher' >Fresher</option>
											<option value='0-2yrs'>0-2 Years</option>
											<option value='2-5yrs'>2-5 Years</option>
											<option value='5-8yrs'>5-8 Years</option>
											<option value='8+yrs'>8+ Years</option>
										</select>
									</Form.Item>
									<Form.Item>
										<select
											defaultValue='highest-qualification'
											name='highest-qualification'
											id='highest-qualification'
											value={HighestQualification}
											onChange={(event) => changeHighestQulaification(event.target.value)}
										>
											<option value='highest-qualification'>
												Highest Qualification
											</option>
											<option value='UG'>Undergraduate</option>
											<option value='Graduate'>Graduate</option>
											<option value='PG'>Post Graduate</option>
											<option value='PhD'>Ph.D</option>
										</select>
									</Form.Item>
									<Form.Item
										name='Comment'
										rules={[
											{ required: true, message: 'Please input your comment!' },
										]}
										className='mb-3'
									>
										<Input
											value={comment}
											placeholder='Comment'
											onChange={(text) => setComment(text.target.value)}
										/>
									</Form.Item>
									<Form.Item shouldUpdate>
										{() => (
											<Button
												type='primary'
												htmlType='submit'
												onClick={() => contactUs()}
											>
												Submit
											</Button>
										)}
									</Form.Item>
								</Form>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Contact;

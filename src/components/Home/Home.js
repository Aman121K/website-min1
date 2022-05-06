import React, { useState } from 'react';
import {
	Row,
	Col,
	Button,
	Avatar,
	Rate,
	Form,
	Input,
	Steps,
	Card,
	Select,
	Modal,
	Radio,
	Menu, Dropdown,  message, Space, Tooltip 
} from 'antd';


import { RightOutlined,DownOutlined, UserOutlined , BorderOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import images from '../../assets/images';
import Admission from '../programs/Admission';
import Helmet from 'react-helmet';
import { ScrollElement } from 'react-scroll/modules';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import i1 from '../../assets/images/Home page Program Icons/DS for IT.png';
import Program_DB_Master from '../../assets/static/Program_DB_Master';

const { Option } = Select;
const Home = () => {
	const navigate = useNavigate();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [subscribeEmail, setSubscribeEmail] = useState();
	const [subscribeName, setSubscribeName] = useState();
	const [phone, setPhone] = useState();
	const [experience, setExperience] = useState();
	const [HighestQualification, setHighestQualification] = useState();
	const [registerFormCurrentStep, setRegisterFormCurrentStep] = useState(0);
	const [apData, setApData] = useState([
		{
			image: images.mobileApp,
			title: ' Application Launch',
			text: 'Chocolate cake marshmallow bear claw sweet. Apple pie macaroon sesame snaps candy jelly pudding.',
		},
		{
			image: images.mobileApp,
			title: 'Performance Tweaks',
			text: 'Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.',
		},
		{
			image: images.mobileApp,
			title: 'Advanced Configuration',
			text: 'Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate. Lollipop halvah powder.',
		},
		{
			image: images.mobileApp,
			title: 'Server Analytics',
			text: 'Cake tart apple pie bear bonbon sugar plum muffin sesame snaps sweet roll gingerbread bonbon sugar.',
		},
	]);
	const menu = (
		<Menu
		  onClick={handleMenuClick}
		  items={[
			{
			  label: '1st menu item',
			  key: '1',
			  icon: <UserOutlined />,
			},
			{
			  label: '2nd menu item',
			  key: '2',
			  icon: <UserOutlined />,
			},
			{
			  label: '3rd menu item',
			  key: '3',
			  icon: <UserOutlined />,
			},
		  ]}
		/>
	  );
	const [statsData, setStatsData] = useState([
		{
			title: 'Total Placed',
			text: '6600+ students',
		},
		{
			title: 'Average Salary Hike',
			text: '53%',
		},
		{
			title: 'Average Salary',
			text: '10.7 LPA',
		},
		{
			title: 'Placement %',
			text: '96.80%',
		},
		{
			title: 'Highest Salary',
			text: '76.8 LPA',
		},
		{
			title: 'Number of Clients',
			text: '160+',
		},
	]);
	function handleButtonClick(e) {
		message.info('Click on left button.');
		console.log('click left button', e);
	  }
	  
	  function handleMenuClick(e) {
		message.info('Click on menu item.');
		console.log('click', e);
	  }
	const [latestNewsData, setLatestNewsData] = useState([
		{
			title: 'New Initiative: Free Counselling Session with Real Data Scientist before enrolling',
		},
		{
			title: 'Earn Scholarship upto 50%',
		},
		{
			title: 'New Data Engineer Course',
		},
		{
			title: 'Average Placement increased from 10.1 to 10.7 LPA in this batch',
		},
		{
			title: 'Tesla Added to our client list for automobile industry enthusiasts',
		},
		{
			title: '98.3% placement record in the last batch',
		},
	]);
	const [recentTestimonialsData, setRecentTestimonialsData] = useState([
		{
			image: images.computer,
			title: 'Panayappan',
			text: 'Chocolate bar marzipan marzipan carro',
			rating: 4,
		},
		{
			image: images.computer,
			title: 'Sakthi',
			text: 'Chocolate bar marzipan marzipan carro',
			rating: 4,
		},
		{
			image: images.computer,
			title: 'Jicku',
			text: 'Chocolate bar marzipan marzipan carro',
			rating: 5,
		},
	]);
	const [isRecentTestimonialsModalVisible, setIsRecentTestimonialsModalVisible] =
		useState(false);
	const next = () => {
		setRegisterFormCurrentStep((prev) => prev + 1);
	};

	const prev = () => {
		setRegisterFormCurrentStep((prev) => prev - 1);
	};

	const RegisterForm = () => {
		switch (registerFormCurrentStep) {
			case 0:
				return (
					<div>
						<h4>What was your major interest</h4>
						<Select
							style={{ width: '100%', marginTop: 20 }}
							defaultValue='lucy'
							onChange={() => { }}
						>
							<Option value='jack'>Jack</Option>
							<Option value='lucy'>Lucy</Option>
						</Select>
					</div>
				);
			case 1:
				return (
					<div>
						<h4>What was your major interest</h4>
						<Select
							style={{ width: '100%', marginTop: 20 }}
							defaultValue='lucy'
							onChange={() => { }}
						>
							<Option value='jack'>Jack</Option>
							<Option value='lucy'>Lucy</Option>
						</Select>
					</div>
				);
			case 2:
				return (
					<div>
						<h4>What was your major interest</h4>
						<Select
							style={{ width: '100%', marginTop: 20 }}
							defaultValue='lucy'
							onChange={() => { }}
						>
							<Option value='jack'>Jack</Option>
							<Option value='lucy'>Lucy</Option>
						</Select>
					</div>
				);
			case 3:
				return (
					<div>
						<h4>What was your major interest</h4>
						<Select
							style={{ width: '100%', marginTop: 20 }}
							defaultValue='lucy'
							onChange={() => { }}
						>
							<Option value='jack'>Jack</Option>
							<Option value='lucy'>Lucy</Option>
						</Select>
					</div>
				);

			default:
				return <div></div>;
		}
	};

	const RecentTestimonialsModal = () => {
		return (
			<Modal
				title='Recent Testimonials'
				visible={isRecentTestimonialsModalVisible}
				onCancel={() => setIsRecentTestimonialsModalVisible(false)}
				width={'60%'}
				footer={null}
			>
				<Carousel showStatus={false} showIndicators={false}>
					{[1, 2, 3].map((item, index) => (
						<Row
							key={index}
							gutter={[20, 30]}
							style={{
								height: 300,
								padding: 10,
								paddingBottom: 20,
							}}
						>
							{[1, 2, 3].map((item, index) => (
								<Col xs={24} sm={24} md={12} lg={8} key={index}>
									<Card className='box-shadow'>
										<Avatar />
										<h4 style={{ margin: '10px 0' }}>
											Hemanth Reddy (Data Scientist-Airtel)
										</h4>
										<p>
											I am writing this review to thank Excelsior's Data
											Science for making Data Science online course. I have
											recently completed this course and it was the best
											decision I have made in my life. The course is well
											designed with details, examples, exercises, lectures and
											assignments. The mentors are really helpful, and they
											helped me to clear all my doubts regarding the program.
											They always replied to my emails on time, and I also got
											a job through Brilliant Data Science. I am really
											thankful to them for helping me build my profile and gain
											the head start I needed.
										</p>
									</Card>
								</Col>
							))}
						</Row>
					))}
				</Carousel>
			</Modal>
		);
	};
	const homeSubmitApi = async () => {
		if (!name && !email && !phone && !experience && !HighestQualification) {
			toast.error("Some Parameter is missing..")
		} else {


			let body = {
				name: name,
				email: email,
				phone_number: phone,
				experience: experience,
				qualification: HighestQualification,
			};
			console.log('home body is..', body);
			let response = await axios.post('http://3.111.207.167:8000/api/help', body);
			if (response.data.Success === 1) {
				setName('');
				setEmail('');
				setPhone('');
				setExperience('');
				setHighestQualification('');
				toast.success('Your Form is succefully submit');
			} else {
				toast.error('Your Form is not succefully submit');
			}
			console.log('home api is...///...', response.data);
		};
	}
	const subScribeApi = async () => {
		if(!subscribeEmail){
			toast.error("Some parameter is missing")
		}else{
		let body = {
			email: subscribeEmail,
		};
		console.log('body..', body);
		let response = await axios.post('http://3.111.207.167:8000/api/Subscribe', body);
		console.log('res', response.data);
		console.log(response.data.Success);
		if (response.data.Success === 1) {
			toast('Your Email is successfully subscribe');
			setSubscribeEmail('');
		} else {
			toast.error('Your Email not subscribe');
		}
	}
	};
	return (
		<div className='mb-5'>
			<ToastContainer />
			<Helmet>
				<meta charSet='utf-8' />
				<title>Home</title>
				<link rel='canonical' href='http://mysite.com/example' />
			</Helmet>
			<div className='container mt-4'>
				<h1 className='Banner_Heading'>EXCELSIOR</h1>
				<p className='mb-4 '>We don't just train, We make careers</p>
			</div>
			<div className='home__banner-left-content d-flex flex-column justify-content-center mb-5 container mx-auto'>
				<div className='container pt-4'>
					<h2 className='text-white admission_heading'>Get the Edge</h2>
					<div>
						<Row>
							<Col lg={12}>
								<p className='mb-4 text-white'>
									Excelsior is ideal for professionals who wants to master their
									skill set and grow their career. With well-structured programs,
									industry experts as mentors, tailored for every student with a
									proven learning methodology.
								</p>
							</Col>
						</Row>
						<Button type='primary' icon={<RightOutlined />}>
							Getting Started
						</Button>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='mb-5'>
					<h2 className='admission_heading'>Stats</h2>
					<Row gutter={[20, 30]} className='a'>
						{statsData?.map((item, index) => (
							<Col xs={24} sm={24} md={6} lg={4} key={index}>
								<div className='home__stats-item text-center h-100'>
									<Avatar size={40} />
									<p style={{ fontSize: '12px' }}>{item.title}</p>
									<h3 style={{ color: '#f35d5d' }}>{item.text}</h3>
								</div>
							</Col>
						))}
					</Row>
				</div>
				<div className='mb-5'>
					<Row gutter={[20, 30]}>
						<Col xs={24} sm={24} md={8} lg={8}>
							<h2 className='admission_heading'>Help</h2>
							<Card
							// title="Know More About the Scholarships and Offers"
							>
								<Form
									//   form={form}
									name='horizontal_login'
									layout='outline'
								//   onFinish={onFinish}
								>
									<Form.Item
										name='name'
										
										rules={[
											{ required: true, message: 'Please input your Name!' },
										]}
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
									>
										<Input
										value={phone}
											type='number'
											placeholder='Phone Number '
											onChange={(text) => setPhone(text.target.value)}
										/>
									</Form.Item>
									<Form.Item
										name='experience'
										rules={[
											{
												required: true,
												message: 'Total Experience',
											},
										]}
									>
										<Input
										value={experience}
											type='number'
											placeholder='Experience'
											onChange={(text) => setExperience(text.target.value)}
										/>
									</Form.Item>
									<Space wrap>
    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      Dropdown
    </Dropdown.Button>
  </Space>
									{/* <Form.Item>
                    <Radio.Group
                    // onChange={onChange}
                    // value={value }
                    >
                      <Radio value={"Myself"}>Myself</Radio>
                      <Radio value={"My Company"}>My Company</Radio>
                    </Radio.Group>
                  </Form.Item> */}
									<Form.Item shouldUpdate>
										{() => (
											<Button
												type='primary'
												htmlType='submit'
												onClick={() => homeSubmitApi()}
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
							</Card>
						</Col>
						<Col xs={24} sm={24} md={16} lg={16} className='d-flex flex-column'>
							<h2 className='admission_heading'>Programs</h2>
							<Row gutter={[20, 30]} style={{ flex: '1 1 100%' }}>
								{Program_DB_Master.map(({ nameOfProgram }, index) => (
									<Col xs={24} sm={24} md={12} key={index} className='d-flex'>
										<div
											className='home__videos-item'
											style={{ flex: '1 1 100%' }}
										>
											<div className='home__videos-item-left'>
												{/* <img src={i1} alt="abc" /> */}
											</div>
											<div className='home__videos-item-right p-2'>
												<h3>{nameOfProgram}</h3>
											</div>
										</div>
									</Col>
								))}
							</Row>
						</Col>
					</Row>
				</div>
				{/* <Admission /> */}

				<div className='mb-5'>
					<Row gutter={[20, 30]}>
						<Col xs={24} sm={24} md={24} lg={8} className='d-flex flex-column'>
							<h2 className='admission_heading'>Latest News</h2>
							<Card className='home__app-info_latest-news'>
								<div style={{ display: 'grid', gap: '1rem' }}>
									{latestNewsData?.map((item, index) => (
										<Row gutter={[20, 30]} key={index}>
											<Col sm={4} lg={4}>
												<BorderOutlined style={{ color: '#F35D5D' }} />
											</Col>
											<Col sm={16} lg={16}>
												<p style={{ lineHeight: '1.3' }}>{item.title}</p>
											</Col>
											<Col sm={4} lg={4}>
												<small> {item.time}</small>
											</Col>
										</Row>
									))}
								</div>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={24} lg={8} className='d-flex flex-column'>
							<h2 className='admission_heading'>Recent Testimonials</h2>
							<Card className='test_admission'>
								{recentTestimonialsData?.map((item, index) => (
									<Row className='mb-3' key={index} gutter={[20, 30]}>
										<Col xs={10} sm={10} md={10} lg={10}>
											<img src={item.image} alt={item.title} />
										</Col>
										<Col xs={14} sm={14} md={14} lg={14}>
											<h6>
												{' '}
												<b>{item.title} </b>
											</h6>
											<Rate disabled defaultValue={item.rating} />
										</Col>
									</Row>
								))}
								<Row align='middle' justify='center'>
									<Button
										onClick={() => setIsRecentTestimonialsModalVisible(true)}
										type='primary'
										ghost
									>
										See More
									</Button>
								</Row>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={24} lg={8} className='d-flex flex-column'>
							<h2 className='admission_heading'>Recent Blogs</h2>
							<Card className='test_admission'>
								{recentTestimonialsData?.map((item, index) => (
									<Row className='mb-3' key={index} gutter={[20, 30]}>
										<Col xs={10} sm={10} md={10} lg={10}>
											<img src={item.image} alt={item.title} />
										</Col>
										<Col xs={14} sm={14} md={14} lg={14}>
											<h6>
												{' '}
												<b>{item.title} </b>
											</h6>
											<Rate disabled defaultValue={item.rating} />
										</Col>
									</Row>
								))}
								<Row align='middle' justify='center'>
									<Button
										onClick={() => setIsRecentTestimonialsModalVisible(true)}
										type='primary'
										ghost
									>
										See More
									</Button>
								</Row>
							</Card>
						</Col>
					</Row>
				</div>
				<h2 className='admission_heading'>Mail List</h2>
				<Card>
					<h5 className=' mb-3 text-center' style={{ color: '#f35d5d' }}>
						Subscribe to our news letter
					</h5>
					<p className='mb-3 text-center'>
						Stay updated with the latest news from the industry.
					</p>
					            <Form layout='vertical'>
						<div className='d-flex'>
							<Form.Item
								className='mr-4 w-100'
								rules={[
									{
										required: true,
										message: 'Name is Required!',
									},
								]}
							>
								<Input
									type='text'
									value={subscribeName}
									placeholder='Name'
									className='p-2'
									onChange={(e) => setSubscribeName(e.target.value)}
								/>
							</Form.Item>
							<Form.Item
								rules={[
									{
										required: true,
										message: 'Email is Required!',
									},
								]}
								className='w-100'
							>
								<Input
									type='email'
									value={subscribeEmail}
									placeholder='Email Address'
									className='p-2'
									onChange={(text) => setSubscribeEmail(text.target.value)}
								/>
							</Form.Item>
						</div>
						<Form.Item className='text-center'>
							<Button
								onClick={() => subScribeApi()}
								type='primary'
								htmlType='submit'
								icon={<RightOutlined />}
							>
								Subscribe
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</div>

			<RecentTestimonialsModal />
		</div>
	);
};

export default Home;

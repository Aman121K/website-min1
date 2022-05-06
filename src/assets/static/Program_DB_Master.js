import DSforIT from '../images/DSforIT.png';
import DSforFinance from '../images/DS for Finance.png';
import DeepLearning from '../images/Deep Learning.png';
import ML from '../images/Machine Learning with Python.png';
import DataAnalytics from '../images/Data Analytics.png';
import PythonBootcamp from '../images/Python Bootcamp.png';

const Program_DB_Master = [
	{
		pathname: '/programs/specialization-in-data-science-for-it',
		nameOfProgram: 'Specialization in Data Science for IT',
		durationInWeeks: '52',
		rating: 4.8,
		completedBy: 907,
		demoVideoURL: 'https://youtu.be/Y_wXF1Pe4AA',
		banner: DSforIT,
		description:
			'Prepare Yourself For Product-based IT Companies. A program that combines the two fields of Data Science and Product Management. The knowledge provided in this course will help you take your career to next level.',
		highlight: {
			firstRow: [
				'200+ hours of live sessions',
				'100+ Projects & Exercises',
				'Personalized Project feedback from Expert Professionals',
				'Flexible learning Schedule',
			],
			secondRow: [
				'1:1 with Industry Mentors',
				'Unlimited Interview opportunities',
				'24*7 Support',
				'No Cost EMI Option',
			],
		},
		overview: {
			description:
				'A complete program that caters to learning complete Data Science along with the complete domain knowledge of IT industry including product management and complete product life cycle. This is an end-to-end IT training program that gives you all the knowledge required to start and grow your career in Data Science. It covers everything from basic statistics and modelling techniques up to advanced machine learning, deep learning, artificial intelligence, NLP (Natural Language Processing), computer vision and other areas of AI.',
			dropdownQuestion: [
				{
					question: 'What does a Data Scientist do in an IT product companies?',
					answer: (
						<>
							There are lots of exciting career prospects for Data Science in IT
							product companies. As a data scientist, you're often expected to
							effectively analyze problems, predict behavior, and develop
							solutions. Since IT products are often used for a variety of
							purposes, there's always a need for innovators in the field. While
							you'll be able to use your Data Science skills to benefit the
							company, you'll also have the opportunity to contribute to solving a
							lot of problems in the world. Data scientists in IT companies perform
							a range of different tasks that involve collecting, analyzing and
							interpreting large amounts of data.
							<br />
							These tasks include:
							<ul className='px-4'>
								<li>Self-Service Data Analysis</li>
								<li>Data Visualization</li>
								<li>Data integration</li>
								<li>Reporting</li>
								<li>Modeling</li>
								<li>Predictive Analytics</li>
								<li>Big data management</li>
								<li>Data Quality</li>
								<li>Business Intelligence</li>
								<li>Data warehousing</li>
								<li>Data Integration</li>
								<li>Data Mining</li>
							</ul>
						</>
					),
				},
				{
					question: 'Who can enroll for this course and what are the prerequisites?',
					answer:
						'This course is ideal for anyone looking to make a career in the IT industry. We at Excelsior have designed the course as beginner friendly and also for the professionals who want to narrow the data Science into the IT Sector. Every class you take with Excelsior will be taught by an instructor who has been a great asset in this field. Our experienced instructors have decades of experience helping clients around the world accelerate their business and careers, and will share first-hand knowledge to ensure your success.',
				},
				{
					question: 'What will you learn from this course?',
					answer:(
						<>
						This program will give you practical data analytics and data science knowledge needed to succeed in the IT sector. Learn the concepts of data science and IT. Gain transferable skills in user research, user design, prototyping, building artefacts, product analytics, digital transformation, fundamental procedures and structures. You will also learn Reconciliation And Introduction To Isda, Product Marketing And Gtm Strategy, Product Planning And Development, Tech 101 For Pms, Data Science For Product Management and Growth Product Management. This program is designed by Excelsior covers the latest analytics, Visualization and machine learning concepts. These include topics like data science essentials, big data ecosystem, where data has its origins, the role of databases in storing and retrieving data at scale, statistical analysis basics, and designing experiments. Upon completion of this program you will be prepared to take the roles of Business Analyst and Data Scientist.
						<br />
						Tools Covered
						<ul className='px-4'>
							<li>Python Programming</li>
							<li>Tableau</li>
							<li>Keras</li>
							<li>Numpy</li>
							<li>Pandas</li>
							<li>Spark</li>
							<li>Hadoop</li>
							<li>Microsoft Power BI</li>
							<li>Alteryx</li>
							<li>Matplotlib</li>
							<li>NLP</li>
							<li>Computer Vision</li>
							<li>SVM</li>
							<li>Neural Networks</li>
							<li>Advance Excel</li>
							</ul>
							</>
							),
					},
				{
					question: 'What’s the scope after this course?',
					answer:
						'The scope of Data Science professionals in the IT product based companies in India in 2022 will only increase. This is because top companies like Google, Amazon, Microsoft are all hiring Data Science professionals. India has exploded on the global data science landscape. Data Science is a new but vibrant field in the market. The number of people employed in this field cannot even be estimated. The data science market is growing rapidly as the more data is used in business and other fields, the more data scientists will be needed. The average salary after this course ranges from ₹14,50,000 to ₹16,00,000 for freshers',
				},
			],
		},
		curriculum: {
			description: 'Learn the most Industry oriented curriculum. Our curriculum is updated every 3 months',
			curriculumData: [
				{
					title: 'Python',
					data: [
						'Introduction To Python',
						'Python Environment',
						'Executing Python',
						'Python Basic Syntax',
						'Python Variable Types',
						'Python Basic Operators',
						'Python Design Making',
						'Python Loops',
						'Python Numbers',
						'Python Strings',
						'Python Lists',
						'Python Tuples',
						'Python Dictionary',
						'Python Function',
						'Python Modules',
						'Python Files I/O',
						'Python Exception',
						'Python Classes & Objects',
						'Collections',
						'Debugging & Testing',
						'Regular Expression',
						'Essential Packages',
						'Testing',
					],
				},
				{
					title: 'Statistical and Mathematical Fundamentals',
					data: [
						'Statistics Concepts',
						'Linear Algebra',
						'Matrix Operations',
						'Calculus',
						'Probability',
						'Sampling Techniques',
						'Understanding Distributions',
					],
				},
				{
					title: 'Data Wrangling',
					data: [
						'Black Box Introduction To Machine Learning',
						'Microsoft Excel',
						'Sql',
						'Tableau',
						'Essential Numpy',
						'Pandas For Machine Learning',
						'Understanding Visualizations',
						'Power BI',
						'Alteryx',
					],
				},
				{
					title: 'Machine Learning',
					data: [
						'Linear Models For Classification And Regression',
						'Pre-Proposing Of Machine Learning',
						'Decision Trees',
						'Naives Bayes',
						'Composite Estimators Using Pipelines',
						'Model Selection & Evaluation',
						'Feature Selection & Dimensionality Reduction',
						'Nearest Neighbours',
						'Clustering Techniques',
						'Anomaly Detection',
						'Support Vector Machines',
						'Dealing With Imbalanced Classes',
						'Ensemble Methods',
						'Recommendation Engine',
						'Time Series Modelling',
						'Packaging & Deployment',
					],
				},
				{
					title: 'Big Data',
					data: [
						'Introduction To Big Data',
						'Internal Details Of Spark',
						'Foundation Of Spark Using Rdd',
						'Data Wrangling Using Dataframes',
						'Packaging And Deployment Of Spark Applications',
					],
				},
				{
					title: 'Deep Learning and Artificial Intelligence',
					data: [
						'Neural Network Basics',
						'Computer Vision',
						'Statistical Natural Language Processing',
						'Sequential Natural Language Processing',
						'Advanced Computer Vision',
						'Generative Adversarial Networks',
						'Reinforcement Learning',
					],
				},
				{
					title: 'Specialization in IT Product Lifecycle',
					data: [
						'Market Research For A 0-1 Product For A B2C Product',
						'User Research For A 0-1 Product',
						'Create Product Artefacts For 0-1 Product',
						'User Design For A 1-N Product',
						'Prototyping',
						'Mvp + Usability Testing',
						'Product Analytics',
						'Growth, Engagement & Monetisation',
						'Product Marketing And Gtm Strategy',
						'Product Planning And Development',
						'Tech 101 For Pms',
						'Data Science For Product Management',
						'Growth Product Management',
						'Data Science For Product Management',
						'Digital Transformation',
					],
				},
			],
		},
		admissionProcedure: {
			description: 'Your steps to success',
			admissionStepForm: [
				{
					title: 'Explore',
					content:
						'Speak directly with a data scientist mentor and a career counselor to find the right path.',
				},
				{
					title: 'Enroll',
					content:
						"Enroll now to start your Data Science journey with the best online data science course, and take the first step towards a successful career. It's the number one skill companies need.",
				},
				{
					title: 'Enhance',
					content:
						'Learning advanced skills in Data Science, Machine Learning and Artificial Intelligence can make you 1000x more value and a more competitive candidate for more opportunities. Learn from scratch in 1 to 1 mentor sessions and do unlimited live projects to practice and enhance your profile.',
				},
				{
					title: 'Excel',
					content:
						'Now, it’s time to stand out in front of the best companies across different domains! Get placed in your dream job by learning how to perform great in interviews',
				},
			],
		},
		fee: [
			{
				typeOfPayment: 'Upfront Payment',
				question: [
					{
						name: 'Fee of the program',
						answer: 'The fee for this program is ₹129999 inclusive of taxes',
					},
					{
						name: 'Scholarship Options/Discounts',
						answer:
							'There are scholarship/discount options available on our programs at different times.',
					},
				],
			},
			{
				typeOfPayment: 'Income Sharing Agreement',
				question: [
					{
						name: 'What does ISA mean?',
						answer:
							'It means that you will not be paying the complete upfront fee and will share some part of your income after placement.',
					},
					{
						name: 'What are the terms of Excelsior’s ISA plan?',
						answer:
							'You will be paying 30% of the fees as registration and then 15% of your monthly fixed CTC for 12 months',
					},
				],
			},
			{
				typeOfPayment: 'EMI and Finanical AD',
				question: [
					{
						name: 'EMI Options',
						answer:
							'This is a 0% interest option. You can also pay in 6 EMI(s) of  ₹21666.50. The amount may vary for learners eligible for scholarships',
					},
					{
						name: 'Can you get a finanical AD',
						answer:
							'Yes, we have tie ups with various NBFC which provide education loan subject to you matching their eligibility criteria.',
					},
				],
			},
		],
		learningExperience: [
			{
				title: 'Profile Building',
				body: (
					<>
						Excelsior’s industry experts are the ultimate resource for anyone
						looking to build their profile
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Resume Building</li>
							<li style={{width: 'max-content'}}>LinkedIn Profile Building</li>
							<li style={{width: 'max-content'}}>Github Building</li>
						</ul>
					</>
				),
			},
			{
				title: 'Expert Sessions',
				body: (
					<>
						Excelsior offer expert advice on softskills and HR topics
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Counselling Sessions with Real Data Science experts</li>
							<li style={{width: 'max-content'}}>Prepare for HR Interviews</li>
							<li style={{width: 'max-content'}}>Learn Interviewers Psychology</li>
							<li style={{width: 'max-content'}}>Develop Soft-Skills</li>
						</ul>
					</>
				),
			},
			{
				title: 'Mock Interviews',
				body: (
					<>
						Get an upper hand in a data science job interview? Prepare for high pressure interview scenarios
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Live Interview Simulations</li>
							<li style={{width: 'max-content'}}>Expert Feedbacks</li>
							<li style={{width: 'max-content'}}>Prepare for real high pressure scenarios</li>
						</ul>
					</>
				),
			},
			{
				title: 'Project Guidance',
				body: (
					<>
						Work on unlimited live projects with the help of industry experts
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Work on Live Projects from your dream company</li>
							<li style={{width: 'max-content'}}>Practice the core skills by applying on real Life scenarios</li>
							<li style={{width: 'max-content'}}>Get feedback from experts to improve your knowledge and build your portfolio</li>
						</ul>
					</>
				),
			},
		],
		projects: [
			{
				firstRow: {
					title: 'Fake news detection',
					description:
						'Fake news can be dangerous. Your challenge is to build a Fake News classifier by applying ML algorithms such as Passive Aggressive Classifier and determine the accuracy of our model. You will be using various Python packages such as pandas, NumPy, and scikit-learn to determine the legitimacy of the information. With the help of this, you will be able to predict on the fly whether the information you acquired is authentic or not.',
				},
				secondRow: {
					title: 'Influence of global warming on food chain supply',
					description:
						'Global warming is influencing the climate pattern and leads to the change in food production. Unusual weather conditions and adaptation of technologies used in agriculture have a significant effect on the pattern of food production globally. In this project you will analyze the factors that are causing these changes, study the data visualization techniques to explain the patterns across different geographical locations, and predict the future trends.',
				},
			},
			{
				firstRow: {
					title: 'Segmentation of customer groups',
					description:
						'Customer segmentation helps companies to market the products in each segment more fitting to each individual customer. Build your clustering model using k-means clustering algorithms learned in machine learning. In this project, you will cluster the customers based on the features and their buying behaviour. Use the Elbow method, Silhouette Analysis method and DBSCAN. Once you have created various segments among customers, this model could be used by businesses to advertise their products to each segment in a way which will grab their attention.',
				},
				secondRow: {
					title: 'Diabetic Retinopathy',
					description:
						'Early treatment of pathological changes in the blood vessels of the eye can help prevent eye disease from progressing to blindness. In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening. We will be using data that has been pre-processed to extract In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening. We will be using data that has been pre-processed to extract the most important features from retina images.',
				},
			},
		],
		mentor: [
			{
				name: 'Shobhit Gupta',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'So, here is the question. If there was a person who worked with Microsoft, Facebook, Amazon, Uber and Yahoo just to name a few and then he started working in Fampay as an Engineering Manager. What kind of guidance would you expect from such a person? Would you be interested in asking him how to crack the interviews for these companies? Would this be an opportunity that would be difficult to miss on?? We believe it is definitely worth your effort.If you are someone aspiring to work in any of the large tech companies, or aspire to work in the startup world, his guidance would be invaluable.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Rohini Jain',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'In a world where its hard to hold on to a job due to high pressure and fast pace. Rohini has been excelling at one of the biggest companies of the world, CISCO for over 10 years.Rohini Jain is a technology enthusiast, an experienced Software Architect and a mother of a school-going kid and a baby daughter.  She has a wealth of experience to share with the students : ranging from her college days at MNNIT Allahabad, to her 4 years in industry at ST Ericsson, her MS degree from University of Texas and almost 11 years of work experience at world’s largest networking company Cisco.  Rohini leads a team of software developers and software test engineers who are responsible for implementing automation solutions to make the process of testing software more efficient.She can guide you through every step of your journey and help you land your dream job as well as excel in it.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Charu Chhabra',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'An Academician, A Data scientist, An Author, A researcher working on Artificial intelligence, data science, deep learning and computer vision. A technology enthusiast who loves to contribute in the field of research and development in numerous disciplines. IEEE reviewer, An author of books in collaboration with Genius publications Jaipur, author of several papers and chapters in leading international books and journals. Having almost 10 years of experience in industry and Academia and still counting more as an AI enthusiast.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Ashutosh Deoghre',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'A Data Analytics/Science Professional with about 7 years of experience.He loves solving complex business problems and delivering valuable insights via Data Analytics, Data Science & advanced data-driven methods. Has a very good experience working with structured, semi-structured, and unstructured data. Proficient in various Data Science tools & techniques like Python, R, SQL, Tableau, Data Analysis, Data Visualization, Text Mining, Quantitative Analysis, and Storytelling.He is also skilled in Data Mining, Statistics, Predictive Modeling, Machine Learning, NoSQL databases, Deep Neural Networks, Natural Language Processing, Computer Vision, and Big Data Technologies. ',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
		],
		reviews: [
			{
				firstRow: {
					name: 'Shashank Sinha(Data Scientist- Paytm)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I have been to many well-known Data Science / Machine Learning courses in Bangalore. But I could not find the right course which could help me to land my first job in this field. Then, I found Excelsior. Our mentor Mr. Sachin was so helpful and so knowledgeable in this field that he could guide me throughout the course and they helped me to get placed in a Top MNC through his their extensive placement program.',
				},
				secondRow: {
					name: 'Suresh Goel(Data Scientist-Amazon)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I took Excelsior’s course to learn how to do Data Science from a theoretical perspective, and I was not disappointed. The course is accessible to a wide range of students, and the materials are top notch. The professor is a real Data Scientist who knows his stuff and explains it well. The assignments are varied and thought provoking. The placement process was excellent and very transparent.',
				},
			},
			{
				firstRow: {
					name: 'Hemanth Reddy(Data Scientist-Airtel)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I am writing this review to thank Excelsior for making Data Science online course. I have recently completed this course and it was the best decision I have made in my life. The course is well designed with details, examples, exercises, lectures and assignments. The mentors are really helpful, and they helped me to clear all my doubts regarding the program. They always replied to my emails on time, and I also got a job through Brilliant Data Science.',
				},
				secondRow: {
					name: 'T Pavan Kumar(Data Scientist-IBM)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'My experience with the course and support team has been very positive. The Excelsior team is friendly and always available to answer questions, and they provide a good mix of reading material and videos. It was a challenging course with a steep learning curve, but it is also very rewarding. I would recommend the Excelsior to anyone who is willing to learn with hands on experience.',
				},
			},
			{
				firstRow: {
					name: 'Rahul Yadav (Data Scientist- Adobe)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'Being a non-programmer, it was very hard for me to decide which course to take for Data Science. After doing some research, I found Excelsior course on data science and that was the best decision I could have taken! The course is really good, and their placement team helped me get a job right after the course.',
				},
				secondRow: {
					name: 'Neelam Gupta(Data Scientist-AWS)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I just wanted to thank you all. I finished Excelsior Data Science for IT program recently and it was great. The materials were clear and simple, so it didn’t take me much time to finish the program. And now I have got a job at my dream Company',
				},
			},
		],
		faq: [
			{
				typeOfFAQ: 'Program',
				content: [
					{
						question: 'Who is the program intended for?',
						answer:
							'If you want to master Data Science in the IT industry, this program is for you. Whether you are a recent graduate or want to change your domain, you can join the program. We believe that you have the right to choose your career path.',
					},
					{
						question: 'Does Excelsior help me to get a job?',
						answer: (
							<>
								Our career development team will help you prepare a resume,
								conduct mock interviews, and prepare you. We will also connect you
								with our recruitment partners, but before we do so, you must clear
								our certification to ensure that you are eligible for the job.
								<br />
								Access to Opportunities The student's profile will be distributed
								in Excelsior’s company network. For learners with more than 5
								years of experience, switching these opportunities is more
								difficult than others. For them, it is more about how to instill
								data-driven leadership in their current work and plan to
								transition to Data Science in the medium to long term.
							</>
						),
					},
					{
						question:
							'I work full-time but I want to take this program. Do you also offer part-time programs?',
						answer:
							'We do offer part-time programs. You can select the part-time program option at the time of filling the application.',
					},
					{
						question: 'Will I get a certificate on Program completion?',
						answer:
							'After the program is completed, we will evaluate you to make sure you are ready for work. If you clear the evaluation, you will get an Excelsior certificate. Our program certificate is of high value among our recruitment partners, so you will receive a higher priority than other applicants.',
					},
					{
						question:
							'What should I NOT expect from the Certification in Data Scientist program?',
						answer:
							'The program is NOT going to be easy. It will be requiring at least 7-8 hours of time commitment per week, applying new concepts, and executing industry-relevant projects.',
					},
					{
						question:
							'Which topics are going to be covered as part of the program?',
						answer:
							'The program is designed for working professionals looking for a transition into the data domain. Considering the requirements of different data roles in the industry, the curriculum is curated to prepared you for those roles .',
					},
					{
						question: 'What type of learning experience should I expect?',
						answer:
							'The content will be a mix of interactive lectures from industry leaders as well as world-renowned faculty. Additionally, the program comprises live lectures or hangout sessions dedicated to solving your academic queries and reinforcing learning.',
					},
					{
						question: 'Can I attend the program online?',
						answer: 'The entire program will take place online.',
					},
					{
						question:
							'How will my doubts/questions be addressed in an online program?',
						answer:
							'All your doubts and queries can be solved in live online classes and sessions by industry experts and facilitators. As there is no separate query solving sessions or forums, you can ask as many doubts and problems from your respective faculty during or at the end of the live class.',
					},
					{
						question: 'What are the system requirements to take this program?',
						answer:
							'You need to have a laptop/desktop with a minimum configuration of 1GHz Processor, 4GB RAM, 120GB Hard Disc, Mic, Internet Connection (in case you are taking online sessions)',
					},
					{
						question:
							'I am not a resident of India, will I still get a job after program completion?',
						answer:
							'Yes, we will connect you to job opportunities through our vast employer network in India.',
					},
				],
			},
			{
				typeOfFAQ: 'Admission',
				content: [
					{
						question: 'What is the Admission Process?',
						answer: 'Redirect to Admission Procedure Section of the website',
					},
					{
						question: 'Do I need to have a background in Computer Science?',
						answer:
							'A computer science background is not required but a true interest and deep passion in computer science are required to learn these technologies.',
					},
					{
						question: 'I am experienced. Can I still take this course?',
						answer: 'We would love to have you with us.',
					},
				],
			},
			{
				typeOfFAQ: 'Payment',
				content: [
					{
						question: 'What is the fee for the Data Science program I choose?',
						answer:
							'Please consider going through the Affordable Program Fee Structure here. If there is any concern regarding the finances, feel free to contact us and let us know. We do everything possible to make sure that money doesn’t become an obstacle in your path of learning and building a successful career.',
					},
					{
						question: 'Do I need to pay registration fees?',
						answer:
							'Yes. You need to pay the registration fee for which you can contact us to get the updated information.',
					},
					{
						question: 'Are there any discounts available?',
						answer:
							'We offer scholarships based on your Interview score. Additionally, there are more offers available on our programs at different times. You can get in touch with our counselors to know more.',
					},
					{
						question: 'How does the payment model work?',
						answer: 'Refer to fees section of the website',
					},
					{
						question: 'How does the Scholarship Scheme work?',
						answer:
							'We offer various scholarship plans where candidates can get a waiver on program fees. Candidates need to qualify Interview to avail of this scholarship. The waiver is based on the merit/score of the Interview.',
					},
					{
						question: 'What happens if I drop out midway?',
						answer: (
							<>
								If you wish to drop out within the first 10 days:
								{/* <br /> */}
								<ul className='pl-4 mb-2'>
									<li>
										We will refund any upfront payments and will terminate the
										ISA, if applicable.
									</li>
								</ul>
								If you wish to drop out after the first 10 days:
								<ul className='pl-4 mb-0'>
									<li>
										We will not refund any upfront payments and the ISA contract
										will stay valid, if applicable.
									</li>
								</ul>
							</>
						),
					},
					{
						question: 'Will, there be any deductions on the refund amount?',
						answer:
							'Yes, the payment gateway charges of 2% to 3% will be deducted based on the payment method.',
					},
				],
			},
			{
				typeOfFAQ: 'Selection Criteria',
				content: [
					{
						question: 'How do I know if the program is right for me?',
						answer:
							'If you like finding meaningful insights from data and if you get excited by the prospect of informing business decisions through analysis and have an analytical bend of mind, then this program is meant for you. If you can clear the selection test (or are exempt) and are excited about the transition to Data Science , this program is meant for you.',
					},
					{
						question:
							'My current role does not include data exposure. Does it make sense for me to opt for this program?',
						answer:
							'Absolutely! Data Science is becoming a necessity for all industries and is no more a choice. Hence, there is a critical demand for quality data professionals and because the supply is constrained, this is one of the most lucrative career options across industries.',
					},
					{
						question:
							'What is the application process for the program and what are the timelines?',
						answer:
							'You can start the application process by applying. Applications have already started for the next batch',
					},
					{
						question:
							'Is there any minimum educational qualification required to take this program?',
						answer:
							'No. There is no degree of coding knowledge required to avail our program of Data Science.',
					},
				],
			},
		],
	},
	{
		pathname: '/programs/specialization-in-data-science-for-finance',
		nameOfProgram: 'Data Science for Finance',
		durationInWeeks: '52',
		rating: 4.9,
		completedBy: 1102,
		demoVideoURL: 'https://youtu.be/Y_wXF1Pe4AA',
		banner: DSforFinance,
		description:
			' A unique program, an innovative course that will give you a holistic understanding of how Data Science is used in the Finance & Banking industry. It iss not just limited to Bankers or Bankers-to-be, but it can help anyone who aspires to work in this field.',
		highlight: {
			firstRow: [
				'200+ hours of live sessions',
				'100+ Projects & Exercises',
				'Personalized Project feedback from Expert Professionals',
				'Flexible learning Schedule',
			],
			secondRow: [
				'1:1 with Industry Mentors',
				'Unlimited Interview opportunities',
				'24*7 Support',
				'No Cost EMI Option',
			],
		},
		overview: {
			description:
				'A complete program that caters to learning complete Data Science along with the complete domain knowledge of Banking and Finance industry including Investment Banking, Derivative Markets, Risk Analysis. This course is designed to provide the knowledge and skills needed to solve practical financial problems using Python. It will also help you explore various concepts of Data Science & get familiar with the basic and advanced tools and terminologies in this field.',
			dropdownQuestion: [
				{
					question: 'What does a Data Scientist do in an Finance product companies?',
					answer: 'Data scientists in the financial industry have a real opportunity to push the customer experience in an exciting direction. By monitoring and analyzing some of the more advanced aspects of customer transactions, it is possible to not only improve their security but also detect any suspicious or malicious activities. Data science is really making data-driven trading systems and pricing models a reality for banks. For customers, AI in banking drives services such as credit management which save you stress and hassle if you need money RIGHT NOW ! The natural language processing (NLP) algorithm allows for even more automated customer service through voice-response systems that respond to you by name - no matter how diverse your customer base is.',
				},
				{
					question: 'Who can enroll for this course and what are the prerequisites?',
					answer:
						'At Excelsior, we designed the course as Beginner friendly and also for the Professionals who want to narrow the data Science into Finance Sector. This career requires experience in technical skills, including math, statistics, or computers. Every class you take with Excelsior will be taught by an instructor who has been a great asset in this field.Our experienced instructors have decades of experience helping clients around the world accelerate their business and careers, and will share first-hand knowledge to ensure your success.',
				},
				{
					question: 'What will you learn from this course?',
					answer:
					(
						<>
					This course is Designed by Excelsior to equip Yourself with the Industry Demanded Skills in 2022.This program will give you practical data analytics and data science knowledge needed to succeed in the world of finance. The courses cover the methods analysts use to extract information from data, build models, and make predictions based on those models.
						<br />
						Domain Knowledge covered
						<ul className='px-2'>
							<li>Introduction to Investment Banking</li>
							<li>Cash Equities and Fixed income</li>
							<li>Corporate Actions</li>
							<li>Stock Borrow Lending</li>
							<li>Trade Life Cycle </li>
							<li>Risk Management and Regulatory Environment</li>
							</ul>
							<br />
							Tools Covered
							<ul className='px-2'>
								<li>Python Programming</li>
								<li>Tableau</li>
								<li>Keras</li>
								<li>Numpy</li>
								<li>Pandas</li>
								<li>Spark</li>
								<li>Hadoop</li>
								<li>Microsoft Power BI</li>
								<li>Alteryx</li>
								<li>Matplotlib</li>
								<li>NLP</li>
								<li>Computer Vision</li>
								<li>SVM</li>
								<li>Neural Networks</li>
								<li>Advance Excel</li>
								</ul>
								</>
							),
				},
				{
					question: 'What’s the scope after this course?',
					answer:
						'Data Science has revolutionized the finance industry across the globe.  It has provided an array of solutions to combat fraud, prevent identification theft and improve customer relations. The scope of Data Scientists in the finance industry is limited only by the imagination of the professionals, and the technology they use. With more and more companies and organizations using big data in their systems, the scope and demand for a Data Scientist in finance is increasing by the day. And the scope will definitely increase.  The skills of a Data Scientist are in demand in all sectors.  This means a Data Scientist will be able to get a significantly higher salary in financial sector than in other sectors. The average salary after this course ranges from ₹14,80,000 to ₹16,10,000 for freshers',
				},
			],
		},
		curriculum: {
			description: 'Learn the most Industry oriented curriculum. Our curriculum is updated every 3 months',
			curriculumData: [
				{
					title: 'Python',
					data: [
						'Introduction To Python',
						'Python Environment',
						'Executing Python',
						'Python Basic Syntax',
						'Python Variable Types',
						'Python Basic Operators',
						'Python Design Making',
						'Python Loops',
						'Python Numbers',
						'Python Strings',
						'Python Lists',
						'Python Tuples',
						'Python Dictionary',
						'Python Function',
						'Python Modules',
						'Python Files I/O',
						'Python Exception',
						'Python Classes & Objects',
						'Collections',
						'Debugging & Testing',
						'Regular Expression',
						'Essential Packages',
						'Testing',
					],
				},
				{
					title: 'Statistical and Mathematical Fundamentals',
					data: [
						'Statistics Concepts',
						'Linear Algebra',
						'Matrix Operations',
						'Calculus',
						'Probability',
						'Sampling Techniques',
						'Understanding Distributions',
					],
				},
				{
					title: 'Data Wrangling',
					data: [
						'Black Box Introduction To Machine Learning',
						'Microsoft Excel',
						'Sql',
						'Tableau',
						'Essential Numpy',
						'Pandas For Machine Learning',
						'Understanding Visualizations',
						'Power BI',
						'Alteryx',
					],
				},
				{
					title: 'Machine Learning',
					data: [
						'Linear Models For Classification And Regression',
						'Pre-Proposing Of Machine Learning',
						'Decision Trees',
						'Naives Bayes',
						'Composite Estimators Using Pipelines',
						'Model Selection & Evaluation',
						'Feature Selection & Dimensionality Reduction',
						'Nearest Neighbours',
						'Clustering Techniques',
						'Anomaly Detection',
						'Support Vector Machines',
						'Dealing With Imbalanced Classes',
						'Ensemble Methods',
						'Recommendation Engine',
						'Time Series Modelling',
						'Packaging & Deployment',
					],
				},
				{
					title: 'Big Data',
					data: [
						'Introduction To Big Data',
						'Internal Details Of Spark',
						'Foundation Of Spark Using Rdd',
						'Data Wrangling Using Dataframes',
						'Packaging And Deployment Of Spark Applications',
					],
				},
				{
					title: 'Deep Learning and Artificial Intelligence',
					data: [
						'Neural Network Basics',
						'Computer Vision',
						'Statistical Natural Language Processing',
						'Sequential Natural Language Processing',
						'Advanced Computer Vision',
						'Generative Adversarial Networks',
						'Reinforcement Learning',
					],
				},
				{
					title: 'Specialization in Finance Domain',
					data: [
						'Introduction To Investment Banking',
						'Cash Equities And Fixed Income',
						'Foreign Exchange And Money Markets',
						'Derivatives Markets',
						'Reference Data Management',
						'Corporate Actions',
						'Asset Management',
						'Reconciliation And Introduction To ISDA',
						'Stock Borrow Lending',
						'Collateral Management',
						'Trade Life Cycle',
						'Risk Management And Regulatory Environment',
						'Anti-Money Laundering And Know Your Customers',
					],
				},
			],
		},
		admissionProcedure: {
			description: 'Your steps to success',
			admissionStepForm: [
				{
					title: 'Explore',
					content:
						'Speak directly with a data scientist mentor and a career counselor to find the right path.',
				},
				{
					title: 'Enroll',
					content:
						"Enroll now to start your Data Science journey with the best online data science course, and take the first step towards a successful career. It's the number one skill companies need.",
				},
				{
					title: 'Enhance',
					content:
						'Learning advanced skills in Data Science, Machine Learning and Artificial Intelligence can make you 1000x more value and a more competitive candidate for more opportunities. Learn from scratch in 1 to 1 mentor sessions and do unlimited live projects to practice and enhance your profile.',
				},
				{
					title: 'Excel',
					content:
						'Now, it’s time to stand out in front of the best companies across different domains! Get placed in your dream job by learning how to perform great in interviews',
				},
			],
		},
		fee: [
			{
				typeOfPayment: 'Upfront Payment',
				question: [
					{
						name: 'Fee of the program',
						answer: 'The fee for this program is ₹129999 inclusive of taxes',
					},
					{
						name: 'Scholarship Options/Discounts',
						answer:
							'There are scholarship/discount options available on our programs at different times.',
					},
				],
			},
			{
				typeOfPayment: 'Income Sharing Agreement',
				question: [
					{
						name: 'What does ISA mean?',
						answer:
							'It means that you will not be paying the complete upfront fee and will share some part of your income after placement.',
					},
					{
						name: 'What are the terms of Excelsior’s ISA plan?',
						answer:
							'You will be paying 30% of the fees as registration and then 15% of your monthly fixed CTC for 12 months',
					},
				],
			},
			{
				typeOfPayment: 'EMI and Finanical AD',
				question: [
					{
						name: 'EMI Options',
						answer:
							'This is a 0% interest option. You can also pay in 6 EMI(s) of  ₹21666.50. The amount may vary for learners eligible for scholarships',
					},
					{
						name: 'Can you get a finanical AD',
						answer:
							'Yes, we have tie ups with various NBFC which provide education loan subject to you matching their eligibility criteria.',
					},
				],
			},
		],
		learningExperience: [
			{
				title: 'Profile Building',
				body: (
					<>
						Excelsior’s industry experts are the ultimate resource for anyone
						looking to build their profile
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Resume Building</li>
							<li style={{width: 'max-content'}}>LinkedIn Profile Building</li>
							<li style={{width: 'max-content'}}>Github Building</li>
						</ul>
					</>
				),
			},
			{
				title: 'Expert Sessions',
				body: (
					<>
						Excelsior offer expert advice on softskills and HR topics
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Counselling Sessions with Real Data Science experts</li>
							<li style={{width: 'max-content'}}>Prepare for HR Interviews</li>
							<li style={{width: 'max-content'}}>Learn Interviewers Psychology</li>
							<li style={{width: 'max-content'}}>Develop Soft-Skills</li>
						</ul>
					</>
				),
			},
			{
				title: 'Mock Interviews',
				body: (
					<>
						Get an upper hand in a data science job interview? Prepare for high pressure interview scenarios
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Live Interview Simulations</li>
							<li style={{width: 'max-content'}}>Expert Feedbacks</li>
							<li style={{width: 'max-content'}}>Prepare for real high pressure scenarios</li>
						</ul>
					</>
				),
			},
			{
				title: 'Project Guidance',
				body: (
					<>
						Work on unlimited live projects with the help of industry experts
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Work on Live Projects from your dream company</li>
							<li style={{width: 'max-content'}}>Practice the core skills by applying on real Life scenarios</li>
							<li style={{width: 'max-content'}}>Get feedback from experts to improve your knowledge and build your portfolio</li>
						</ul>
					</>
				),
			},
		],
		projects: [
			{
				firstRow: {
					title: 'Revenue Forecasting',
					description:
						'Revenue is the amount of money that a company receives from its normal business activities, usually from the sale of goods and services to customers. For this project, you will be using publicly available data with the help of open sources such as Bloomberg (for regions, sectors, securities), Yahoo Finance (for financial and operational metrics) and others and performing Multivariate Statistical analysis on the revenue data. Build a regression model for a set of periods taking into consideration all of the factors affecting the revenue of the company. This is a time series regression problem and the goal is to accurately predict future revenue of a company.',
				},
				secondRow: {
					title: 'Portfolio Optimization Problem',
					description:
						' A portfolio optimization problem deals with the determination of different weights you should assign to assets in a portfolio, how much assets you should fold from different asset classes. You have 1000 listed stocks, how would you find out the most listed and profitable stocks? In this project, you would be using an operation research algorithm to find out the optimal weight and best set of 20 stocks out of 1000. If you are interested in finance, portfolio management and investment consultancy, then this is the right project for you.',
				},
			},
			{
				firstRow: {
					title: 'Stock price forecasting model',
					description:
						'Due to a dynamic nature and liability to quick changes in the stock price, prediction of stock prices becomes a challenging task. In this project, you will be using the traditional statistical models such as exponential smoothing and ARIMA to predict the stock prices using the financial dataset from Bloomberg, NSE, Reliance etc. In the end, using innovative methods for forecasting the stock prices, you will be able to make highly informed business decisions.',
				},
				secondRow: {
					title: 'Build a credit Scorecard model',
					description:
						'In the past few decades banks have gathered plenty of information describing the default behavior of their customers. The goal of credit scoring is to quantify this relationship as precisely as possible to assist credit decisions, monitoring, and management. Hence, scorecards are widely used in the financial industry to make decisions on grating credit, monitoring portfolio and calculating loss etc. In this project, you will be working on the practical aspect of using scorecard models at banks. You will be assessing the credit worthiness of customers using a German loan dataset by building a classification model using logistic regression, Random forest and Boosting to classify good or bad customers and score new customers in future.',
				},
			},
		],
		mentor: [
			{
				name: 'Shobhit Gupta',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'So, here is the question. If there was a person who worked with Microsoft, Facebook, Amazon, Uber and Yahoo just to name a few and then he started working in Fampay as an Engineering Manager. What kind of guidance would you expect from such a person? Would you be interested in asking him how to crack the interviews for these companies? Would this be an opportunity that would be difficult to miss on?? We believe it is definitely worth your effort.If you are someone aspiring to work in any of the large tech companies, or aspire to work in the startup world, his guidance would be invaluable.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Rohini Jain',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'In a world where its hard to hold on to a job due to high pressure and fast pace. Rohini has been excelling at one of the biggest companies of the world, CISCO for over 10 years.Rohini Jain is a technology enthusiast, an experienced Software Architect and a mother of a school-going kid and a baby daughter.  She has a wealth of experience to share with the students : ranging from her college days at MNNIT Allahabad, to her 4 years in industry at ST Ericsson, her MS degree from University of Texas and almost 11 years of work experience at world’s largest networking company Cisco.  Rohini leads a team of software developers and software test engineers who are responsible for implementing automation solutions to make the process of testing software more efficient.She can guide you through every step of your journey and help you land your dream job as well as excel in it.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Charu Chhabra',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'An Academician, A Data scientist, An Author, A researcher working on Artificial intelligence, data science, deep learning and computer vision. A technology enthusiast who loves to contribute in the field of research and development in numerous disciplines. IEEE reviewer, An author of books in collaboration with Genius publications Jaipur, author of several papers and chapters in leading international books and journals. Having almost 10 years of experience in industry and Academia and still counting more as an AI enthusiast.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Ashutosh Deoghre',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'A Data Analytics/Science Professional with about 7 years of experience.He loves solving complex business problems and delivering valuable insights via Data Analytics, Data Science & advanced data-driven methods. Has a very good experience working with structured, semi-structured, and unstructured data. Proficient in various Data Science tools & techniques like Python, R, SQL, Tableau, Data Analysis, Data Visualization, Text Mining, Quantitative Analysis, and Storytelling.He is also skilled in Data Mining, Statistics, Predictive Modeling, Machine Learning, NoSQL databases, Deep Neural Networks, Natural Language Processing, Computer Vision, and Big Data Technologies. ',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
		],
		reviews: [
			{
				firstRow: {
					name: 'Nishant Singh (Data Scientist- RBS)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'Excelsior is a very good institute to learn Business Intelligence & Analytics because they have a very good team of faculties who are experts in their field. They really helped me a lot when I was stuck and guided me towards the right direction. I recommend Excelsior to anyone who wants to learn Business Intelligence or Analytics.',
				},
				secondRow: {
					name: 'Suresh Gupta (Associate Data Scientist- Oracle)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I have always been interested in Learning Data Science, but never had the time to study for it. When I found out about Excelsior and their online, accelerated course, I was instantly intrigued. The course is well organized with a good mix of Live Classes, reading material and videos. It also provides a great way to learn through hands on experiences while working on real world projects and learning what we have to use.',
				},
			},
			{
				firstRow: {
					name: 'Vikram (Data Scientist-Axis)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I liked the class, it was easy to follow and understand. I have a good understanding of Python and Data Science now. Overall I really liked the class and feel like I learned a lot.',
				},
				secondRow: {
					name: 'Nishant Gupta(Data Scientist-HDFC)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'Excelsior is the best Data Science institute in Bangalore. They offer a wide range of courses to learn Data Science. Moreover, they have one of the best placement program which helps the students to get placed in top companies. Big thanks to Mr. Ekansh and the entire Excelsior team for helping me to get my dream job in Data Science field.',
				},
			},
			{
				firstRow: {
					name: 'Neelam Singhal (Data Scientist - Goldman Sachs)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I highly recommend Excelsior Data Science Courses. The best part is that they have a placement team that will help you get a job after the course which absolutely rocks! I loved their 1-on-1 classes where I learnt from someone who has been in the field for quite a while!',
				},
				secondRow: {
					name: 'Harshita (Data Scientist-Mondelez International)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I was a fresher in Analytics industry, and I wanted to start my career in Data Science. I needed guidance from an expert for this. Excelsior’s Team is very supportive and helped me a lot to get started with in this field. They provided me with in-depth curriculum and detailed teaching which helped me in achieving my goals in the right direction.',
				},
			},
		],
		faq: [
			{
				typeOfFAQ: 'Program',
				content: [
					{
						question: 'Who is the program intended for?',
						answer:
							'This programme is for you if you want to master Data Science in the Finance industry. You can participate in the programme whether you are a recent graduate or want to change your domain. We think you have the freedom to select your own route in life.',
					},
					{
						question: 'Does Excelsior help me to get a job?',
						answer: (
							<>
								Our career development team will help you prepare a resume,
								conduct mock interviews, and prepare you. We will also connect you
								with our recruitment partners, but before we do so, you must clear
								our certification to ensure that you are eligible for the job.
								<br />
								Access to Opportunities The student's profile will be distributed
								in Excelsior’s company network. For learners with more than 5
								years of experience, switching these opportunities is more
								difficult than others. For them, it is more about how to instill
								data-driven leadership in their current work and plan to
								transition to Data Science in the medium to long term.
							</>
						),
					},
					{
						question:
							'I work full-time but I want to take this program. Do you also offer part-time programs?',
						answer:
							'We do offer part-time programs. You can select the part-time program option at the time of filling the application.',
					},
					{
						question: 'Will I get a certificate on Program completion?',
						answer:
							'After the program is completed, we will evaluate you to make sure you are ready for work. If you clear the evaluation, you will get an Excelsior certificate. Our program certificate is of high value among our recruitment partners, so you will receive a higher priority than other applicants.',
					},
					{
						question:
							'What should I NOT expect from the Certification in Data Scientist program?',
						answer:
							'The program is NOT going to be easy. It will be requiring at least 7-8 hours of time commitment per week, applying new concepts, and executing industry-relevant projects.',
					},
					{
						question:
							'Which topics are going to be covered as part of the program?',
						answer:
							'The program is designed for working professionals looking for a transition into the data domain. Considering the requirements of different data roles in the industry, the curriculum is curated to prepared you for those roles .',
					},
					{
						question: 'What type of learning experience should I expect?',
						answer:
							'The content will be a mix of interactive lectures from industry leaders as well as world-renowned faculty. Additionally, the program comprises live lectures or hangout sessions dedicated to solving your academic queries and reinforcing learning.',
					},
					{
						question: 'Can I attend the program online?',
						answer: 'The entire program will take place online.',
					},
					{
						question:
							'How will my doubts/questions be addressed in an online program?',
						answer:
							'All your doubts and queries can be solved in live online classes and sessions by industry experts and facilitators. As there is no separate query solving sessions or forums, you can ask as many doubts and problems from your respective faculty during or at the end of the live class.',
					},
					{
						question: 'What are the system requirements to take this program?',
						answer:
							'You need to have a laptop/desktop with a minimum configuration of 1GHz Processor, 4GB RAM, 120GB Hard Disc, Mic, Internet Connection (in case you are taking online sessions)',
					},
					{
						question:
							'I am not a resident of India, will I still get a job after program completion?',
						answer:
							'Yes, we will connect you to job opportunities through our vast employer network in India.',
					},
				],
			},
			{
				typeOfFAQ: 'Admission',
				content: [
					{
						question: 'What is the Admission Process?',
						answer: 'Redirect to Admission Procedure Section of the website',
					},
					{
						question: 'Do I need to have a background in Computer Science?',
						answer:
							'A computer science background is not required but a true interest and deep passion in computer science are required to learn these technologies.',
					},
					{
						question: 'I am experienced. Can I still take this course?',
						answer: 'We would love to have you with us.',
					},
				],
			},
			{
				typeOfFAQ: 'Payment',
				content: [
					{
						question: 'What is the fee for the Data Science program I choose?',
						answer:
							'Please consider going through the Affordable Program Fee Structure here. If there is any concern regarding the finances, feel free to contact us and let us know. We do everything possible to make sure that money doesn’t become an obstacle in your path of learning and building a successful career.',
					},
					{
						question: 'Do I need to pay registration fees?',
						answer:
							'Yes. You need to pay the registration fee for which you can contact us to get the updated information.',
					},
					{
						question: 'Are there any discounts available?',
						answer:
							'We offer scholarships based on your Interview score. Additionally, there are more offers available on our programs at different times. You can get in touch with our counselors to know more.',
					},
					{
						question: 'How does the payment model work?',
						answer: 'Refer to fees section of the website',
					},
					{
						question: 'How does the Scholarship Scheme work?',
						answer:
							'We offer various scholarship plans where candidates can get a waiver on program fees. Candidates need to qualify Interview to avail of this scholarship. The waiver is based on the merit/score of the Interview.',
					},
					{
						question: 'What happens if I drop out midway?',
						answer: (
							<>
								If you wish to drop out within the first 10 days:
								{/* <br /> */}
								<ul className='pl-4 mb-2'>
									<li>
										We will refund any upfront payments and will terminate the
										ISA, if applicable.
									</li>
								</ul>
								If you wish to drop out after the first 10 days:
								<ul className='pl-4 mb-0'>
									<li>
										We will not refund any upfront payments and the ISA contract
										will stay valid, if applicable.
									</li>
								</ul>
							</>
						),
					},
					{
						question: 'Will, there be any deductions on the refund amount?',
						answer:
							'Yes, the payment gateway charges of 2% to 3% will be deducted based on the payment method.',
					},
				],
			},
			{
				typeOfFAQ: 'Selection Criteria',
				content: [
					{
						question: 'How do I know if the program is right for me?',
						answer:
							'If you like finding meaningful insights from data and if you get excited by the prospect of informing business decisions through analysis and have an analytical bend of mind, then this program is meant for you. If you can clear the selection test (or are exempt) and are excited about the transition to Data Science , this program is meant for you.',
					},
					{
						question:
							'My current role does not include data exposure. Does it make sense for me to opt for this program?',
						answer:
							'Absolutely! Data Science is becoming a necessity for all industries and is no more a choice. Hence, there is a critical demand for quality data professionals and because the supply is constrained, this is one of the most lucrative career options across industries.',
					},
					{
						question:
							'What is the application process for the program and what are the timelines?',
						answer:
							'You can start the application process by applying. Applications have already started for the next batch',
					},
					{
						question:
							'Is there any minimum educational qualification required to take this program?',
						answer:
							'No. There is no degree of coding knowledge required to avail our program of Data Science.',
					},
				],
			},
		],
	},
	{
		pathname: '/programs/deep-learning',
		nameOfProgram: 'Deep Learning',
		durationInWeeks: '40',
		rating: 4.4,
		completedBy: 1030,
		demoVideoURL: 'https://youtu.be/Y_wXF1Pe4AA',
		banner: DeepLearning,
		description:
			'A deep dive into the most interesting branch of artificial intelligence. In this specialization, you will learn how to build and train neural networks using the latest techniques in modern AI research.',
		highlight: {
			firstRow: [
				'150+ hours of live sessions',
				'80+ Projects & Exercises',
				'Personalized Project feedback from Expert Professionals',
				'Flexible learning Schedule',
			],
			secondRow: [
				'1:1 with Industry Mentors',
				'Unlimited Interview opportunities',
				'24*7 Support',
				'No Cost EMI Option',
			],
		},
		overview: {
			description:
				'A program that covers all the major areas of AI including python, machine learning and deep learning. It also includes additional advanced topics such as reinforcement learning, Bayesian methods and neural networks. This specialization will cover the latest research in deep learning, transfer learning and other methods that are transforming AI research. We will look at how to build these complex, state-of-the-art networks that are transforming AI research and how they can be used for applications such as computer vision, speech recognition, natural language processing, audio processing, robotic control, and many others.',
			dropdownQuestion: [
				{
					question: 'What does a Data Scientist do in an Finance product companies?',
					answer: 'A Data Scientist has a very vast area of work. But a Data Scientist who has expertise in AI, deep learning, and machine learning is already in high demand. And the demand will keep rising. Here is the typical hiring profile of a Data Scientist: 1) A Data Scientist should be able to efficiently use Python libraries like Scikit Learn, PyTorch, Tensor Flow, and NumPy. 2)A Data Scientist should be able to build predictive models like Random Forest, Gradient Boosting, Neural Networks etc. 3) A Data Scientist should be able to communicate his/her ideas and results to Management, Technical people, and Business people. 4) A Data Scientist should be able to extract insights from data, create results, and present them to others. Here are some of the popular job postings for AI, deep learning and machine learning engineers: Google, Amazon, Microsoft, Airbnb, Facebook and many more.'
				},
				{
					question: 'Who can enroll for this course and what are the prerequisites?',
					answer:
						'At Excelsior Deep Learning course is second-to-none, providing you with the opportunity to learn this important skill in the most optimal way possible: through hands-on exercises. We have already gone to great lengths to ensure the material is high quality and engaging, but it is our classes that give you the fully immersive experience. Each lesson is taught by instructors who are not only well versed in the topic, but experienced developers within their field as well. You will also be learning from an Expert.The program has no pre-requisites and anyone willing to learna and devote time to the program can learn and excel in the field of Data Science.',
				},
				{
					question: 'What will you learn from this course?',
					answer:
					(
						<>
							If you’re looking to learn more about deep learning, but you’re a beginner and don’t know where to start, this course will take you from zero to hero in no time! Excelsior’s cutting-edge curriculum, blended learning model, and thoughtful instructors combine to make an immersive, transformative experience.
This course will equip you with all the skills you need to become a deep learning expert. Image classification, data science, natural language processing, computer vision - you name it, you’ll be able to do it after this program.
							<br />
							Tools covered
							<ul className='px-4'>
							<li>Python Programming</li>
							<li>Tableau</li>
							<li>Keras</li>
							<li>Numpy</li>
							<li>Pandas</li>
							<li>Spark</li>
							<li>Hadoop</li>
							<li>Microsoft Power BI</li>
							<li>Alteryx</li>
							<li>Matplotlib</li>
							<li>NLP</li>
							<li>Computer Vision</li>
							<li>SVM</li>
							<li>Neural Networks</li>
							<li>Advance Excel</li>
							</ul>
						</>
					),
				},
				{
					question: 'What’s the scope after this course?',
					answer:
						'Data Science is a growing career field in India. The demand in the job market is also on a higher side. According to a report "India needs over two lakh data science professionals by 2023". Average salary of a fresher in this field is 8.5 LPA. Experienced people in Data Science are getting salaries between 15-28 LPA. It is also dependent upon the company and location. For instance in Bangalore, an experienced Data Scientist can get a package of 20 LPA. It is a great time to get into Data Science.',
				},
			],
		},
		curriculum: {
			description: 'Learn the most Industry oriented curriculum. Our curriculum is updated every 3 months',
			curriculumData: [
				{
					title: 'Python',
					data: [
						'Introduction To Python',
						'Python Environment',
						'Executing Python',
						'Python Basic Syntax',
						'Python Variable Types',
						'Python Basic Operators',
						'Python Design Making',
						'Python Loops',
						'Python Numbers',
						'Python Strings',
						'Python Lists',
						'Python Tuples',
						'Python Dictionary',
						'Python Function',
						'Python Modules',
						'Python Files I/O',
						'Python Exception',
						'Python Classes & Objects',
						'Collections',
						'Debugging & Testing',
						'Regular Expression',
						'Essential Packages',
						'Testing',
					],
				},
				{
					title: 'Statistical and Mathematical Fundamentals',
					data: [
						'Statistics Concepts',
						'Linear Algebra',
						'Matrix Operations',
						'Calculus',
						'Probability',
						'Sampling Techniques',
						'Understanding Distributions',
					],
				},
				{
					title: 'Data Wrangling',
					data: [
						'Black Box Introduction To Machine Learning',
						'Microsoft Excel',
						'Sql',
						'Tableau',
						'Essential Numpy',
						'Pandas For Machine Learning',
						'Understanding Visualizations',
						'Power BI',
						'Alteryx',
					],
				},
				{
					title: 'Machine Learning',
					data: [
						'Linear Models For Classification And Regression',
						'Pre-Proposing Of Machine Learning',
						'Decision Trees',
						'Naives Bayes',
						'Composite Estimators Using Pipelines',
						'Model Selection & Evaluation',
						'Feature Selection & Dimensionality Reduction',
						'Nearest Neighbours',
						'Clustering Techniques',
						'Anomaly Detection',
						'Support Vector Machines',
						'Dealing With Imbalanced Classes',
						'Ensemble Methods',
						'Recommendation Engine',
						'Time Series Modelling',
						'Packaging & Deployment',
					],
				},
				{
					title: 'Big Data',
					data: [
						'Introduction To Big Data',
						'Internal Details Of Spark',
						'Foundation Of Spark Using Rdd',
						'Data Wrangling Using Dataframes',
						'Packaging And Deployment Of Spark Applications',
					],
				},
				{
					title: 'Deep Learning and Artificial Intelligence',
					data: [
						'Neural Network Basics',
						'Computer Vision',
						'Statistical Natural Language Processing',
						'Sequential Natural Language Processing',
						'Advanced Computer Vision',
						'Generative Adversarial Networks',
						'Reinforcement Learning',
					],
				},
			],
		},
		admissionProcedure: {
			description: 'Your steps to success',
			admissionStepForm: [
				{
					title: 'Explore',
					content:
						'Speak directly with a data scientist mentor and a career counselor to find the right path.',
				},
				{
					title: 'Enroll',
					content:
						"Enroll now to start your Data Science journey with the best online data science course, and take the first step towards a successful career. It's the number one skill companies need.",
				},
				{
					title: 'Enhance',
					content:
						'Learning advanced skills in Data Science, Machine Learning and Artificial Intelligence can make you 1000x more value and a more competitive candidate for more opportunities. Learn from scratch in 1 to 1 mentor sessions and do unlimited live projects to practice and enhance your profile.',
				},
				{
					title: 'Excel',
					content:
						'Now, it’s time to stand out in front of the best companies across different domains! Get placed in your dream job by learning how to perform great in interviews',
				},
			],
		},
		fee: [
			{
				typeOfPayment: 'Upfront Payment',
				question: [
					{
						name: 'Fee of the program',
						answer: 'The fee for this program is ₹99,999 inclusive of taxes',
					},
					{
						name: 'Scholarship Options/Discounts',
						answer:
							'There are scholarship/discount options available on our programs at different times.',
					},
				],
			},
			{
				typeOfPayment: 'Income Sharing Agreement',
				question: [
					{
						name: 'What does ISA mean?',
						answer:
							'It means that you will not be paying the complete upfront fee and will share some part of your income after placement.',
					},
					{
						name: 'What are the terms of Excelsior’s ISA plan?',
						answer:
							'You will be paying 30% of the fees as registration and then 15% of your monthly fixed CTC for 12 months',
					},
				],
			},
			{
				typeOfPayment: 'EMI and Finanical AD',
				question: [
					{
						name: 'EMI Options',
						answer:
							'This is a 0% interest option. You can also pay in 6 EMI(s) of  ₹21666.50. The amount may vary for learners eligible for scholarships',
					},
					{
						name: 'Can you get a finanical AD',
						answer:
							'Yes, we have tie ups with various NBFC which provide education loan subject to you matching their eligibility criteria.',
					},
				],
			},
		],
		learningExperience: [
			{
				title: 'Profile Building',
				body: (
					<>
						Excelsior’s industry experts are the ultimate resource for anyone
						looking to build their profile
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Resume Building</li>
							<li style={{width: 'max-content'}}>LinkedIn Profile Building</li>
							<li style={{width: 'max-content'}}>Github Building</li>
						</ul>
					</>
				),
			},
			{
				title: 'Expert Sessions',
				body: (
					<>
						Excelsior offer expert advice on softskills and HR topics
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Counselling Sessions with Real Data Science experts</li>
							<li style={{width: 'max-content'}}>Prepare for HR Interviews</li>
							<li style={{width: 'max-content'}}>Learn Interviewers Psychology</li>
							<li style={{width: 'max-content'}}>Develop Soft-Skills</li>
						</ul>
					</>
				),
			},
			{
				title: 'Mock Interviews',
				body: (
					<>
						Get an upper hand in a data science job interview? Prepare for high pressure interview scenarios
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Live Interview Simulations</li>
							<li style={{width: 'max-content'}}>Expert Feedbacks</li>
							<li style={{width: 'max-content'}}>Prepare for real high pressure scenarios</li>
						</ul>
					</>
				),
			},
			{
				title: 'Project Guidance',
				body: (
					<>
						Work on unlimited live projects with the help of industry experts
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Work on Live Projects from your dream company</li>
							<li style={{width: 'max-content'}}>Practice the core skills by applying on real Life scenarios</li>
							<li style={{width: 'max-content'}}>Get feedback from experts to improve your knowledge and build your portfolio</li>
						</ul>
					</>
				),
			},
		],
		projects: [
			{
				firstRow: {
					title: 'Skin cancer detection',
					description:
						'The power of machine learning lies in its practical applicability — whether you’re interested in medicine or not, this hands-on project will teach computer vision and AI skills that are in demand worldwide. Deep learning, nowadays,  is becoming a versatile, powerful tool for deriving valuable insights in areas of medicine that were previously inaccessible. Training a computer to analyse skin cancer images with improved accuracy can help in early detection of skin cancer. In this project, you will build a neural network using Python’s Numpy to classify dermal cell images and detect skin cancer.',
				},
				secondRow: {
					title: 'Car price prediction',
					description:
						'When buying and selling cars, it can be a challenge to assign the correct price of cars. Understanding how car prices vary with different criteria can help us in negotiating a good deal. In this project, you will predict the price of a given car and get an accurate prediction. This project provides some insights into the pricing trends of used vehicles and suggests variables to pay attention to when browsing the listings.',
				},
			},
			{
				firstRow: {
					title: 'Handwritten Digit Recognition',
					description:
						'The objective of the project is to build a model that could classify which digit is drawn by the user. In this project, you will build and train a Convolutional Neural Network (CNN) in Keras from scratch to recognize MNIST digits. At the end of this project, you will be able to build, compile, fit and evaluate a convolutional neural network trained on MNIST data set for handwritten digit recognition and then use it for real-time predictions using your own handwritten digits using computer vision.',
				},
				secondRow: {
					title: ' Image Caption Generator Project',
					description:
						' Image caption generator is one of the very interesting projects for deep learning and a computer vision enthusiast. Build a deep learning model that converts the image into well formed sentences. In this project, you will generate image captions from a set of images. Investigate social media activity on Instagram for hiking and climbing. Recommend remote, beautiful climbing and hiking locations based on real-time posting data from Instagram users.',
				},
			},
		],
		mentor: [
			{
				name: 'Shobhit Gupta',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'So, here is the question. If there was a person who worked with Microsoft, Facebook, Amazon, Uber and Yahoo just to name a few and then he started working in Fampay as an Engineering Manager. What kind of guidance would you expect from such a person? Would you be interested in asking him how to crack the interviews for these companies? Would this be an opportunity that would be difficult to miss on?? We believe it is definitely worth your effort.If you are someone aspiring to work in any of the large tech companies, or aspire to work in the startup world, his guidance would be invaluable.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Rohini Jain',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'In a world where its hard to hold on to a job due to high pressure and fast pace. Rohini has been excelling at one of the biggest companies of the world, CISCO for over 10 years.Rohini Jain is a technology enthusiast, an experienced Software Architect and a mother of a school-going kid and a baby daughter.  She has a wealth of experience to share with the students : ranging from her college days at MNNIT Allahabad, to her 4 years in industry at ST Ericsson, her MS degree from University of Texas and almost 11 years of work experience at world’s largest networking company Cisco.  Rohini leads a team of software developers and software test engineers who are responsible for implementing automation solutions to make the process of testing software more efficient.She can guide you through every step of your journey and help you land your dream job as well as excel in it.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Charu Chhabra',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'An Academician, A Data scientist, An Author, A researcher working on Artificial intelligence, data science, deep learning and computer vision. A technology enthusiast who loves to contribute in the field of research and development in numerous disciplines. IEEE reviewer, An author of books in collaboration with Genius publications Jaipur, author of several papers and chapters in leading international books and journals. Having almost 10 years of experience in industry and Academia and still counting more as an AI enthusiast.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Ashutosh Deoghre',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'A Data Analytics/Science Professional with about 7 years of experience.He loves solving complex business problems and delivering valuable insights via Data Analytics, Data Science & advanced data-driven methods. Has a very good experience working with structured, semi-structured, and unstructured data. Proficient in various Data Science tools & techniques like Python, R, SQL, Tableau, Data Analysis, Data Visualization, Text Mining, Quantitative Analysis, and Storytelling.He is also skilled in Data Mining, Statistics, Predictive Modeling, Machine Learning, NoSQL databases, Deep Neural Networks, Natural Language Processing, Computer Vision, and Big Data Technologies. ',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
		],
		reviews: [
			{
				firstRow: {
					name: 'Suresh Gupta (Associate Data Scientist- Oracle)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I have always been interested in Learning Data Science, but never had the time to study for it. When I found out about Excelsior and their online, accelerated course, I was instantly intrigued. The course is well organized with a good mix of Live Classes, reading material and videos. It also provides a great way to learn through hands on experiences while working on real world projects and learning what we have to use.',
				},
				secondRow: {
					name: 'Neelam Singhal (Data Scientist - Goldman Sachs)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I highly recommend Excelsior Data Science Courses. The best part is that they have a placement team that will help you get a job after the course which absolutely rocks! I loved their 1-on-1 classes where I learnt from someone who has been in the field for quite a while!',
				},
			},
			{
				firstRow: {
					name: 'Suresh Goel(Data Scientist-Amazon)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I took Excelsior’s course to learn how to do Data Science from a theoretical perspective, and I was not disappointed. The course is accessible to a wide range of students, and the materials are top notch. The professor is a real Data Scientist who knows his stuff and explains it well. The assignments are varied and thought provoking. The placement process was excellent and very transparent.',
				},
				secondRow: {
					name: 'Shashank Sinha(Data Scientist- Paytm)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I have been to many well-known Data Science / Machine Learning courses in Bangalore. But I could not find the right course which could help me to land my first job in this field. Then, I found Excelsior. Excelsior mentor Mr. Sachin was so helpful and so knowledgeable in this field that he could guide me throughout the course and they helped me to get placed in a Top MNC through his their extensive placement program.',
				},
			},
			{
				firstRow: {
					name: 'Harshita (Data Scientist-Mondelez International)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I was a fresher in Analytics industry, and I wanted to start my career in Data Science. I needed guidance from an expert for this. Excelsior’s Team is very supportive and helped me a lot to get started with in this field. They provided me with in-depth curriculum and detailed teaching which helped me in achieving my goals in the right direction.',
				},
				secondRow: {
					name: 'Hemanth Reddy(Data Scientist-Airtel)',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 5,
					description:
						'I am writing this review to thank Excelsior for making Data Science online course. I have recently completed this course and it was the best decision I have made in my life. The course is well designed with details, examples, exercises, lectures and assignments. The mentors are really helpful, and they helped me to clear all my doubts regarding the program. They always replied to my emails on time, and I also got a job through Brilliant Data Science. I am really thankful to them for helping me build my profile and gain the head start I needed.',
				},
			},
		],
		faq: [
			{
				typeOfFAQ: 'Program',
				content: [
					{
						question: 'Who is the program intended for?',
						answer:
							'This programme is for you if you wish to work as a Deep Learning and AI developer. You can participate in the programme whether you are a recent graduate or want to change your domain. We think you have the freedom to select your own route in life.',
					},
					{
						question: 'Does Excelsior help me to get a job?',
						answer: (
							<>
								Our career development team will help you prepare a resume,
								conduct mock interviews, and prepare you. We will also connect you
								with our recruitment partners, but before we do so, you must clear
								our certification to ensure that you are eligible for the job.
								<br />
								Access to Opportunities The student's profile will be distributed
								in Excelsior’s company network. For learners with more than 5
								years of experience, switching these opportunities is more
								difficult than others. For them, it is more about how to instill
								data-driven leadership in their current work and plan to
								transition to Data Science in the medium to long term.
							</>
						),
					},
					{
						question:
							'I work full-time but I want to take this program. Do you also offer part-time programs?',
						answer:
							'We do offer part-time programs. You can select the part-time program option at the time of filling the application.',
					},
					{
						question: 'Will I get a certificate on Program completion?',
						answer:
							'After the program is completed, we will evaluate you to make sure you are ready for work. If you clear the evaluation, you will get an Excelsior certificate. Our program certificate is of high value among our recruitment partners, so you will receive a higher priority than other applicants.',
					},
					{
						question:
							'What should I NOT expect from the Certification in Data Scientist program?',
						answer:
							'The program is NOT going to be easy. It will be requiring at least 7-8 hours of time commitment per week, applying new concepts, and executing industry-relevant projects.',
					},
					{
						question:
							'Which topics are going to be covered as part of the program?',
						answer:
							'The program is designed for working professionals looking for a transition into the data domain. Considering the requirements of different data roles in the industry, the curriculum is curated to prepared you for those roles .',
					},
					{
						question: 'What type of learning experience should I expect?',
						answer:
							'The content will be a mix of interactive lectures from industry leaders as well as world-renowned faculty. Additionally, the program comprises live lectures or hangout sessions dedicated to solving your academic queries and reinforcing learning.',
					},
					{
						question: 'Can I attend the program online?',
						answer: 'The entire program will take place online.',
					},
					{
						question:
							'How will my doubts/questions be addressed in an online program?',
						answer:
							'All your doubts and queries can be solved in live online classes and sessions by industry experts and facilitators. As there is no separate query solving sessions or forums, you can ask as many doubts and problems from your respective faculty during or at the end of the live class.',
					},
					{
						question: 'What are the system requirements to take this program?',
						answer:
							'You need to have a laptop/desktop with a minimum configuration of 1GHz Processor, 4GB RAM, 120GB Hard Disc, Mic, Internet Connection (in case you are taking online sessions)',
					},
					{
						question:
							'I am not a resident of India, will I still get a job after program completion?',
						answer:
							'Yes, we will connect you to job opportunities through our vast employer network in India.',
					},
				],
			},
			{
				typeOfFAQ: 'Admission',
				content: [
					{
						question: 'What is the Admission Process?',
						answer: 'Redirect to Admission Procedure Section of the website',
					},
					{
						question: 'Do I need to have a background in Computer Science?',
						answer:
							'A computer science background is not required but a true interest and deep passion in computer science are required to learn these technologies.',
					},
					{
						question: 'I am experienced. Can I still take this course?',
						answer: 'We would love to have you with us.',
					},
				],
			},
			{
				typeOfFAQ: 'Payment',
				content: [
					{
						question: 'What is the fee for the Data Science program I choose?',
						answer:
							'Please consider going through the Affordable Program Fee Structure here. If there is any concern regarding the finances, feel free to contact us and let us know. We do everything possible to make sure that money doesn’t become an obstacle in your path of learning and building a successful career.',
					},
					{
						question: 'Do I need to pay registration fees?',
						answer:
							'Yes. You need to pay the registration fee for which you can contact us to get the updated information.',
					},
					{
						question: 'Are there any discounts available?',
						answer:
							'We offer scholarships based on your Interview score. Additionally, there are more offers available on our programs at different times. You can get in touch with our counselors to know more.',
					},
					{
						question: 'How does the payment model work?',
						answer: 'Refer to fees section of the website',
					},
					{
						question: 'How does the Scholarship Scheme work?',
						answer:
							'We offer various scholarship plans where candidates can get a waiver on program fees. Candidates need to qualify Interview to avail of this scholarship. The waiver is based on the merit/score of the Interview.',
					},
					{
						question: 'What happens if I drop out midway?',
						answer: (
							<>
								If you wish to drop out within the first 10 days:
								{/* <br /> */}
								<ul className='pl-4 mb-2'>
									<li>
										We will refund any upfront payments and will terminate the
										ISA, if applicable.
									</li>
								</ul>
								If you wish to drop out after the first 10 days:
								<ul className='pl-4 mb-0'>
									<li>
										We will not refund any upfront payments and the ISA contract
										will stay valid, if applicable.
									</li>
								</ul>
							</>
						),
					},
					{
						question: 'Will, there be any deductions on the refund amount?',
						answer:
							'Yes, the payment gateway charges of 2% to 3% will be deducted based on the payment method.',
					},
				],
			},
			{
				typeOfFAQ: 'Selection Criteria',
				content: [
					{
						question: 'How do I know if the program is right for me?',
						answer:
							'If you like finding meaningful insights from data and if you get excited by the prospect of informing business decisions through analysis and have an analytical bend of mind, then this program is meant for you. If you can clear the selection test (or are exempt) and are excited about the transition to Data Science , this program is meant for you.',
					},
					{
						question:
							'My current role does not include data exposure. Does it make sense for me to opt for this program?',
						answer:
							'Absolutely! Data Science is becoming a necessity for all industries and is no more a choice. Hence, there is a critical demand for quality data professionals and because the supply is constrained, this is one of the most lucrative career options across industries.',
					},
					{
						question:
							'What is the application process for the program and what are the timelines?',
						answer:
							'You can start the application process by applying. Applications have already started for the next batch',
					},
					{
						question:
							'Is there any minimum educational qualification required to take this program?',
						answer:
							'No. There is no degree of coding knowledge required to avail our program of Data Science.',
					},
				],
			},
		],
	},
	{
		pathname: '/programs/machine-learning-with-python',
		nameOfProgram: 'Machine Learning with Python',
		durationInWeeks: '52',
		rating: 4.5,
		completedBy: 907,
		demoVideoURL: 'https://youtu.be/Y_wXF1Pe4AA',
		banner: ML,
		description:
			'Prepare Yourself For Product-based IT Companies. A program that combines the two fields of Data Science and Product Management. The knowledge provided in this course will help you take your career to next level.',
		highlight: {
			firstRow: [
				'200+ hours of live sessions',
				'100+ Projects & Exercises',
				'Personalized Project feedback from Expert Professionals',
				'Flexible learning Schedule',
			],
			secondRow: [
				'1:1 with Industry Mentors',
				'Unlimited Interview opportunities',
				'24*7 Support',
				'No Cost EMI Option',
			],
		},
		overview: {
			description:
				'A complete program that caters to learning complete Data Science along with the complete domain knowledge of IT industry including product management and complete product life cycle. This is an end-to-end IT training program that gives you all the knowledge required to start and grow your career in Data Science. It covers everything from basic statistics and modelling techniques up to advanced machine learning, deep learning, artificial intelligence, NLP (Natural Language Processing), computer vision and other areas of AI.',
			dropdownQuestion: [
				{
					question: 'What does a Data Scientist do in an Finance product companies?',
					answer: (
						<>
							There are lots of exciting career prospects for Data Science in IT
							product companies. As a data scientist, you're often expected to
							effectively analyze problems, predict behavior, and develop
							solutions. Since IT products are often used for a variety of
							purposes, there's always a need for innovators in the field. While
							you'll be able to use your Data Science skills to benefit the
							company, you'll also have the opportunity to contribute to solving a
							lot of problems in the world. Data scientists in IT companies perform
							a range of different tasks that involve collecting, analyzing and
							interpreting large amounts of data.
							<br />
							These tasks include:
							<ul className='px-4'>
								<li>Self-Service Data Analysis</li>
								<li>Data Visualization</li>
								<li>Data integration</li>
								<li>Reporting</li>
								<li>Modeling</li>
								<li>Predictive Analytics</li>
								<li>Big data management</li>
								<li>Data Quality</li>
								<li>Business Intelligence</li>
								<li>Data warehousing</li>
								<li>Data Integration</li>
								<li>Data Mining</li>
							</ul>
						</>
					),
				},
				{
					question: 'Who can enroll for this course and what are the prerequisites?',
					answer:
						'This course is ideal for anyone looking to make a career in the IT industry. We at Excelsior have designed the course as beginner friendly and also for the professionals who want to narrow the data Science into the IT Sector. Every class you take with Excelsior will be taught by an instructor who has been a great asset in this field. Our experienced instructors have decades of experience helping clients around the world accelerate their business and careers, and will share first-hand knowledge to ensure your success.',
				},
				{
					question: 'What will you learn from this course?',
					answer:
						'This course is Designed by the GetExcelsior to equip yourself with the Industry Demanded Skills in 2022. This program will give you practical data analytics and data science knowledge needed to succeed in the IT sector. Learn the concepts of data science and IT. Gain transferable skills in user research, user design, prototyping, building artefacts, product analytics, digital transformation, fundamental procedures and structures. You will also learn Reconciliation And Introduction To Isda, Product Marketing And Gtm Strategy, Product Planning And Development, Tech 101 For Pms, Data Science For Product Management and Growth Product Management. This program is designed by Excelsior covers the latest analytics, Visualization and machine learning concepts. These include topics like data science essentials, big data ecosystem, where data has its origins, the role of databases in storing and retrieving data at scale, statistical analysis basics, and designing experiments. Upon completion of this program you will be prepared to take the roles of Business Analyst and Data Scientist. Tools covered: Python Programming R Programming Tableau Kera Spark Microsoft Power BI (Business Intelligence), Machine Learning, Deep Learning, NLP, Computer Vision and Other Areas of AI',
				},
				{
					question: 'What’s the scope after this course?',
					answer:
						'The scope of Data Science professionals in the IT product based companies in India in 2022 will only increase. This is because top companies like Google, Amazon, Microsoft are all hiring Data Science professionals. India has exploded on the global data science landscape. Data Science is a new but vibrant field in the market. The number of people employed in this field cannot even be estimated. The data science market is growing rapidly as the more data is used in business and other fields, the more data scientists will be needed. The average salary after this course ranges from ₹14,50,000 to ₹16,00,000 for freshers',
				},
			],
		},
		curriculum: {
			description: 'Learn the most Industry oriented curriculum. Our curriculum is updated every 3 months',
			curriculumData: [
				{
					title: 'Python',
					data: [
						'Introduction To Python',
						'Python Environment',
						'Executing Python',
						'Python Basic Syntax',
						'Python Variable Types',
						'Python Basic Operators',
						'Python Design Making',
						'Python Loops',
						'Python Numbers',
						'Python Strings',
						'Python Lists',
						'Python Tuples',
						'Python Dictionary',
						'Python Function',
						'Python Modules',
						'Python Files I/O',
						'Python Exception',
						'Python Classes & Objects',
						'Collections',
						'Debugging & Testing',
						'Regular Expression',
						'Essential Packages',
						'Testing',
					],
				},
				{
					title: 'Statistical and Mathematical Fundamentals',
					data: [
						'Statistics Concepts',
						'Linear Algebra',
						'Matrix Operations',
						'Calculus',
						'Probability',
						'Sampling Techniques',
						'Understanding Distributions',
					],
				},
				{
					title: 'Data Wrangling',
					data: [
						'Black Box Introduction To Machine Learning',
						'Microsoft Excel',
						'Sql',
						'Tableau',
						'Essential Numpy',
						'Pandas For Machine Learning',
						'Understanding Visualizations',
						'Power BI',
						'Alteryx',
					],
				},
				{
					title: 'Machine Learning',
					data: [
						'Linear Models For Classification And Regression',
						'Pre-Proposing Of Machine Learning',
						'Decision Trees',
						'Naives Bayes',
						'Composite Estimators Using Pipelines',
						'Model Selection & Evaluation',
						'Feature Selection & Dimensionality Reduction',
						'Nearest Neighbours',
						'Clustering Techniques',
						'Anomaly Detection',
						'Support Vector Machines',
						'Dealing With Imbalanced Classes',
						'Ensemble Methods',
						'Recommendation Engine',
						'Time Series Modelling',
						'Packaging & Deployment',
					],
				},
				{
					title: 'Big Data',
					data: [
						'Introduction To Big Data',
						'Internal Details Of Spark',
						'Foundation Of Spark Using Rdd',
						'Data Wrangling Using Dataframes',
						'Packaging And Deployment Of Spark Applications',
					],
				},
			],
		},
		admissionProcedure: {
			description: 'Your steps to success',
			admissionStepForm: [
				{
					title: 'Explore',
					content:
						'Speak directly with a data scientist mentor and a career counselor to find the right path.',
				},
				{
					title: 'Enroll',
					content:
						"Enroll now to start your Data Science journey with the best online data science course, and take the first step towards a successful career. It's the number one skill companies need.",
				},
				{
					title: 'Enhance',
					content:
						'Learning advanced skills in Data Science, Machine Learning and Artificial Intelligence can make you 1000x more value and a more competitive candidate for more opportunities. Learn from scratch in 1 to 1 mentor sessions and do unlimited live projects to practice and enhance your profile.',
				},
				{
					title: 'Excel',
					content:
						'Now, it’s time to stand out in front of the best companies across different domains! Get placed in your dream job by learning how to perform great in interviews',
				},
			],
		},
		fee: [
			{
				typeOfPayment: 'Upfront Payment',
				question: [
					{
						name: 'Fee of the program',
						answer: 'The fee for this program is ₹129999 inclusive of taxes',
					},
					{
						name: 'Scholarship Options/Discounts',
						answer:
							'There are scholarship/discount options available on our programs at different times.',
					},
				],
			},
			{
				typeOfPayment: 'Income Sharing Agreement',
				question: [
					{
						name: 'What does ISA mean?',
						answer:
							'It means that you will not be paying the complete upfront fee and will share some part of your income after placement.',
					},
					{
						name: 'What are the terms of Excelsior’s ISA plan?',
						answer:
							'You will be paying 30% of the fees as registration and then 15% of your monthly fixed CTC for 12 months',
					},
				],
			},
			{
				typeOfPayment: 'EMI and Finanical AD',
				question: [
					{
						name: 'EMI Options',
						answer:
							'This is a 0% interest option. You can also pay in 6 EMI(s) of  ₹21666.50. The amount may vary for learners eligible for scholarships',
					},
					{
						name: 'Can you get a finanical AD',
						answer:
							'Yes, we have tie ups with various NBFC which provide education loan subject to you matching their eligibility criteria.',
					},
				],
			},
		],
		learningExperience: [
			{
				title: 'Profile Building',
				body: (
					<>
						Excelsior’s industry experts are the ultimate resource for anyone
						looking to build their profile
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Resume Building</li>
							<li style={{width: 'max-content'}}>LinkedIn Profile Building</li>
							<li style={{width: 'max-content'}}>Github Building</li>
						</ul>
					</>
				),
			},
			{
				title: 'Expert Sessions',
				body: (
					<>
						Excelsior offer expert advice on softskills and HR topics
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Counselling Sessions with Real Data Science experts</li>
							<li style={{width: 'max-content'}}>Prepare for HR Interviews</li>
							<li style={{width: 'max-content'}}>Learn Interviewers Psychology</li>
							<li style={{width: 'max-content'}}>Develop Soft-Skills</li>
						</ul>
					</>
				),
			},
			{
				title: 'Mock Interviews',
				body: (
					<>
						Get an upper hand in a data science job interview? Prepare for high pressure interview scenarios
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Live Interview Simulations</li>
							<li style={{width: 'max-content'}}>Expert Feedbacks</li>
							<li style={{width: 'max-content'}}>Prepare for real high pressure scenarios</li>
						</ul>
					</>
				),
			},
			{
				title: 'Project Guidance',
				body: (
					<>
						Work on unlimited live projects with the help of industry experts
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Work on Live Projects from your dream company</li>
							<li style={{width: 'max-content'}}>Practice the core skills by applying on real Life scenarios</li>
							<li style={{width: 'max-content'}}>Get feedback from experts to improve your knowledge and build your portfolio</li>
						</ul>
					</>
				),
			},
		],
		projects: [
			{
				firstRow: {
					title: 'Fake news detection',
					description:
						'Fake news can be dangerous. Your challenge is to build a Fake News classifier by applying ML algorithms such as Passive Aggressive Classifier and determine the accuracy of our model. You will be using various Python packages such as pandas, NumPy, and scikit-learn to determine the legitimacy of the information. With the help of this, you will be able to predict on the fly whether the information you acquired is authentic or not.',
				},
				secondRow: {
					title: 'Influence of global warming on food chain supply',
					description:
						'Global warming is influencing the climate pattern and leads to the change in food production. Unusual weather conditions and adaptation of technologies used in agriculture have a significant effect on the pattern of food production globally. In this project you will analyze the factors that are causing these changes, study the data visualization techniques to explain the patterns across different geographical locations, and predict the future trends.',
				},
			},
			{
				firstRow: {
					title: 'Segmentation of customer groups',
					description:
						'Customer segmentation helps companies to market the products in each segment more fitting to each individual customer. Build your clustering model using k-means clustering algorithms learned in machine learning. In this project, you will cluster the customers based on the features and their buying behaviour. Use the Elbow method, Silhouette Analysis method and DBSCAN. Once you have created various segments among customers, this model could be used by businesses to advertise their products to each segment in a way which will grab their attention.',
				},
				secondRow: {
					title: 'Diabetic Retinopathy',
					description:
						'Early treatment of pathological changes in the blood vessels of the eye can help prevent eye disease from progressing to blindness. In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening. We will be using data that has been pre-processed to extract In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening. We will be using data that has been pre-processed to extract the most important features from retina images.',
				},
			},
		],
		mentor: [
			{
				name: 'Shobhit Gupta',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'So, here is the question. If there was a person who worked with Microsoft, Facebook, Amazon, Uber and Yahoo just to name a few and then he started working in Fampay as an Engineering Manager. What kind of guidance would you expect from such a person? Would you be interested in asking him how to crack the interviews for these companies? Would this be an opportunity that would be difficult to miss on?? We believe it is definitely worth your effort.If you are someone aspiring to work in any of the large tech companies, or aspire to work in the startup world, his guidance would be invaluable.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Rohini Jain',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'In a world where its hard to hold on to a job due to high pressure and fast pace. Rohini has been excelling at one of the biggest companies of the world, CISCO for over 10 years.Rohini Jain is a technology enthusiast, an experienced Software Architect and a mother of a school-going kid and a baby daughter.  She has a wealth of experience to share with the students : ranging from her college days at MNNIT Allahabad, to her 4 years in industry at ST Ericsson, her MS degree from University of Texas and almost 11 years of work experience at world’s largest networking company Cisco.  Rohini leads a team of software developers and software test engineers who are responsible for implementing automation solutions to make the process of testing software more efficient.She can guide you through every step of your journey and help you land your dream job as well as excel in it.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Charu Chhabra',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'An Academician, A Data scientist, An Author, A researcher working on Artificial intelligence, data science, deep learning and computer vision. A technology enthusiast who loves to contribute in the field of research and development in numerous disciplines. IEEE reviewer, An author of books in collaboration with Genius publications Jaipur, author of several papers and chapters in leading international books and journals. Having almost 10 years of experience in industry and Academia and still counting more as an AI enthusiast.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Ashutosh Deoghre',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'A Data Analytics/Science Professional with about 7 years of experience.He loves solving complex business problems and delivering valuable insights via Data Analytics, Data Science & advanced data-driven methods. Has a very good experience working with structured, semi-structured, and unstructured data. Proficient in various Data Science tools & techniques like Python, R, SQL, Tableau, Data Analysis, Data Visualization, Text Mining, Quantitative Analysis, and Storytelling.He is also skilled in Data Mining, Statistics, Predictive Modeling, Machine Learning, NoSQL databases, Deep Neural Networks, Natural Language Processing, Computer Vision, and Big Data Technologies. ',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
		],
		reviews: [
			{
				firstRow: {
					name: 'A',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
				secondRow: {
					name: 'B',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
			},
			{
				firstRow: {
					name: 'C',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
				secondRow: {
					name: 'D',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
			},
			{
				firstRow: {
					name: 'E',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
				secondRow: {
					name: 'F',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
			},
		],
		faq: [
			{
				typeOfFAQ: 'Program',
				content: [
					{
						question: 'Who is the program intended for?',
						answer:
							'If you want to master Data Science in the IT industry, this program is for you. Whether you are a recent graduate or want to change your domain, you can join the program. We believe that you have the right to choose your career path.',
					},
					{
						question: 'Does Excelsior help me to get a job?',
						answer: (
							<>
								Our career development team will help you prepare a resume,
								conduct mock interviews, and prepare you. We will also connect you
								with our recruitment partners, but before we do so, you must clear
								our certification to ensure that you are eligible for the job.
								<br />
								Access to Opportunities The student's profile will be distributed
								in Excelsior’s company network. For learners with more than 5
								years of experience, switching these opportunities is more
								difficult than others. For them, it is more about how to instill
								data-driven leadership in their current work and plan to
								transition to Data Science in the medium to long term.
							</>
						),
					},
					{
						question:
							'I work full-time but I want to take this program. Do you also offer part-time programs?',
						answer:
							'We do offer part-time programs. You can select the part-time program option at the time of filling the application.',
					},
					{
						question: 'Will I get a certificate on Program completion?',
						answer:
							'After the program is completed, we will evaluate you to make sure you are ready for work. If you clear the evaluation, you will get an Excelsior certificate. Our program certificate is of high value among our recruitment partners, so you will receive a higher priority than other applicants.',
					},
					{
						question:
							'What should I NOT expect from the Certification in Data Scientist program?',
						answer:
							'The program is NOT going to be easy. It will be requiring at least 7-8 hours of time commitment per week, applying new concepts, and executing industry-relevant projects.',
					},
					{
						question:
							'Which topics are going to be covered as part of the program?',
						answer:
							'The program is designed for working professionals looking for a transition into the data domain. Considering the requirements of different data roles in the industry, the curriculum is curated to prepared you for those roles .',
					},
					{
						question: 'What type of learning experience should I expect?',
						answer:
							'The content will be a mix of interactive lectures from industry leaders as well as world-renowned faculty. Additionally, the program comprises live lectures or hangout sessions dedicated to solving your academic queries and reinforcing learning.',
					},
					{
						question: 'Can I attend the program online?',
						answer: 'The entire program will take place online.',
					},
					{
						question:
							'How will my doubts/questions be addressed in an online program?',
						answer:
							'All your doubts and queries can be solved in live online classes and sessions by industry experts and facilitators. As there is no separate query solving sessions or forums, you can ask as many doubts and problems from your respective faculty during or at the end of the live class.',
					},
					{
						question: 'What are the system requirements to take this program?',
						answer:
							'You need to have a laptop/desktop with a minimum configuration of 1GHz Processor, 4GB RAM, 120GB Hard Disc, Mic, Internet Connection (in case you are taking online sessions)',
					},
					{
						question:
							'I am not a resident of India, will I still get a job after program completion?',
						answer:
							'Yes, we will connect you to job opportunities through our vast employer network in India.',
					},
				],
			},
			{
				typeOfFAQ: 'Admission',
				content: [
					{
						question: 'What is the Admission Process?',
						answer: 'Redirect to Admission Procedure Section of the website',
					},
					{
						question: 'Do I need to have a background in Computer Science?',
						answer:
							'A computer science background is not required but a true interest and deep passion in computer science are required to learn these technologies.',
					},
					{
						question: 'I am experienced. Can I still take this course?',
						answer: 'We would love to have you with us.',
					},
				],
			},
			{
				typeOfFAQ: 'Payment',
				content: [
					{
						question: 'What is the fee for the Data Science program I choose?',
						answer:
							'Please consider going through the Affordable Program Fee Structure here. If there is any concern regarding the finances, feel free to contact us and let us know. We do everything possible to make sure that money doesn’t become an obstacle in your path of learning and building a successful career.',
					},
					{
						question: 'Do I need to pay registration fees?',
						answer:
							'Yes. You need to pay the registration fee for which you can contact us to get the updated information.',
					},
					{
						question: 'Are there any discounts available?',
						answer:
							'We offer scholarships based on your Interview score. Additionally, there are more offers available on our programs at different times. You can get in touch with our counselors to know more.',
					},
					{
						question: 'How does the payment model work?',
						answer: 'Refer to fees section of the website',
					},
					{
						question: 'How does the Scholarship Scheme work?',
						answer:
							'We offer various scholarship plans where candidates can get a waiver on program fees. Candidates need to qualify Interview to avail of this scholarship. The waiver is based on the merit/score of the Interview.',
					},
					{
						question: 'What happens if I drop out midway?',
						answer: (
							<>
								If you wish to drop out within the first 10 days:
								{/* <br /> */}
								<ul className='pl-4 mb-2'>
									<li>
										We will refund any upfront payments and will terminate the
										ISA, if applicable.
									</li>
								</ul>
								If you wish to drop out after the first 10 days:
								<ul className='pl-4 mb-0'>
									<li>
										We will not refund any upfront payments and the ISA contract
										will stay valid, if applicable.
									</li>
								</ul>
							</>
						),
					},
					{
						question: 'Will, there be any deductions on the refund amount?',
						answer:
							'Yes, the payment gateway charges of 2% to 3% will be deducted based on the payment method.',
					},
				],
			},
			{
				typeOfFAQ: 'Selection Criteria',
				content: [
					{
						question: 'How do I know if the program is right for me?',
						answer:
							'If you like finding meaningful insights from data and if you get excited by the prospect of informing business decisions through analysis and have an analytical bend of mind, then this program is meant for you. If you can clear the selection test (or are exempt) and are excited about the transition to Data Science , this program is meant for you.',
					},
					{
						question:
							'My current role does not include data exposure. Does it make sense for me to opt for this program?',
						answer:
							'Absolutely! Data Science is becoming a necessity for all industries and is no more a choice. Hence, there is a critical demand for quality data professionals and because the supply is constrained, this is one of the most lucrative career options across industries.',
					},
					{
						question:
							'What is the application process for the program and what are the timelines?',
						answer:
							'You can start the application process by applying. Applications have already started for the next batch',
					},
					{
						question:
							'Is there any minimum educational qualification required to take this program?',
						answer:
							'No. There is no degree of coding knowledge required to avail our program of Data Science.',
					},
				],
			},
		],
	},
	{
		pathname: '/programs/data-analytics',
		nameOfProgram: 'Data Analytics',
		durationInWeeks: '52',
		rating: 4.5,
		completedBy: 907,
		demoVideoURL: 'https://youtu.be/Y_wXF1Pe4AA',
		banner: DataAnalytics,
		description:
			'Prepare Yourself For Product-based IT Companies. A program that combines the two fields of Data Science and Product Management. The knowledge provided in this course will help you take your career to next level.',
		highlight: {
			firstRow: [
				'200+ hours of live sessions',
				'100+ Projects & Exercises',
				'Personalized Project feedback from Expert Professionals',
				'Flexible learning Schedule',
			],
			secondRow: [
				'1:1 with Industry Mentors',
				'Unlimited Interview opportunities',
				'24*7 Support',
				'No Cost EMI Option',
			],
		},
		overview: {
			description:
				'A complete program that caters to learning complete Data Science along with the complete domain knowledge of IT industry including product management and complete product life cycle. This is an end-to-end IT training program that gives you all the knowledge required to start and grow your career in Data Science. It covers everything from basic statistics and modelling techniques up to advanced machine learning, deep learning, artificial intelligence, NLP (Natural Language Processing), computer vision and other areas of AI.',
			dropdownQuestion: [
				{
					question: 'What does a Data Scientist do in an Finance product companies?',
					answer: (
						<>
							There are lots of exciting career prospects for Data Science in IT
							product companies. As a data scientist, you're often expected to
							effectively analyze problems, predict behavior, and develop
							solutions. Since IT products are often used for a variety of
							purposes, there's always a need for innovators in the field. While
							you'll be able to use your Data Science skills to benefit the
							company, you'll also have the opportunity to contribute to solving a
							lot of problems in the world. Data scientists in IT companies perform
							a range of different tasks that involve collecting, analyzing and
							interpreting large amounts of data.
							<br />
							These tasks include:
							<ul className='px-4'>
								<li>Self-Service Data Analysis</li>
								<li>Data Visualization</li>
								<li>Data integration</li>
								<li>Reporting</li>
								<li>Modeling</li>
								<li>Predictive Analytics</li>
								<li>Big data management</li>
								<li>Data Quality</li>
								<li>Business Intelligence</li>
								<li>Data warehousing</li>
								<li>Data Integration</li>
								<li>Data Mining</li>
							</ul>
						</>
					),
				},
				{
					question: 'Who can enroll for this course and what are the prerequisites?',
					answer:
						'This course is ideal for anyone looking to make a career in the IT industry. We at Excelsior have designed the course as beginner friendly and also for the professionals who want to narrow the data Science into the IT Sector. Every class you take with Excelsior will be taught by an instructor who has been a great asset in this field. Our experienced instructors have decades of experience helping clients around the world accelerate their business and careers, and will share first-hand knowledge to ensure your success.',
				},
				{
					question: 'What will you learn from this course?',
					answer:
						'This course is Designed by the GetExcelsior to equip yourself with the Industry Demanded Skills in 2022. This program will give you practical data analytics and data science knowledge needed to succeed in the IT sector. Learn the concepts of data science and IT. Gain transferable skills in user research, user design, prototyping, building artefacts, product analytics, digital transformation, fundamental procedures and structures. You will also learn Reconciliation And Introduction To Isda, Product Marketing And Gtm Strategy, Product Planning And Development, Tech 101 For Pms, Data Science For Product Management and Growth Product Management. This program is designed by Excelsior covers the latest analytics, Visualization and machine learning concepts. These include topics like data science essentials, big data ecosystem, where data has its origins, the role of databases in storing and retrieving data at scale, statistical analysis basics, and designing experiments. Upon completion of this program you will be prepared to take the roles of Business Analyst and Data Scientist. Tools covered: Python Programming R Programming Tableau Kera Spark Microsoft Power BI (Business Intelligence), Machine Learning, Deep Learning, NLP, Computer Vision and Other Areas of AI',
				},
				{
					question: 'What’s the scope after this course?',
					answer:
						'The scope of Data Science professionals in the IT product based companies in India in 2022 will only increase. This is because top companies like Google, Amazon, Microsoft are all hiring Data Science professionals. India has exploded on the global data science landscape. Data Science is a new but vibrant field in the market. The number of people employed in this field cannot even be estimated. The data science market is growing rapidly as the more data is used in business and other fields, the more data scientists will be needed. The average salary after this course ranges from ₹14,50,000 to ₹16,00,000 for freshers',
				},
			],
		},
		curriculum: {
			description: 'Learn the most Industry oriented curriculum. Our curriculum is updated every 3 months',
			curriculumData: [
				{
					title: 'Python',
					data: [
						'Introduction To Python',
						'Python Environment',
						'Executing Python',
						'Python Basic Syntax',
						'Python Variable Types',
						'Python Basic Operators',
						'Python Design Making',
						'Python Loops',
						'Python Numbers',
						'Python Strings',
						'Python Lists',
						'Python Tuples',
						'Python Dictionary',
						'Python Function',
						'Python Modules',
						'Python Files I/O',
						'Python Exception',
						'Python Classes & Objects',
						'Collections',
						'Debugging & Testing',
						'Regular Expression',
						'Essential Packages',
						'Testing',
					],
				},
				{
					title: 'Statistical and Mathematical Fundamentals',
					data: [
						'Statistics Concepts',
						'Linear Algebra',
						'Matrix Operations',
						'Calculus',
						'Probability',
						'Sampling Techniques',
						'Understanding Distributions',
					],
				},
				{
					title: 'Data Wrangling',
					data: [
						'Black Box Introduction To Machine Learning',
						'Microsoft Excel',
						'Sql',
						'Tableau',
						'Essential Numpy',
						'Pandas For Machine Learning',
						'Understanding Visualizations',
						'Power BI',
						'Alteryx',
					],
				},
			],
		},
		admissionProcedure: {
			description: 'Your steps to success',
			admissionStepForm: [
				{
					title: 'Explore',
					content:
						'Speak directly with a data scientist mentor and a career counselor to find the right path.',
				},
				{
					title: 'Enroll',
					content:
						"Enroll now to start your Data Science journey with the best online data science course, and take the first step towards a successful career. It's the number one skill companies need.",
				},
				{
					title: 'Enhance',
					content:
						'Learning advanced skills in Data Science, Machine Learning and Artificial Intelligence can make you 1000x more value and a more competitive candidate for more opportunities. Learn from scratch in 1 to 1 mentor sessions and do unlimited live projects to practice and enhance your profile.',
				},
				{
					title: 'Excel',
					content:
						'Now, it’s time to stand out in front of the best companies across different domains! Get placed in your dream job by learning how to perform great in interviews',
				},
			],
		},
		fee: [
			{
				typeOfPayment: 'Upfront Payment',
				question: [
					{
						name: 'Fee of the program',
						answer: 'The fee for this program is ₹129999 inclusive of taxes',
					},
					{
						name: 'Scholarship Options/Discounts',
						answer:
							'There are scholarship/discount options available on our programs at different times.',
					},
				],
			},
			{
				typeOfPayment: 'Income Sharing Agreement',
				question: [
					{
						name: 'What does ISA mean?',
						answer:
							'It means that you will not be paying the complete upfront fee and will share some part of your income after placement.',
					},
					{
						name: 'What are the terms of Excelsior’s ISA plan?',
						answer:
							'You will be paying 30% of the fees as registration and then 15% of your monthly fixed CTC for 12 months',
					},
				],
			},
			{
				typeOfPayment: 'EMI and Finanical AD',
				question: [
					{
						name: 'EMI Options',
						answer:
							'This is a 0% interest option. You can also pay in 6 EMI(s) of  ₹21666.50. The amount may vary for learners eligible for scholarships',
					},
					{
						name: 'Can you get a finanical AD',
						answer:
							'Yes, we have tie ups with various NBFC which provide education loan subject to you matching their eligibility criteria.',
					},
				],
			},
		],
		learningExperience: [
			{
				title: 'Profile Building',
				body: (
					<>
						Excelsior’s industry experts are the ultimate resource for anyone
						looking to build their profile
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Resume Building</li>
							<li style={{width: 'max-content'}}>LinkedIn Profile Building</li>
							<li style={{width: 'max-content'}}>Github Building</li>
						</ul>
					</>
				),
			},
			{
				title: 'Expert Sessions',
				body: (
					<>
						Excelsior offer expert advice on softskills and HR topics
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Counselling Sessions with Real Data Science experts</li>
							<li style={{width: 'max-content'}}>Prepare for HR Interviews</li>
							<li style={{width: 'max-content'}}>Learn Interviewers Psychology</li>
							<li style={{width: 'max-content'}}>Develop Soft-Skills</li>
						</ul>
					</>
				),
			},
			{
				title: 'Mock Interviews',
				body: (
					<>
						Get an upper hand in a data science job interview? Prepare for high pressure interview scenarios
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Live Interview Simulations</li>
							<li style={{width: 'max-content'}}>Expert Feedbacks</li>
							<li style={{width: 'max-content'}}>Prepare for real high pressure scenarios</li>
						</ul>
					</>
				),
			},
			{
				title: 'Project Guidance',
				body: (
					<>
						Work on unlimited live projects with the help of industry experts
						<ul className='pl-4 mt-2'>
							<li style={{width: 'max-content'}}>Work on Live Projects from your dream company</li>
							<li style={{width: 'max-content'}}>Practice the core skills by applying on real Life scenarios</li>
							<li style={{width: 'max-content'}}>Get feedback from experts to improve your knowledge and build your portfolio</li>
						</ul>
					</>
				),
			},
		],
		projects: [
			{
				firstRow: {
					title: 'Fake news detection',
					description:
						'Fake news can be dangerous. Your challenge is to build a Fake News classifier by applying ML algorithms such as Passive Aggressive Classifier and determine the accuracy of our model. You will be using various Python packages such as pandas, NumPy, and scikit-learn to determine the legitimacy of the information. With the help of this, you will be able to predict on the fly whether the information you acquired is authentic or not.',
				},
				secondRow: {
					title: 'Influence of global warming on food chain supply',
					description:
						'Global warming is influencing the climate pattern and leads to the change in food production. Unusual weather conditions and adaptation of technologies used in agriculture have a significant effect on the pattern of food production globally. In this project you will analyze the factors that are causing these changes, study the data visualization techniques to explain the patterns across different geographical locations, and predict the future trends.',
				},
			},
			{
				firstRow: {
					title: 'Segmentation of customer groups',
					description:
						'Customer segmentation helps companies to market the products in each segment more fitting to each individual customer. Build your clustering model using k-means clustering algorithms learned in machine learning. In this project, you will cluster the customers based on the features and their buying behaviour. Use the Elbow method, Silhouette Analysis method and DBSCAN. Once you have created various segments among customers, this model could be used by businesses to advertise their products to each segment in a way which will grab their attention.',
				},
				secondRow: {
					title: 'Diabetic Retinopathy',
					description:
						'Early treatment of pathological changes in the blood vessels of the eye can help prevent eye disease from progressing to blindness. In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening. We will be using data that has been pre-processed to extract In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening. We will be using data that has been pre-processed to extract the most important features from retina images.',
				},
			},
		],
		mentor: [
			{
				name: 'Shobhit Gupta',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'So, here is the question. If there was a person who worked with Microsoft, Facebook, Amazon, Uber and Yahoo just to name a few and then he started working in Fampay as an Engineering Manager. What kind of guidance would you expect from such a person? Would you be interested in asking him how to crack the interviews for these companies? Would this be an opportunity that would be difficult to miss on?? We believe it is definitely worth your effort.If you are someone aspiring to work in any of the large tech companies, or aspire to work in the startup world, his guidance would be invaluable.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Rohini Jain',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'In a world where its hard to hold on to a job due to high pressure and fast pace. Rohini has been excelling at one of the biggest companies of the world, CISCO for over 10 years.Rohini Jain is a technology enthusiast, an experienced Software Architect and a mother of a school-going kid and a baby daughter.  She has a wealth of experience to share with the students : ranging from her college days at MNNIT Allahabad, to her 4 years in industry at ST Ericsson, her MS degree from University of Texas and almost 11 years of work experience at world’s largest networking company Cisco.  Rohini leads a team of software developers and software test engineers who are responsible for implementing automation solutions to make the process of testing software more efficient.She can guide you through every step of your journey and help you land your dream job as well as excel in it.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Charu Chhabra',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'An Academician, A Data scientist, An Author, A researcher working on Artificial intelligence, data science, deep learning and computer vision. A technology enthusiast who loves to contribute in the field of research and development in numerous disciplines. IEEE reviewer, An author of books in collaboration with Genius publications Jaipur, author of several papers and chapters in leading international books and journals. Having almost 10 years of experience in industry and Academia and still counting more as an AI enthusiast.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Ashutosh Deoghre',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'A Data Analytics/Science Professional with about 7 years of experience.He loves solving complex business problems and delivering valuable insights via Data Analytics, Data Science & advanced data-driven methods. Has a very good experience working with structured, semi-structured, and unstructured data. Proficient in various Data Science tools & techniques like Python, R, SQL, Tableau, Data Analysis, Data Visualization, Text Mining, Quantitative Analysis, and Storytelling.He is also skilled in Data Mining, Statistics, Predictive Modeling, Machine Learning, NoSQL databases, Deep Neural Networks, Natural Language Processing, Computer Vision, and Big Data Technologies. ',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
		],
		reviews: [
			{
				firstRow: {
					name: 'A',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
				secondRow: {
					name: 'B',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
			},
			{
				firstRow: {
					name: 'C',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
				secondRow: {
					name: 'D',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
			},
			{
				firstRow: {
					name: 'E',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
				secondRow: {
					name: 'F',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
			},
		],
		faq: [
			{
				typeOfFAQ: 'Program',
				content: [
					{
						question: 'Who is the program intended for?',
						answer:
							'If you want to master Data Science in the IT industry, this program is for you. Whether you are a recent graduate or want to change your domain, you can join the program. We believe that you have the right to choose your career path.',
					},
					{
						question: 'Does Excelsior help me to get a job?',
						answer: (
							<>
								Our career development team will help you prepare a resume,
								conduct mock interviews, and prepare you. We will also connect you
								with our recruitment partners, but before we do so, you must clear
								our certification to ensure that you are eligible for the job.
								<br />
								Access to Opportunities The student's profile will be distributed
								in Excelsior’s company network. For learners with more than 5
								years of experience, switching these opportunities is more
								difficult than others. For them, it is more about how to instill
								data-driven leadership in their current work and plan to
								transition to Data Science in the medium to long term.
							</>
						),
					},
					{
						question:
							'I work full-time but I want to take this program. Do you also offer part-time programs?',
						answer:
							'We do offer part-time programs. You can select the part-time program option at the time of filling the application.',
					},
					{
						question: 'Will I get a certificate on Program completion?',
						answer:
							'After the program is completed, we will evaluate you to make sure you are ready for work. If you clear the evaluation, you will get an Excelsior certificate. Our program certificate is of high value among our recruitment partners, so you will receive a higher priority than other applicants.',
					},
					{
						question:
							'What should I NOT expect from the Certification in Data Scientist program?',
						answer:
							'The program is NOT going to be easy. It will be requiring at least 7-8 hours of time commitment per week, applying new concepts, and executing industry-relevant projects.',
					},
					{
						question:
							'Which topics are going to be covered as part of the program?',
						answer:
							'The program is designed for working professionals looking for a transition into the data domain. Considering the requirements of different data roles in the industry, the curriculum is curated to prepared you for those roles .',
					},
					{
						question: 'What type of learning experience should I expect?',
						answer:
							'The content will be a mix of interactive lectures from industry leaders as well as world-renowned faculty. Additionally, the program comprises live lectures or hangout sessions dedicated to solving your academic queries and reinforcing learning.',
					},
					{
						question: 'Can I attend the program online?',
						answer: 'The entire program will take place online.',
					},
					{
						question:
							'How will my doubts/questions be addressed in an online program?',
						answer:
							'All your doubts and queries can be solved in live online classes and sessions by industry experts and facilitators. As there is no separate query solving sessions or forums, you can ask as many doubts and problems from your respective faculty during or at the end of the live class.',
					},
					{
						question: 'What are the system requirements to take this program?',
						answer:
							'You need to have a laptop/desktop with a minimum configuration of 1GHz Processor, 4GB RAM, 120GB Hard Disc, Mic, Internet Connection (in case you are taking online sessions)',
					},
					{
						question:
							'I am not a resident of India, will I still get a job after program completion?',
						answer:
							'Yes, we will connect you to job opportunities through our vast employer network in India.',
					},
				],
			},
			{
				typeOfFAQ: 'Admission',
				content: [
					{
						question: 'What is the Admission Process?',
						answer: 'Redirect to Admission Procedure Section of the website',
					},
					{
						question: 'Do I need to have a background in Computer Science?',
						answer:
							'A computer science background is not required but a true interest and deep passion in computer science are required to learn these technologies.',
					},
					{
						question: 'I am experienced. Can I still take this course?',
						answer: 'We would love to have you with us.',
					},
				],
			},
			{
				typeOfFAQ: 'Payment',
				content: [
					{
						question: 'What is the fee for the Data Science program I choose?',
						answer:
							'Please consider going through the Affordable Program Fee Structure here. If there is any concern regarding the finances, feel free to contact us and let us know. We do everything possible to make sure that money doesn’t become an obstacle in your path of learning and building a successful career.',
					},
					{
						question: 'Do I need to pay registration fees?',
						answer:
							'Yes. You need to pay the registration fee for which you can contact us to get the updated information.',
					},
					{
						question: 'Are there any discounts available?',
						answer:
							'We offer scholarships based on your Interview score. Additionally, there are more offers available on our programs at different times. You can get in touch with our counselors to know more.',
					},
					{
						question: 'How does the payment model work?',
						answer: 'Refer to fees section of the website',
					},
					{
						question: 'How does the Scholarship Scheme work?',
						answer:
							'We offer various scholarship plans where candidates can get a waiver on program fees. Candidates need to qualify Interview to avail of this scholarship. The waiver is based on the merit/score of the Interview.',
					},
					{
						question: 'What happens if I drop out midway?',
						answer: (
							<>
								If you wish to drop out within the first 10 days:
								{/* <br /> */}
								<ul className='pl-4 mb-2'>
									<li>
										We will refund any upfront payments and will terminate the
										ISA, if applicable.
									</li>
								</ul>
								If you wish to drop out after the first 10 days:
								<ul className='pl-4 mb-0'>
									<li>
										We will not refund any upfront payments and the ISA contract
										will stay valid, if applicable.
									</li>
								</ul>
							</>
						),
					},
					{
						question: 'Will, there be any deductions on the refund amount?',
						answer:
							'Yes, the payment gateway charges of 2% to 3% will be deducted based on the payment method.',
					},
				],
			},
			{
				typeOfFAQ: 'Selection Criteria',
				content: [
					{
						question: 'How do I know if the program is right for me?',
						answer:
							'If you like finding meaningful insights from data and if you get excited by the prospect of informing business decisions through analysis and have an analytical bend of mind, then this program is meant for you. If you can clear the selection test (or are exempt) and are excited about the transition to Data Science , this program is meant for you.',
					},
					{
						question:
							'My current role does not include data exposure. Does it make sense for me to opt for this program?',
						answer:
							'Absolutely! Data Science is becoming a necessity for all industries and is no more a choice. Hence, there is a critical demand for quality data professionals and because the supply is constrained, this is one of the most lucrative career options across industries.',
					},
					{
						question:
							'What is the application process for the program and what are the timelines?',
						answer:
							'You can start the application process by applying. Applications have already started for the next batch',
					},
					{
						question:
							'Is there any minimum educational qualification required to take this program?',
						answer:
							'No. There is no degree of coding knowledge required to avail our program of Data Science.',
					},
				],
			},
		],
	},
	{
		pathname: '/programs/python-bootcamp',
		nameOfProgram: 'Python Bootcamp',
		durationInWeeks: '52',
		rating: 4.5,
		completedBy: 907,
		demoVideoURL: 'https://youtu.be/Y_wXF1Pe4AA',
		banner: PythonBootcamp,
		description:
			'Prepare Yourself For Product-based IT Companies. A program that combines the two fields of Data Science and Product Management. The knowledge provided in this course will help you take your career to next level.',
		highlight: {
			firstRow: [
				'200+ hours of live sessions',
				'100+ Projects & Exercises',
				'Personalized Project feedback from Expert Professionals',
				'Flexible learning Schedule',
			],
			secondRow: [
				'1:1 with Industry Mentors',
				'Unlimited Interview opportunities',
				'24*7 Support',
				'No Cost EMI Option',
			],
		},
		overview: {
			description:
				'A complete program that caters to learning complete Data Science along with the complete domain knowledge of IT industry including product management and complete product life cycle. This is an end-to-end IT training program that gives you all the knowledge required to start and grow your career in Data Science. It covers everything from basic statistics and modelling techniques up to advanced machine learning, deep learning, artificial intelligence, NLP (Natural Language Processing), computer vision and other areas of AI.',
			dropdownQuestion: [
				{
					question: 'What does a Data Scientist do in an Finance product companies?',
					answer: (
						<>
							There are lots of exciting career prospects for Data Science in IT
							product companies. As a data scientist, you're often expected to
							effectively analyze problems, predict behavior, and develop
							solutions. Since IT products are often used for a variety of
							purposes, there's always a need for innovators in the field. While
							you'll be able to use your Data Science skills to benefit the
							company, you'll also have the opportunity to contribute to solving a
							lot of problems in the world. Data scientists in IT companies perform
							a range of different tasks that involve collecting, analyzing and
							interpreting large amounts of data.
							<br />
							These tasks include:
							<ul className='px-4'>
								<li>Self-Service Data Analysis</li>
								<li>Data Visualization</li>
								<li>Data integration</li>
								<li>Reporting</li>
								<li>Modeling</li>
								<li>Predictive Analytics</li>
								<li>Big data management</li>
								<li>Data Quality</li>
								<li>Business Intelligence</li>
								<li>Data warehousing</li>
								<li>Data Integration</li>
								<li>Data Mining</li>
							</ul>
						</>
					),
				},
				{
					question: 'Who can enroll for this course and what are the prerequisites?',
					answer:
						'This course is ideal for anyone looking to make a career in the IT industry. We at Excelsior have designed the course as beginner friendly and also for the professionals who want to narrow the data Science into the IT Sector. Every class you take with Excelsior will be taught by an instructor who has been a great asset in this field. Our experienced instructors have decades of experience helping clients around the world accelerate their business and careers, and will share first-hand knowledge to ensure your success.',
				},
				{
					question: 'What will you learn from this course?',
					answer:
						'This course is Designed by the GetExcelsior to equip yourself with the Industry Demanded Skills in 2022. This program will give you practical data analytics and data science knowledge needed to succeed in the IT sector. Learn the concepts of data science and IT. Gain transferable skills in user research, user design, prototyping, building artefacts, product analytics, digital transformation, fundamental procedures and structures. You will also learn Reconciliation And Introduction To Isda, Product Marketing And Gtm Strategy, Product Planning And Development, Tech 101 For Pms, Data Science For Product Management and Growth Product Management. This program is designed by Excelsior covers the latest analytics, Visualization and machine learning concepts. These include topics like data science essentials, big data ecosystem, where data has its origins, the role of databases in storing and retrieving data at scale, statistical analysis basics, and designing experiments. Upon completion of this program you will be prepared to take the roles of Business Analyst and Data Scientist. Tools covered: Python Programming R Programming Tableau Kera Spark Microsoft Power BI (Business Intelligence), Machine Learning, Deep Learning, NLP, Computer Vision and Other Areas of AI',
				},
				{
					question: 'What’s the scope after this course?',
					answer:
						'The scope of Data Science professionals in the IT product based companies in India in 2022 will only increase. This is because top companies like Google, Amazon, Microsoft are all hiring Data Science professionals. India has exploded on the global data science landscape. Data Science is a new but vibrant field in the market. The number of people employed in this field cannot even be estimated. The data science market is growing rapidly as the more data is used in business and other fields, the more data scientists will be needed. The average salary after this course ranges from ₹14,50,000 to ₹16,00,000 for freshers',
				},
			],
		},
		curriculum: {
			description: 'Learn the most Industry oriented curriculum. Our curriculum is updated every 3 months',
			curriculumData: [
				{
					title: 'Python',
					data: [
						'Introduction To Python',
						'Python Environment',
						'Executing Python',
						'Python Basic Syntax',
						'Python Variable Types',
						'Python Basic Operators',
						'Python Design Making',
						'Python Loops',
						'Python Numbers',
						'Python Strings',
						'Python Lists',
						'Python Tuples',
						'Python Dictionary',
						'Python Function',
						'Python Modules',
						'Python Files I/O',
						'Python Exception',
						'Python Classes & Objects',
						'Collections',
						'Debugging & Testing',
						'Regular Expression',
						'Essential Packages',
						'Testing',
					],
				},
			],
		},
		admissionProcedure: {
			description: 'Your steps to success',
			admissionStepForm: [
				{
					title: 'Explore',
					content:
						'Speak directly with a data scientist mentor and a career counselor to find the right path.',
				},
				{
					title: 'Enroll',
					content:
						"Enroll now to start your Data Science journey with the best online data science course, and take the first step towards a successful career. It's the number one skill companies need.",
				},
				{
					title: 'Enhance',
					content:
						'Learning advanced skills in Data Science, Machine Learning and Artificial Intelligence can make you 1000x more value and a more competitive candidate for more opportunities. Learn from scratch in 1 to 1 mentor sessions and do unlimited live projects to practice and enhance your profile.',
				},
				{
					title: 'Excel',
					content:
						'Now, it’s time to stand out in front of the best companies across different domains! Get placed in your dream job by learning how to perform great in interviews',
				},
			],
		},
		fee: [
			{
				typeOfPayment: 'Upfront Payment',
				question: [
					{
						name: 'Fee of the program',
						answer: 'The fee for this program is ₹129999 inclusive of taxes',
					},
					{
						name: 'Scholarship Options/Discounts',
						answer:
							'There are scholarship/discount options available on our programs at different times.',
					},
				],
			},
			{
				typeOfPayment: 'Income Sharing Agreement',
				question: [
					{
						name: 'What does ISA mean?',
						answer:
							'It means that you will not be paying the complete upfront fee and will share some part of your income after placement.',
					},
					{
						name: 'What are the terms of Excelsior’s ISA plan?',
						answer:
							'You will be paying 30% of the fees as registration and then 15% of your monthly fixed CTC for 12 months',
					},
				],
			},
			{
				typeOfPayment: 'EMI and Finanical AD',
				question: [
					{
						name: 'EMI Options',
						answer:
							'This is a 0% interest option. You can also pay in 6 EMI(s) of  ₹21666.50. The amount may vary for learners eligible for scholarships',
					},
					{
						name: 'Can you get a finanical AD',
						answer:
							'Yes, we have tie ups with various NBFC which provide education loan subject to you matching their eligibility criteria.',
					},
				],
			},
		],
		learningExperience: [
			{
				title: 'Class Notifications',
				body: 'Class Notifications Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus consequuntur ex mollitia pariatur enim non at, aliquid itaque quis repellat repellendus nulla qui sint et ut. Nisi, dolorem animi.',
			},
			{
				title: 'Hackathons',
				body: 'Hackathons Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus consequuntur ex mollitia pariatur enim non at, aliquid itaque quis repellat repellendus nulla qui sint et ut. Nisi, dolorem animi.',
			},
			{
				title: 'Career Services',
				body: 'Career Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus consequuntur ex mollitia pariatur enim non at, aliquid itaque quis repellat repellendus nulla qui sint et ut. Nisi, dolorem animi.',
			},
			{
				title: 'Major Announcements',
				body: 'Major Announcements Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus consequuntur ex mollitia pariatur enim non at, aliquid itaque quis repellat repellendus nulla qui sint et ut. Nisi, dolorem animi.',
			},
		],
		projects: [
			{
				firstRow: {
					title: 'Fake news detection',
					description:
						'Fake news can be dangerous. Your challenge is to build a Fake News classifier by applying ML algorithms such as Passive Aggressive Classifier and determine the accuracy of our model. You will be using various Python packages such as pandas, NumPy, and scikit-learn to determine the legitimacy of the information. With the help of this, you will be able to predict on the fly whether the information you acquired is authentic or not.',
				},
				secondRow: {
					title: 'Influence of global warming on food chain supply',
					description:
						'Global warming is influencing the climate pattern and leads to the change in food production. Unusual weather conditions and adaptation of technologies used in agriculture have a significant effect on the pattern of food production globally. In this project you will analyze the factors that are causing these changes, study the data visualization techniques to explain the patterns across different geographical locations, and predict the future trends.',
				},
			},
			{
				firstRow: {
					title: 'Segmentation of customer groups',
					description:
						'Customer segmentation helps companies to market the products in each segment more fitting to each individual customer. Build your clustering model using k-means clustering algorithms learned in machine learning. In this project, you will cluster the customers based on the features and their buying behaviour. Use the Elbow method, Silhouette Analysis method and DBSCAN. Once you have created various segments among customers, this model could be used by businesses to advertise their products to each segment in a way which will grab their attention.',
				},
				secondRow: {
					title: 'Diabetic Retinopathy',
					description:
						'Early treatment of pathological changes in the blood vessels of the eye can help prevent eye disease from progressing to blindness. In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening. We will be using data that has been pre-processed to extract In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening. We will be using data that has been pre-processed to extract the most important features from retina images.',
				},
			},
		],
		mentor: [
			{
				name: 'Shobhit Gupta',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'So, here is the question. If there was a person who worked with Microsoft, Facebook, Amazon, Uber and Yahoo just to name a few and then he started working in Fampay as an Engineering Manager. What kind of guidance would you expect from such a person? Would you be interested in asking him how to crack the interviews for these companies? Would this be an opportunity that would be difficult to miss on?? We believe it is definitely worth your effort.If you are someone aspiring to work in any of the large tech companies, or aspire to work in the startup world, his guidance would be invaluable.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Rohini Jain',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'In a world where its hard to hold on to a job due to high pressure and fast pace. Rohini has been excelling at one of the biggest companies of the world, CISCO for over 10 years.Rohini Jain is a technology enthusiast, an experienced Software Architect and a mother of a school-going kid and a baby daughter.  She has a wealth of experience to share with the students : ranging from her college days at MNNIT Allahabad, to her 4 years in industry at ST Ericsson, her MS degree from University of Texas and almost 11 years of work experience at world’s largest networking company Cisco.  Rohini leads a team of software developers and software test engineers who are responsible for implementing automation solutions to make the process of testing software more efficient.She can guide you through every step of your journey and help you land your dream job as well as excel in it.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Charu Chhabra',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'An Academician, A Data scientist, An Author, A researcher working on Artificial intelligence, data science, deep learning and computer vision. A technology enthusiast who loves to contribute in the field of research and development in numerous disciplines. IEEE reviewer, An author of books in collaboration with Genius publications Jaipur, author of several papers and chapters in leading international books and journals. Having almost 10 years of experience in industry and Academia and still counting more as an AI enthusiast.',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
			{
				name: 'Ashutosh Deoghre',
				areaOfExpert: 'Data Science',
				location: 'Chennai ,India',
				description:
					'A Data Analytics/Science Professional with about 7 years of experience.He loves solving complex business problems and delivering valuable insights via Data Analytics, Data Science & advanced data-driven methods. Has a very good experience working with structured, semi-structured, and unstructured data. Proficient in various Data Science tools & techniques like Python, R, SQL, Tableau, Data Analysis, Data Visualization, Text Mining, Quantitative Analysis, and Storytelling.He is also skilled in Data Mining, Statistics, Predictive Modeling, Machine Learning, NoSQL databases, Deep Neural Networks, Natural Language Processing, Computer Vision, and Big Data Technologies. ',
				imageURL:
					'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
			},
		],
		reviews: [
			{
				firstRow: {
					name: 'A',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
				secondRow: {
					name: 'B',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
			},
			{
				firstRow: {
					name: 'C',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
				secondRow: {
					name: 'D',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
			},
			{
				firstRow: {
					name: 'E',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
				secondRow: {
					name: 'F',
					imageURL:
						'https://acorn-react-classic-dashboard.coloredstrategies.com/img/profile/profile-1.webp',
					rating: 4.5,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi quas quos necessitatibus earum veniam, voluptatem voluptatibus, cum magnam amet eos dignissimos non reprehenderit minus dolor officiis ea quibusdam fugit!',
				},
			},
		],
		faq: [
			{
				typeOfFAQ: 'Program',
				content: [
					{
						question: 'Who is the program intended for?',
						answer:
							'If you want to master Data Science in the IT industry, this program is for you. Whether you are a recent graduate or want to change your domain, you can join the program. We believe that you have the right to choose your career path.',
					},
					{
						question: 'Does Excelsior help me to get a job?',
						answer: (
							<>
								Our career development team will help you prepare a resume,
								conduct mock interviews, and prepare you. We will also connect you
								with our recruitment partners, but before we do so, you must clear
								our certification to ensure that you are eligible for the job.
								<br />
								Access to Opportunities The student's profile will be distributed
								in Excelsior’s company network. For learners with more than 5
								years of experience, switching these opportunities is more
								difficult than others. For them, it is more about how to instill
								data-driven leadership in their current work and plan to
								transition to Data Science in the medium to long term.
							</>
						),
					},
					{
						question:
							'I work full-time but I want to take this program. Do you also offer part-time programs?',
						answer:
							'We do offer part-time programs. You can select the part-time program option at the time of filling the application.',
					},
					{
						question: 'Will I get a certificate on Program completion?',
						answer:
							'After the program is completed, we will evaluate you to make sure you are ready for work. If you clear the evaluation, you will get an Excelsior certificate. Our program certificate is of high value among our recruitment partners, so you will receive a higher priority than other applicants.',
					},
					{
						question:
							'What should I NOT expect from the Certification in Data Scientist program?',
						answer:
							'The program is NOT going to be easy. It will be requiring at least 7-8 hours of time commitment per week, applying new concepts, and executing industry-relevant projects.',
					},
					{
						question:
							'Which topics are going to be covered as part of the program?',
						answer:
							'The program is designed for working professionals looking for a transition into the data domain. Considering the requirements of different data roles in the industry, the curriculum is curated to prepared you for those roles .',
					},
					{
						question: 'What type of learning experience should I expect?',
						answer:
							'The content will be a mix of interactive lectures from industry leaders as well as world-renowned faculty. Additionally, the program comprises live lectures or hangout sessions dedicated to solving your academic queries and reinforcing learning.',
					},
					{
						question: 'Can I attend the program online?',
						answer: 'The entire program will take place online.',
					},
					{
						question:
							'How will my doubts/questions be addressed in an online program?',
						answer:
							'All your doubts and queries can be solved in live online classes and sessions by industry experts and facilitators. As there is no separate query solving sessions or forums, you can ask as many doubts and problems from your respective faculty during or at the end of the live class.',
					},
					{
						question: 'What are the system requirements to take this program?',
						answer:
							'You need to have a laptop/desktop with a minimum configuration of 1GHz Processor, 4GB RAM, 120GB Hard Disc, Mic, Internet Connection (in case you are taking online sessions)',
					},
					{
						question:
							'I am not a resident of India, will I still get a job after program completion?',
						answer:
							'Yes, we will connect you to job opportunities through our vast employer network in India.',
					},
				],
			},
			{
				typeOfFAQ: 'Admission',
				content: [
					{
						question: 'What is the Admission Process?',
						answer: 'Redirect to Admission Procedure Section of the website',
					},
					{
						question: 'Do I need to have a background in Computer Science?',
						answer:
							'A computer science background is not required but a true interest and deep passion in computer science are required to learn these technologies.',
					},
					{
						question: 'I am experienced. Can I still take this course?',
						answer: 'We would love to have you with us.',
					},
				],
			},
			{
				typeOfFAQ: 'Payment',
				content: [
					{
						question: 'What is the fee for the Data Science program I choose?',
						answer:
							'Please consider going through the Affordable Program Fee Structure here. If there is any concern regarding the finances, feel free to contact us and let us know. We do everything possible to make sure that money doesn’t become an obstacle in your path of learning and building a successful career.',
					},
					{
						question: 'Do I need to pay registration fees?',
						answer:
							'Yes. You need to pay the registration fee for which you can contact us to get the updated information.',
					},
					{
						question: 'Are there any discounts available?',
						answer:
							'We offer scholarships based on your Interview score. Additionally, there are more offers available on our programs at different times. You can get in touch with our counselors to know more.',
					},
					{
						question: 'How does the payment model work?',
						answer: 'Refer to fees section of the website',
					},
					{
						question: 'How does the Scholarship Scheme work?',
						answer:
							'We offer various scholarship plans where candidates can get a waiver on program fees. Candidates need to qualify Interview to avail of this scholarship. The waiver is based on the merit/score of the Interview.',
					},
					{
						question: 'What happens if I drop out midway?',
						answer: (
							<>
								If you wish to drop out within the first 10 days:
								{/* <br /> */}
								<ul className='pl-4 mb-2'>
									<li>
										We will refund any upfront payments and will terminate the
										ISA, if applicable.
									</li>
								</ul>
								If you wish to drop out after the first 10 days:
								<ul className='pl-4 mb-0'>
									<li>
										We will not refund any upfront payments and the ISA contract
										will stay valid, if applicable.
									</li>
								</ul>
							</>
						),
					},
					{
						question: 'Will, there be any deductions on the refund amount?',
						answer:
							'Yes, the payment gateway charges of 2% to 3% will be deducted based on the payment method.',
					},
				],
			},
			{
				typeOfFAQ: 'Selection Criteria',
				content: [
					{
						question: 'How do I know if the program is right for me?',
						answer:
							'If you like finding meaningful insights from data and if you get excited by the prospect of informing business decisions through analysis and have an analytical bend of mind, then this program is meant for you. If you can clear the selection test (or are exempt) and are excited about the transition to Data Science , this program is meant for you.',
					},
					{
						question:
							'My current role does not include data exposure. Does it make sense for me to opt for this program?',
						answer:
							'Absolutely! Data Science is becoming a necessity for all industries and is no more a choice. Hence, there is a critical demand for quality data professionals and because the supply is constrained, this is one of the most lucrative career options across industries.',
					},
					{
						question:
							'What is the application process for the program and what are the timelines?',
						answer:
							'You can start the application process by applying. Applications have already started for the next batch',
					},
					{
						question:
							'Is there any minimum educational qualification required to take this program?',
						answer:
							'No. There is no degree of coding knowledge required to avail our program of Data Science.',
					},
				],
			},
		],
	},
];

export default Program_DB_Master;

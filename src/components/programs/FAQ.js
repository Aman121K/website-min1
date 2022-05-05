import React from 'react';
import { Collapse } from 'antd';

function FAQ({ faqData }) {
	const { Panel } = Collapse;
	return (
		<div className='mt-5'>
			<h3 className='mb-3' style={{ fontSize: '24px', fontWeight: 'bolder' }}>
				Frequently Asked Questions
			</h3>

			<Collapse accordion expandIconPosition='right'>
				{faqData.map(({ typeOfFAQ, content }) => (
					<Panel header={typeOfFAQ} key={typeOfFAQ}>
						<Collapse accordion>
							{content.map(({ question, answer }) => (
								<Panel header={question} key={question}>
									<p>{answer}</p>
								</Panel>
							))}
						</Collapse>
					</Panel>
				))}
			</Collapse>
		</div>
	);
}

export default FAQ;

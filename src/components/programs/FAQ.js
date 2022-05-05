import React from 'react';
import { Collapse } from 'antd';

function FAQ({ faqData }) {
	const { Panel } = Collapse;
	return (
		<div className='mt-5'>
			<h2 className='mb-3 custom-text-primary'>Frequently Asked Questions</h2>

			<Collapse accordion expandIconPosition='right'>
				{faqData.map(({ typeOfFAQ, content }) => (
					<Panel header={typeOfFAQ} key={typeOfFAQ}>
						<Collapse accordion>
							{content.map(({ question, answer }) => (
								<Panel header={question} key={question}>
									<h4 style={{ lineHeight: '1.5' }}>{answer}</h4>
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

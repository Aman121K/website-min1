import { Collapse } from 'antd';
import React from 'react';

function OverView({ overview }) {
	const { Panel } = Collapse;
	return (
		<div className='mt-5'>
			<h2 className='overview_heading'>Overview Of the Course</h2>
			<h3 className='overview_text mt-2'>{overview.description}</h3>
			<h3 className='custom-text-primary mb-3'>Know more about the Course</h3>
			<Collapse accordion expandIconPosition='right'>
				{overview.dropdownQuestion.map((e, index) => (
					<Panel header={e.question} key={index}>
						<p>{e.answer}</p>
					</Panel>
				))}
			</Collapse>

			{/* <Dropdown className="overview_dropdown" overlay={menu}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Know more about the Course <DownOutlined />
        </a>
      </Dropdown> */}
			{/* <p className='overview_ans'>{ans}</p> */}
		</div>
	);
}

export default OverView;

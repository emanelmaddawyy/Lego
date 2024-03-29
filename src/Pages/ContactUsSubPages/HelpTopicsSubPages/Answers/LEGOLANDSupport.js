import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackButton from '../../../../components/BackButton/BackButton';
import Header from '../../../../components/Header/Header';
import HelpTopicsHeader from '../../../../components/HelpTopicsHeader/HelpTopicsHeader';
import OurService from '../../../../components/OurService/OurService';
import './Answers.css';

const LEGOLANDSupport = (props) => {
	return (
		<div id='Answers'>
			<Header />

			<HelpTopicsHeader />

			<div className='row p-0 m-0 w-100'>
				<div className='col-12'>
					<div className='row m-0'>
						<div className='col-12'>
						<BackButton data="Back to all Help Topics" />
							<h1 id='title'>Contacting LEGOLAND® Support</h1>
						</div>
					</div>

					<div className='row m-0' id='main-content'>
						<div className='col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 p-0'>
							<p className='answer'>
								LEGOLAND® Parks and Discovery Centers are located all over the
								world and are great places to spend a family vacation or outing!
							</p>

							<p className='answer'>
								If you have a question or need information, go to LEGOLAND.com.
								Click the ‘Contact’ button on the banner at the top. From there,
								select the location you’re interested in. You’ll find a contact
								form or the phone number and email address to contact that
								location!
							</p>
						</div>
					</div>
				</div>
			</div>
			<OurService />
		</div>
	);
};

export default withRouter(LEGOLANDSupport);

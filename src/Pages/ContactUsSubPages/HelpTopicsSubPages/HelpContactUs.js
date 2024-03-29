import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import OurService from '../../../components/OurService/OurService';
import MediaPopular from '../../../components/MediaPopular/MediaPopular';
import MediaArticle2 from '../../../components/MediaArticle/MediaArticle2';
import HelpTopicsHeader from '../../../components/HelpTopicsHeader/HelpTopicsHeader';
import './HelpTopicsSubPages.css';
import BackButton from '../../../components/BackButton/BackButton';

const HelpContactUs = (props) => {
	return (
		<div>
			<Header />

            <HelpTopicsHeader/>

			<div className='row p-0 m-0 w-100'>
				<div className='col-lg-8 order-lg-1 chooseTopic'>
					<div className='layout__main-inner align-items-center'>
						<div className='grid--center'>
							<div className='grid__item'>
								<div className='row m-0'>
									<div className='col-12'>
									<BackButton data="Back to all Help Topics" />
									</div>
									<div className='col-12' id='title'>
										Contact Us - Contact Us
									</div>
									<div className='col-12'>
										<p id='subtitle'>
											Got a question about a LEGO® set, need some help building, or just want to chat with a LEGO® expert? Get in touch with LEGO® Customer Service here.
										</p>
									</div>
								</div>
								<div className='row m-0' id='main-content'>
									<div className='col-12'>
										<Link to='/covidresponse'>
											<MediaArticle2
												text={'Our updates on COVID-19'}
											/>
										</Link>
										<Link to='/contactingcustomerservice'>
											<MediaArticle2 text={'Contacting LEGO® Customer Service'} />
										</Link>
										<Link to='/sellinglego'>
											<MediaArticle2
												text={
													'Selling LEGO® products in your shop'
												}
											/>
										</Link>
										<Link to='/coolcreation'>
											<MediaArticle2 text={'Cool Creations'} />
										</Link>
										<Link to='/customerserviceteam'>
											<MediaArticle2 text={'Meet our Customer Service team!'} />
										</Link>
										<Link to='/jobswithlego'>
											<MediaArticle2
												text={'Jobs with The LEGO Group'}
											/>
										</Link>
										<Link to='/writelegolife'>
											<MediaArticle2 text={'Write to LEGO® Life'} />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='col-lg-4 order-lg-2 p-0' id='popularArticles'>
					<section className='content-item__secondary p-0 m-0'>
						<div className='content-item__secondary-inner p-5'>
							<MediaPopular />
						</div>
					</section>
				</div>
			</div>

			<OurService />
		</div>
	);
};

export default withRouter(HelpContactUs);

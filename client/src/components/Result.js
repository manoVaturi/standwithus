import React from 'react';
import '../styles/results.css';
import 'react-slideshow-image/dist/styles.css';
import { Navigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Slide } from 'react-slideshow-image';
import { postEmail } from '../helpers/helper.js';
import { CountAnswer } from '../helpers/helper';
import ResultSharePopup from './popups/ResultSharePopup.js';

export default function Result() {
	const [isOpen, setIsOpen] = useState(true);
	const [isSubmit, setIsSubmit] = useState(false);
	const {
		questions: { queue, answers },
		result: { result },
	} = useSelector((state) => state);

	const sponserImgs = [
		'https://img1.wsimg.com/isteam/ip/96f2bb5f-1f2e-4dd9-9d45-3a3c8bf46fac/3.jpeg/:/rs=w:1440,h:1440',
		'https://img1.wsimg.com/isteam/ip/96f2bb5f-1f2e-4dd9-9d45-3a3c8bf46fac/2.jpeg/:/rs=w:1440,h:1440',
		'https://img1.wsimg.com/isteam/ip/96f2bb5f-1f2e-4dd9-9d45-3a3c8bf46fac/6.jpeg/:/rs=w:1440,h:1440',
		'https://img1.wsimg.com/isteam/ip/96f2bb5f-1f2e-4dd9-9d45-3a3c8bf46fac/1.jpeg/:/rs=w:1440,h:1440',
		'https://img1.wsimg.com/isteam/ip/96f2bb5f-1f2e-4dd9-9d45-3a3c8bf46fac/4.jpeg/:/rs=w:1440,h:1440',
	];
	const handleCallbackResponse = async (res) => {
		var userObject = jwt_decode(res.credential);
		try {
			await postEmail(
				`https://israelihighlevel-api.onrender.com/api/lottery`,
				userObject.email
			).then(() => {
				setIsSubmit(true);
				return <Navigate to='/end' replace={true} />;
			});
		} catch (error) {
			console.log(error);
		}
	};
	/* global google */
	useEffect(() => {
		google.accounts.id.initialize(
			{
				client_id:
					'847428354558-ltett7db3srs6jiegd7r8ot036048dh3.apps.googleusercontent.com',
				callback: handleCallbackResponse,
			},
			[]
		);
		google.accounts.id.renderButton(document.getElementById('signInDiv'), {
			theme: 'outline',
			size: 'medium',
			locale: 'he-IL',
		});
	});

	const closePoup = () => {
		setIsOpen(false);
	};

	const totalPoints = CountAnswer(result, answers);
	console.log(queue.length);

	if (queue[0] == null) {
		return <Navigate to='../' replace={true} />;
	}
	if (isSubmit) {
		return <Navigate to='/end' replace={true} />;
	} else if (result && !isSubmit) {
		return (
			<div className='container-result'>
				<div className='logo'>
					<img
						src='https://img1.wsimg.com/isteam/ip/96f2bb5f-1f2e-4dd9-9d45-3a3c8bf46fac/swu_logo.png/:/rs=w:1440,h:1440'
						alt='logo'
					/>
				</div>
				<div className='result flex-center'>
					<div className='title-box'>
						<span className=''>
							הרשמו באמצעות חשבון גוגל והיכנסו להגרלה השווה שלנו
						</span>
						<br />
					</div>
					<div className='center'>
						<div id='signInDiv'></div>
					</div>
				</div>

				<div className='slide-box'>
					<Slide slidesToShow={3} autoplay='true' duration='500'>
						<div key={5}>
							<a href='https://organicabynature.com/'>
								<img
									className='sponser_logo'
									src='https://img1.wsimg.com/isteam/ip/96f2bb5f-1f2e-4dd9-9d45-3a3c8bf46fac/logo%20final.jpg/:/rs=w:1440,h:1440'
									alt=''
								/>
							</a>
						</div>
						{sponserImgs.map((slideImage, index) => {
							return (
								<div key={index}>
									<img className='sponser_logo' src={slideImage} alt='' />
								</div>
							);
						})}
					</Slide>
				</div>

				{isOpen && (
					<ResultSharePopup
						handleClose={closePoup}
						length={queue.length}
						totalPoints={totalPoints}
					/>
				)}
				<div>
					<span>Contribute by Or Mano Vaturi </span>
				</div>
			</div>
		);
	}
}

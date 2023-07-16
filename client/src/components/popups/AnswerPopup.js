import React from 'react';
import { Link } from 'react-router-dom';

const AnswerPopup = ({ question, handleClose, handleEnd }) => {
	const img = question.answerImage;
	return (
		<div className='popup-box'>
			<div className='box w3-container w3-center w3-animate-zoom'>
				<div className='box-title'>{question.answerTitle}</div>
				<div className='box-text'>{question.answerText}</div>
				{question.answerLink ? (
					<div className='box-link'>
						<a
							className='question-link'
							href={question.answerLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							{question.answerLinkAlt}
						</a>
					</div>
				) : (
					''
				)}

				<div className='center'>
					<img className='answer-img' src={img} alt='' />
				</div>
				{question.id === 15 ? (
					<div className='box-btn'>
						<button className='box-btn-end' onClick={handleEnd}>
							<span className='box-btn-text-end'>סיום והרשמה להגרלה</span>
						</button>
					</div>
				) : (
					<div className='box-btn'>
						<button className='box-btn-next' onClick={handleClose}>
							<span className='box-btn-text-next'>מעבר לשאלה הבאה</span>
						</button>

						<Link className='box-btn-end' to={'../result'}>
							<span className='box-btn-text-end'>קחו אותי להגרלה</span>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default AnswerPopup;

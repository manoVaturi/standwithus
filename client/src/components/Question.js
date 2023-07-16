import React, { useState } from 'react';
import { useSelector } from 'react-redux';
/* Custom Hook */
import { useFetchQuestion } from '../hooks/FetchQuestion';
import { TailSpin } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';
import AnswerPopup from '../components/popups/AnswerPopup';

export default function Question({ onNext }) {
	const [{ isLoadingFetch, serverError }] = useFetchQuestion();

	const question = useSelector(
		(state) => state.questions.queue[state.questions.trace]
	);

	const [isOpen, setIsOpen] = useState(false);
	const [answerId, setAnswerId] = useState(0);
	const [optionId, setOptionId] = useState(5);
	const [isLoading, setIsLoading] = useState(isLoadingFetch);

	function onSelect(answerId, optionId) {
		const element = document.getElementById(`divI${optionId}`);
		if (answerId === optionId || answerId === 4) {
			element.className += ' right-answers';
		} else {
			element.className += ' wrong-answers';
		}

		setAnswerId(answerId);
		setOptionId(optionId);

		setTimeout(() => {
			setIsOpen(true);
		}, 500);
	}

	function onQuizEnd() {
		setIsLoading(true);
		setIsOpen(false);
		setOptionId(5);
		onNext(answerId, optionId);

		setTimeout(() => {
			setIsLoading(false);
		}, 100);
		return <Navigate to='/result'></Navigate>;
	}
	function onPopupClose() {
		setIsLoading(true);
		setIsOpen(false);
		setOptionId(5);
		onNext(answerId, optionId);

		setTimeout(() => {
			setIsLoading(false);
		}, 100);
	}
	if (isLoading) {
		return (
			<div className='loading-page'>
				<TailSpin
					height='80'
					width='80'
					color='#4fa94d'
					ariaLabel='tail-spin-loading'
					radius='1'
					wrapperStyle={{}}
					wrapperClass=''
					visible={true}
				/>
			</div>
		);
	} else if (question) {
		const img = question.questionImage;
		return (
			<div className='questions'>
				<div className='questions-container'>
					{isOpen && (
						<AnswerPopup
							handleClose={onPopupClose}
							handleEnd={onQuizEnd}
							question={question}
						/>
					)}

					<h2 className='question-text'>{question.question}</h2>
					<div>
						<img src={img} alt='' />
					</div>

					<ul className='options' key={question.id}>
						{question.options.map((q, i) => (
							<div
								className={`answers`}
								key={i}
								onClick={() => onSelect(question.answerId, i)}
								id={`divI${i}`}
							>
								<div className='question_image'></div>
								<li key={i}>
									<input
										type='radio'
										value={false}
										name='options'
										id={`q${i}-option`}
									/>
									<label htmlFor={`q${i}-option`}>{q}</label>
								</li>
							</div>
						))}
						<div>{question.id}/15</div>
					</ul>
				</div>
			</div>
		);
	}

	if (serverError) {
		return <h3>{serverError || 'Unknown Error'}</h3>;
	}
}

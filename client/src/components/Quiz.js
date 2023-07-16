import React from 'react';
import Question from './Question';
import logo from '../public/swu_logo.png';

import { MoveNextQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/SetResult';
import { useSelector, useDispatch } from 'react-redux';

import { Navigate } from 'react-router-dom';

export default function Quiz() {
	const { trace, queue } = useSelector((state) => state.questions);
	const dispatch = useDispatch();

	function onNext(answerId, i) {
		/* update the trace value by one */
		if (trace < queue.length) {
			dispatch(MoveNextQuestion());
			dispatch(PushAnswer(i));
		}
	}

	/* finish quiz after last question */
	if (queue.length && trace === queue.length) {
		return <Navigate to={'/result'} replace='true'></Navigate>;
	}
	return (
		<div className='app'>
			<div className='logo'>
				<img src={logo} width={100} alt='' />
			</div>

			{/*display questions*/}
			<Question onNext={onNext}></Question>
			<div className='grid'></div>
		</div>
	);
}

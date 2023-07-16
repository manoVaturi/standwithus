import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getQuestions } from '../helpers/helper';
/* redux actions */
import * as Actions from '../redux/question_reducer';

/* fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
	const dispatch = useDispatch();
	const [getData, setGetData] = useState({
		isLoading: false,
		apiData: [],
		serverError: null,
	});

	useEffect(() => {
		setGetData((prev) => ({ ...prev, isLoading: true }));
		/* async func to fetch backend data */
		(async () => {
			try {
				let data = await getQuestions(
					`https://israelihighlevel-api.onrender.com/api/questions`
				);
				let { questions, answers } = await data[0];
				if (questions.length > 0) {
					setGetData((prev) => ({
						...prev,
						apiData: { questions, answers },
					}));
					setGetData((prev) => ({
						...prev,
						isLoading: false,
					}));

					/* dispatch data */
					dispatch(Actions.startQuizAction({ questions, answers }));
				} else {
					throw new Error('No Question Available');
				}
			} catch (error) {
				setGetData((prev) => ({
					...prev,
					isLoading: false,
					serverError: error,
				}));
			}
		})();
	}, [dispatch]);
	return [getData, setGetData];
};

/* moveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
	try {
		dispatch(Actions.moveNextAction());
	} catch (error) {
		console.log(error);
	}
};

export const MovePrevQuestion = () => async (dispatch) => {
	try {
		dispatch(Actions.movePrevAction());
	} catch (error) {
		console.log(error);
	}
};

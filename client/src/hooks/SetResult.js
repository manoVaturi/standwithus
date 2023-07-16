import * as Action from '../redux/result_reducer';

export const PushAnswer = (answer) => async (dispatch) => {
	try {
		await dispatch(Action.pushResultAction(answer));
	} catch (error) {
		console.log(error);
	}
};

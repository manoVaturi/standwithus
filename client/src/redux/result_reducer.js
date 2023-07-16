import { createSlice } from '@reduxjs/toolkit';

export const resultReducer = createSlice({
	name: 'result',
	initialState: {
		result: [],
	},
	reducers: {
		// resultAction: (state, action) => {
		// 	return {
		// 		...state,
		// 		result: action.payload,
		// 	};
		// },

		pushResultAction: (state, action) => {
			state.result.push(action.payload);
		},
	},
});

export const { pushResultAction } = resultReducer.actions;

export default resultReducer.reducer;

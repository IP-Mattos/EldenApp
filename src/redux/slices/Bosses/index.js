import { createSlice } from '@reduxjs/toolkit';
// Axios
import axios from 'axios';

export const bossesSlices = createSlice({
	name: 'bosses',
	initialState: {
		list: [],
		detail: [],
	},
	reducers: {
		setBossesList: (state, action) => {
			state.list = action.payload;
		},
		setBossDetail: (state, action) => {
			state.detail = action.payload;
		},
	},
});

export const { setBossesList, setBossDetail } = bossesSlices.actions;

export default bossesSlices.reducer;

export const getAllBosses = () => async dispatch => {
	try {
		const bosses = await axios.get('https://eldenring.fanapis.com/api/bosses');
		dispatch(setBossesList(bosses.data.data));
	} catch (error) {
		console.log(error);
	}
};

export const getBossDetail = id => async dispatch => {
	try {
		const bosses = await axios.get(
			'https://eldenring.fanapis.com/api/bosses/' + id
		);
		dispatch(setBossDetail(bosses.data.data));
		console.log(bosses.data.data);
	} catch (error) {
		console.log(error);
	}
};

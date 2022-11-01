import { createSlice } from '@reduxjs/toolkit';
// Axios
import axios from 'axios';

export const bossesSlices = createSlice({
	name: 'bosses',
	initialState: {
		list: [],
	},
	reducers: {
		setBossesList: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const { setBossesList } = bossesSlices.actions;

export default bossesSlices.reducer;

export const getAllBosses = () => async (dispatch) => {
		try {
			const bosses = await axios.get('https://eldenring.fanapis.com/api/bosses')
			dispatch(setBossesList(bosses.data.data));
		} catch (error) {
			console.log(error);
		}
}
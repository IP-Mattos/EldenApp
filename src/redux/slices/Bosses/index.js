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
		setCleanDetailBoss: state => {
			state.detail = [];
		},
		setSortedBosses: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const {
	setBossesList,
	setBossDetail,
	setCleanDetailBoss,
	setSortedBosses,
} = bossesSlices.actions;

export default bossesSlices.reducer;

export const getAllBosses = name => async dispatch => {
	try {
		const bosses = await axios.get('https://eldenring.fanapis.com/api/bosses');
		if (name) {
			const BossesName = bosses.data.data.filter(boss =>
				boss.name.toLowerCase().includes(name.toLowerCase())
			);
			BossesName.length !== 0
				? dispatch(setBossesList(BossesName))
				: dispatch(setBossesList([{ error: 'Error' }]));
		} else {
			dispatch(setBossesList(bosses.data.data));
		}
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
	} catch (error) {
		console.log(error);
	}
};

export const CleanDetailBoss = () => dispatch => {
	dispatch(setCleanDetailBoss());
};

export const SortBosses = value => async dispatch => {
	try {
		const bosses = await axios.get('https://eldenring.fanapis.com/api/bosses');
		if (value) {
			if (value === 'atoz') {
				const BossesDesc = bosses.data.data.sort(function (a, b) {
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return 1;
					}
					if (b.name.toLowerCase() > a.name.toLowerCase()) {
						return -1;
					}
					return 0;
				});
				dispatch(setSortedBosses(BossesDesc));
			} else {
				const BossesAsc = bosses.data.data.sort(function (a, b) {
					if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return -1;
					}
					if (b.name.toLowerCase() > a.name.toLowerCase()) {
						return 1;
					}
					return 0;
				});
				dispatch(setSortedBosses(BossesAsc));
			}
		}
		dispatch(setSortedBosses(bosses.data.data));
	} catch (error) {
		console.log(error);
	}
};

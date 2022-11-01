import { configureStore } from '@reduxjs/toolkit';
import bosses from '../slices/Bosses';

export default configureStore({
	reducer: {
		bosses,
	},
});

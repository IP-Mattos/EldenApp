import { useEffect, useState } from 'react';
// Redux
import { getAllBosses, SortBosses } from '../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';

export default function useFetch(value) {
	const dispatch = useDispatch();
	const { list: bosses } = useSelector(state => state.bosses);
	const [type, setType] = useState([]);

	useEffect(() => {
		value === 'default'
			? dispatch(getAllBosses())
			: dispatch(SortBosses(value));
		setType(bosses);
	}, [value]);

	return type;
}

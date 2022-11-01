import { useEffect } from 'react';
// Redux
import { getAllBosses, getBossDetail } from '../../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';

function BossesList() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBosses());
		dispatch(getBossDetail('17f695abef9l0i1ujzrup5y0z7rw6'));
	}, [dispatch]);

	const { list: bosses } = useSelector(state => state.bosses);
	return (
		<div>
			{bosses.map((boss, index) => (
				<div key={index}>
					<img src={boss.image} alt={boss.name} />
					<h2>Name:{boss.name}</h2>
					<h3>Region: {boss.region}</h3>
					<p>Description: {boss.description}</p>
					<p>Health: {boss.healthPoints}</p>
				</div>
			))}
		</div>
	);
}

export default BossesList;

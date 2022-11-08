import { useEffect } from 'react';
// Redux
import { getAllBosses } from '../../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';

// components
import BossesCard from '@components/BossCard/BossCard';
import Loading from '../Loading/Loading';

function BossesList() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllBosses());
	}, [dispatch]);

	const { list: bosses } = useSelector(state => state.bosses);
	return (
		<div>
			{bosses.length !== 0 ? (
				bosses.map((boss, index) => (
					<BossesCard
						key={index}
						id={boss.id}
						name={boss.name}
						image={boss.image}
					/>
				))
			) : (
				<div>
					<Loading />
				</div>
			)}
		</div>
	);
}

export default BossesList;

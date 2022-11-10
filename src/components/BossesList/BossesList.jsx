import { useEffect } from 'react';
// Redux
import { getAllBosses } from '../../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';

// components
import { BossCard, Loading, SearchBar } from '@components';

import { Cards } from '@components/styles/Cards.style';

function BossesList() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllBosses());
	}, [dispatch]);

	const { list: bosses } = useSelector(state => state.bosses);
	return (
		<Cards>
			<SearchBar/>
			{bosses.length !== 0 ? (
				bosses.map(boss => (
					<BossCard
						key={boss.id}
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
		</Cards>
	);
}

export default BossesList;

import { useEffect, useState } from 'react';
// Redux
import { getAllBosses } from '../../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';

// components
import { BossCard, Loading, SearchBar, Pagination } from '@components';

import { Cards } from '@components/styles/Cards.style';

function BossesList() {
	const dispatch = useDispatch();
	
	const { list: bosses } = useSelector(state => state.bosses);
	const [currentPage, setCurrentPage] = useState(1);
	// eslint-disable-next-line no-unused-vars
  	const [bossPerPage, setBossPerPage] = useState(8);
	const indexOfLastBoss = currentPage * bossPerPage;
	const indexOfFirstBoss = indexOfLastBoss - bossPerPage;
	const currentBosses = bosses.slice(indexOfFirstBoss, indexOfLastBoss);

	const pages = (pageNumber) => {
		setCurrentPage(pageNumber);
	  };

	useEffect(() => {
		dispatch(getAllBosses());
	}, [dispatch]);

	useEffect(() => {
		setCurrentPage(1);
	}, [bosses])

	

	return (
		<>
			<SearchBar />
			<Cards>
				{currentBosses.length !== 0 ? (
					currentBosses.map(boss =>
						boss.error ? (
							<div key={boss.error}>Error</div>
						) : (
							<BossCard
								key={boss.id}
								id={boss.id}
								name={boss.name}
								image={boss.image}
							/>
						)
					)
				) : (
					<div>
						<Loading />
					</div>
				)}
			</Cards>
			<Pagination
				bossPerPage={bossPerPage}
				bosses={bosses.length}
				currentBosses={currentBosses}
				pages={pages}
				currentPage={currentPage}
			/>
		</>
	);
}

export default BossesList;

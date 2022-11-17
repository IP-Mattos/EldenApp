import { useEffect, useState } from 'react';
// Redux
import { getAllBosses } from '../../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';

// components
import { BossCard, Loading, Pagination, Error } from '@components';

import { Cards } from '@components/styles/Cards.style';

function BossesList() {
	const dispatch = useDispatch();

	const { list: bosses } = useSelector(state => state.bosses);
	const [currentPage, setCurrentPage] = useState(1);
	const bossPerPage = 8;
	const indexOfLastBoss = currentPage * bossPerPage;
	const indexOfFirstBoss = indexOfLastBoss - bossPerPage;
	const currentBosses = bosses.slice(indexOfFirstBoss, indexOfLastBoss);

	const pages = pageNumber => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getAllBosses());
	}, [dispatch]);

	useEffect(() => {
		setCurrentPage(1);
	}, [bosses]);

	return (
		<>
			<Cards>
				{currentBosses.length !== 0 ? (
					currentBosses.map((boss, index) =>
						boss.error ? (
							<Error key={index} error={'No existe jefe con ese nombre.'} />
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

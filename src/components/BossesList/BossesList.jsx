import { useEffect } from 'react';
// Redux
import { getAllBosses } from '../../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";

function BossesList() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBosses());
	}, [dispatch]);

	const { list: bosses } = useSelector(state => state.bosses);
	return (
		<div>
			{bosses.map((boss, index) => (				
				<div key={index}>
					<Link to={`/detail/${boss.id}`}>
					<img src={boss.image} alt={boss.name} />
					<h2>Name:{boss.name}</h2>
					<h3>Region: {boss.region}</h3>
					<p>Description: {boss.description}</p>
					<p>Health: {boss.healthPoints}</p>
					</Link>
				</div>
			))}
		</div>
	);
}

export default BossesList;

import { useEffect } from 'react';
// Redux
import { getBossDetail, CleanDetailBoss } from '../../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// components
import { Loading } from '@components';
// url
import { ImageStock } from '../../assets/stock';

// style
import { Detail } from '@components/styles/Cards.style.js';

function BossesDetail() {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBossDetail(id));
		return () => {
			dispatch(CleanDetailBoss());
		};
	}, []);

	const { detail: boss } = useSelector(state => state.bosses);
	return (
		<>
			{boss.length !== 0 ? (
				<Detail>
					<img src={!boss.image ? ImageStock : boss.image} alt={boss.name} />
					<h2>Nombre: {boss.name}</h2>
					<p>Description: {boss.description}</p>
					<p>Puntos de vida: {boss.healthPoints}</p>
					<ul>
						<h2>Drops:</h2>
						<li>{boss.drops[0] ? boss.drops[0] : <p>No tiene.</p>}</li>
						<li>{boss.drops[1] ? boss.drops[1] : <p>No tiene</p>}</li>
					</ul>
					<p>Region: {boss.region}</p>
					<p>Ubicación: {boss.location}</p>
				</Detail>
			) : (
				<Loading />
			)}
		</>
	);
}

export default BossesDetail;

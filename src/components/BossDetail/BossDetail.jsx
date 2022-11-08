import { useEffect } from 'react';
// Redux
import { getBossDetail, CleanDetailBoss } from '../../redux/slices/Bosses';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// components
import Loading from '@components/Loading/Loading';
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
					<h2>{boss.name}</h2>
					<p>{boss.description}</p>
					<p>{boss.healthPoints}</p>
					<ul>
						<h2>Drops</h2>
						<li>{boss.drops[1]}</li>
						<li>{boss.drops[1]}</li>
					</ul>
					<p>{boss.region}</p>
					<p>{boss.location}</p>
				</Detail>
			) : (
				<Loading />
			)}
		</>
	);
}

export default BossesDetail;

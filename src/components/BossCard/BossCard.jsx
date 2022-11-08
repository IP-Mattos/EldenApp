// Router Dom
import { Link } from 'react-router-dom';
// url
import { ImageStock } from '../../assets/stock';
// styled
import { Card } from '@components/styles/Cards.style.js';
function BossesCard({ id, name, image }) {
	return (
		<Card>
			<Link to={`/detail/${id}`}>
				<img src={!image ? ImageStock : image} alt={name} />
				<h2>{name}</h2>
			</Link>
		</Card>
	);
}

export default BossesCard;

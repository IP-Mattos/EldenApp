// Router Dom
import { Link } from 'react-router-dom';
// url
import { ImageStock } from '../../assets/stock';
function BossesCard({ id, name, image }) {
	return (
		<div>
			<Link to={`/detail/${id}`}>
				<img src={!image ? ImageStock : image} alt={name} />
				<h2>{name}</h2>
			</Link>
		</div>
	);
}

export default BossesCard;

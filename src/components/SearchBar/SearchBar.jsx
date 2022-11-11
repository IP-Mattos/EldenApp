import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBosses } from '../../redux/slices/Bosses';

function SearchBar() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	function handleInputChange(e) {
		e.preventDefault();
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getAllBosses(name));
	}

	return (
		<div>
			<div>
				<input
					type='text'
					name=''
					placeholder='Search...'
					onChange={e => handleInputChange(e)}
				/>
				<button onClick={e => handleSubmit(e)}>Search</button>
			</div>
		</div>
	);
}

export default SearchBar;

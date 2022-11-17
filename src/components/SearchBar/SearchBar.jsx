import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBosses } from '../../redux/slices/Bosses';

import { useNavigate } from 'react-router-dom';

// customhook
import { useDebounced } from '../../customs';

function SearchBar() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const debouncedValue = useDebounced(name, 300);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getAllBosses(name));
	}, [debouncedValue]);

	function handleInputChange(e) {
		const value = e.target.value;
		navigate('/');
		setName(value);
	}
	return (
		<div>
			<div>
				<input
					type='text'
					name=''
					placeholder='Search...'
					value={name}
					onChange={handleInputChange}
				/>
				<button>Search</button>
			</div>
		</div>
	);
}

export default SearchBar;

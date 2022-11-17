import { useState, useEffect } from 'react';
export default function useBebounce(value, delay) {
	const [debounceValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => clearTimeout(timeoutId);
	}, [value]);
	return debounceValue;
}

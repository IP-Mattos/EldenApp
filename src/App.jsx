// components
import { BossDetail, HomePage, NotFound } from '@components';
// router dom
import { Route, Routes, Navigate } from 'react-router-dom';
import { SearchBar } from './components';
function App() {
	return (
		<div className='App'>
			<SearchBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/detail/:id' element={<BossDetail />} />
				<Route path='/404' element={<NotFound />} />
				<Route path='*' element={<Navigate to='/404' replace />} />
			</Routes>
		</div>
	);
}

export default App;

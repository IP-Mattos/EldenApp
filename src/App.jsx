import './App.css';
// components
import BossDetail from '@components/BossDetail/BossDetail';
import HomePage from '@components/HomePage/HomePage';
import NotFound from '@components/NotFound/NotFound';
// router dom
import { Route, Routes, Navigate } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
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

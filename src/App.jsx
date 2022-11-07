import './App.css';
import BossesList from './components/BossesList/BossesList';
import BossesDetail from './components/BossesDetail/BossesDetail';
import {
	Route,
	Routes
  } from "react-router-dom";
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path="/list" element={<BossesList />}/>			
				<Route path="/detail/:id" element={<BossesDetail />} />				
			</Routes>
		</div>
	);
}

export default App;

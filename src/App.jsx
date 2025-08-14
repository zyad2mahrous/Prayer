/** @format */
import { Routes, Route } from 'react-router-dom';
import Other from './assets/components/Other';
import Home from './assets/components/Home';
import Quran from './assets/components/Quran/Quran';
import Supplications from './assets/components/Supplications/Supplications';
import './App.css';

function App() {
	return (
		<>
			<Other />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/quran'
					element={<Quran />}
				/>
				<Route
					path='/Supplications'
					element={<Supplications />}
				/>
			</Routes>
		</>
	);
}

export default App;

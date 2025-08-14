/** @format */

import { useEffect, useState } from 'react';
import Supply from './supply';
import './Supplications.css';
import Azker from './Azker';

const Supplications = () => {
	const [supplies, setSupplies] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		const fetchApi = async () => {
			const response = await fetch(
				'https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json'
			);
			const data = await response.json();

			const categories = Object.entries(data).map(([category, azkar]) => ({
				category,
				azkar,
			}));

			setSupplies(categories);
		};
		fetchApi();
	}, []);

	return (
		<>
			<Supply
				supplies={supplies}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>

			{/* مكان عرض النصوص */}
			<div className='content'>
				{selectedCategory ? (
					selectedCategory.azkar.map((item, index) => (
						<p key={index}>
							{(item.content ?? '')
								.replace(/(\n|n|\/|\\|'|،|,|\.|")/g, '') // شيل \ كمان
								.trim()}
						</p>
					))
				) : (
					<Azker />
				)}
			</div>
		</>
	);
};

export default Supplications;

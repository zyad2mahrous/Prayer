/** @format */
import { useEffect, useState } from 'react';
import Surahs from './Surahs';
import SurahContent from './SurahContent';
import './Quran.css';

const Quran = () => {
	const [surahs, setSurah] = useState([]);
	const [selectedSurah, setSelectedSurah] = useState(null);
	useEffect(() => {
		const fetchApiQuran = async () => {
			try {
				const respons = await fetch(
					'https://api.alquran.cloud/v1/quran/quran-uthmani'
				);
				const data = await respons.json();
				setSurah(data.data.surahs);
			} catch (error) {
				console.log(error);
			}
		};
		fetchApiQuran();
	}, []);

	return (
		<>
			<Surahs
				surahs={surahs}
				onSelectSurah={setSelectedSurah}
			/>
			<SurahContent surah={selectedSurah} />
		</>
	);
};

export default Quran;

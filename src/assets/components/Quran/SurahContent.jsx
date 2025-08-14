/** @format */

import Started from './Started';

const SurahContent = ({ surah }) => {
	if (!surah) return <Started />;

	return (
		<div className='surah-wrapper'>
			<div className='surah-header'>
				<h2>{surah.name}</h2>
				<p>عدد الآيات: {surah.ayahs.length}</p>
				<p>
					نوع السورة: {surah.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}
				</p>
			</div>

			<div className='surah-body'>
				{<p className='bismillah'>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>}
				{surah.ayahs.map((ayah) => (
					<span
						key={ayah.number}
						className='ayah'>
						{ayah.text}
						<span className='ayah-number'>﴿{ayah.numberInSurah}﴾</span>
					</span>
				))}
			</div>
		</div>
	);
};

export default SurahContent;

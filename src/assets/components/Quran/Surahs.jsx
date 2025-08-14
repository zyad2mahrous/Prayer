/** @format */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Surahs = ({ surahs, onSelectSurah }) => {
	const [activeSurah, setActiveSurah] = useState(1);
	useEffect(() => {
		document.querySelector('.left-toggle .gear').onclick = function () {
			this.classList.toggle('fa-spin');
			document.querySelector('.left-toggle').classList.toggle('open');
		};
	});

	return (
		<>
			<div className='left-toggle'>
				<div className='icon'>
					<FontAwesomeIcon
						icon={faGear}
						className='gear'
					/>
				</div>
				<h3>الفهرس</h3>
				<ul>
					{surahs.map((surah) => {
						return (
							<li
								key={surah.number}
								className={activeSurah === surah.number ? 'active li' : 'li'}
								onClick={() => {
									setActiveSurah(surah.number);
									onSelectSurah(surah);
								}}>
								{surah.number} - {surah.name}
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Surahs;

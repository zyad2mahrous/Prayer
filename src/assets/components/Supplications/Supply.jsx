/** @format */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Supply = ({ supplies, selectedCategory, setSelectedCategory }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isSpinning, setIsSpinning] = useState(false);

	return (
		<div className={`left-toggle ${isOpen ? 'open' : ''}`}>
			<div className='icon'>
				<FontAwesomeIcon
					icon={faGear}
					className={`gear ${isSpinning ? 'fa-spin' : ''}`}
					onClick={() => {
						setIsSpinning(!isSpinning);
						setIsOpen(!isOpen);
					}}
				/>
			</div>
			<h3>الفهرس</h3>
			<ul>
				{supplies.map((supply) => (
					<li
						key={supply.category}
						className={
							selectedCategory?.category === supply.category
								? 'active li'
								: 'li'
						}
						onClick={() => {
							setSelectedCategory(supply);
						}}>
						{supply.category}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Supply;

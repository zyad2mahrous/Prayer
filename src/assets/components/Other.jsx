/** @format */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Other = () => {
	useEffect(() => {
		document.querySelector('.toggle .gear').onclick = function () {
			this.classList.toggle('fa-spin');
			document.querySelector('.other').classList.toggle('open');
		};
	}, []);
	return (
		<div className='other'>
			<div className='toggle'>
				<FontAwesomeIcon
					icon={faGear}
					className='gear'
				/>
			</div>
			<h3>المحتوي</h3>
			<ul className='items'>
				<NavLink
					className={({ isActive }) => (isActive ? 'active li' : 'li')}
					to='/'>
					الرئيسية
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? 'active li' : 'li')}
					to='/quran'>
					القران الكريم
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? 'active li' : 'li')}
					to='/Supplications'>
					ادعية
				</NavLink>
			</ul>
		</div>
	);
};

export default Other;

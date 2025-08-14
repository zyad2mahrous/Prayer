/** @format */

const Prayer = ({ title, time }) => {
	return (
		<div className='row'>
			<p>{title}</p>
			<p>{time}</p>
		</div>
	);
};

export default Prayer;

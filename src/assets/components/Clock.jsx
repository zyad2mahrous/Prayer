/** @format */
import { useState, useEffect } from 'react';

function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		// تنظيف المؤقت عند إزالة المكون
		return () => clearInterval(intervalId);
	}, []);

	return (
		<p className='timer'>
			{time.toLocaleTimeString('en-GB', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
				hour12: false,
			})}
		</p>
	);
}

export default Clock;

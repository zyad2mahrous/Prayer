/** @format */
import { useEffect, useState } from 'react';
import Prayer from './Prayer';
import Clock from './Clock';

const Home = () => {
	const [prayerTime, setPrayertime] = useState({});
	const [date, setdate] = useState('');
	const [changeCity, setChangeCity] = useState('cairo');
	const [selectedType, setSelectedType] = useState('hijri');

	useEffect(() => {
		const fetchprayerapi = async () => {
			try {
				const respons = await fetch(
					`https://api.aladhan.com/v1/timingsByCity?city=${changeCity}&country=Egypt&method=5`
				);
				const datare = await respons.json();
				setPrayertime(datare.data.timings);
				setdate(datare.data.date);
			} catch (error) {
				console.log(error);
			}
		};
		fetchprayerapi();
	}, [changeCity]);
	const cities = [
		{ title: 'القاهرة', value: 'cairo' },
		{ title: 'الاسكندريه', value: 'alexandria' },
		{ title: 'اسوان', value: 'aswan' },
		{ title: 'الجيزة', value: 'giza' },
		{ title: 'طنطا', value: 'tanta' },
	];

	return (
		<>
			<div className='page'>
				<div className='container'>
					<div className='topPage'>
						<div className='city'>
							<label htmlFor='city'>المدينة</label>
							<select
								onChange={(e) => {
									setChangeCity(e.target.value);
								}}
								name='city'
								id='city'>
								{cities.map((city) => {
									return (
										<option
											key={city.value}
											value={city.value}>
											{city.title}
										</option>
									);
								})}
							</select>
						</div>
						<div className='time'>
							<label htmlFor='timer'>الساعة</label>
							<Clock />
						</div>
						<div className='date'>
							<div className='type-date'>
								<label htmlFor='type'>التاريخ</label>
								<select
									id='type'
									value={selectedType}
									onChange={(e) => setSelectedType(e.target.value)}>
									<option value='hijri'>هجري</option>
									<option value='gregorian'>ميلادي</option>
								</select>
							</div>
							{date && (
								<p>
									{selectedType === 'hijri'
										? date.hijri.date
										: date.gregorian.date}
								</p>
							)}
						</div>
					</div>
					<div className='bottomPage'>
						<Prayer
							title='الفجر :'
							time={prayerTime.Fajr}
						/>
						<Prayer
							title='الظهر :'
							time={prayerTime.Dhuhr}
						/>
						<Prayer
							title='العصر :'
							time={prayerTime.Asr}
						/>
						<Prayer
							title='المغرب :'
							time={prayerTime.Maghrib}
						/>
						<Prayer
							title='العشاء :'
							time={prayerTime.Isha}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

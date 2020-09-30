import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [advice, setAdvice] = useState('');

	const fetchAdvice = async () => {
		const URL = 'https://api.adviceslip.com/advice';
		try {
			const {
				data: {
					slip: { advice },
				},
			} = await axios.get(URL);
			setAdvice(advice);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<div className='app'>
			<div className='card'>
				<h1 className='heading'>{advice}</h1>
				<button onClick={fetchAdvice} className='button'>
					<span>Give Me Advice</span>
				</button>
			</div>
		</div>
	);
}

export default App;

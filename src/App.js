import React, { useState } from 'react';

const App = () => {
	const [counter, setCounter] = useState(0)

	const incrementCount = () => {
		setCounter(counter + 1)
	}
	
	const decrementCount = () => {
		setCounter(counter - 1)
	}
	const classNameDivs = counter > 34 ? 'app-container hot' : 'app-container neutral';
	const classNameDivs1 = counter < 20 ? ' cold' : ' neutral';
	return (
		<div className={classNameDivs+classNameDivs1}>
				<div className='temperature-display-container'>
				<div className='temperature-display'>{counter}°C</div>
			</div>
			<div className='button-container'>
				<button onClick={incrementCount}>+</button>
				<button onClick={decrementCount}>-</button>
			</div>
		</div>
	);
};

export default App;

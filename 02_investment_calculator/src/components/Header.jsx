import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

const Header = () => {
	return (
		<header id='header'>
			<img src={logo} alt='Logo showing a money bag' />
			<h1>Investment Calculator</h1>
			<h3>Powered by React Js</h3>
		</header>
	);
};

export default Header;

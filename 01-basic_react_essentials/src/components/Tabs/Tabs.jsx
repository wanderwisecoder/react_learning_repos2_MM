import React from 'react';

const Tabs = ({ children, buttons, ButtonsContainer }) => {
	//const ButtonsContainer = buttonsContainer;
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
};

export default Tabs;

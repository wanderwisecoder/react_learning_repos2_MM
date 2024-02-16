import React, { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	let editablePlayerName = <span className='player-name'>{playerName}</span>;

	function handleEditClick() {
		setIsEditing((isEditing) => !isEditing);
		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	}

	function handleChange(event) {
		//setIsEditing(event.target.value);
		setPlayerName(event.target.value);
	}

	if (isEditing) {
		editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} />;
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{editablePlayerName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}

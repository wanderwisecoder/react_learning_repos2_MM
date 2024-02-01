import React, { useState } from 'react';

export default function Player({ initialName, symbol }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	let editablePlayerName = <span className='player-name'>{playerName}</span>;
	function handleEditClick() {
		setIsEditing((isEditing) => !isEditing);
	}

	function handleChange(event) {
		setIsEditing(event.target.value);
	}

	if (isEditing) {
		editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} />;
	}

	return (
		<li>
			<span className='player'>
				{editablePlayerName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}

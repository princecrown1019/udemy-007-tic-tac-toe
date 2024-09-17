import { useState } from "react"

export default function Player({initialName, symbol, isActive}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing); // => true
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editableName = <span className="player-game">{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        editableName = <input type="text" requried value = {playerName} onChange={handleChange} />;
        btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}
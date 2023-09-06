import { useState } from "react";
import "./App.css";

function App() {
	const [gameRunning, setGameRunning] = useState(false);

	function handleClick() {
		setGameRunning(!gameRunning);
	}

	return (
		<div>
			<button onClick={handleClick} className="video-game-button">
				{gameRunning ? "Pause" : "Play"}
			</button>
		</div>
	);
}

export default App;

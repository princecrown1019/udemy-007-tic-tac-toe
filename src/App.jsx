import Logo from "../public/game-logo.png";

function App() {

  return <main>
    <div id="game-container">
      <ol id="players">
        <li>
          <span className="player">
            <span className="player-game">Player 1</span>
            <span className="player-symbol">X</span>
          </span>
          <button>Edit</button>
        </li>
        <li>
          <span className="player">
            <span className="player-game">Player 2</span>
            <span className="player-symbol">O</span>
          </span>
          <button>Edit</button>
        </li>
      </ol>

      GAME BORAD
    </div>

    LOG
  </main>

}

export default App

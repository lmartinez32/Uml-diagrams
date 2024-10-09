import { renderToReadableStream } from "react-dom/server";
import GameState from "./GameState";

function GameOver({gameState}) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
         case GameState.player0Wins:
            return <div className="game-over">0 wins</div>;
        case GameState.playerXWins:
            return <div className="game-over">X wins</div>;
        case GameState.draw:
            return <div className="game-over">X draws</div>;
        default:
            return <></>;
    }
}

export default GameOver;
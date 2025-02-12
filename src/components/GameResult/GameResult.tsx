import { useGame } from '../../context/GameContext.tsx';
import {Button} from '../../services/primeService.ts';
import { initialStatePlayer } from '../../interfaces/game.ts';

export const GameResult = () => {
    const { player, setPlayer } = useGame();
    const restartGame = () => {
        setPlayer(initialStatePlayer);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
            <h1 className="text-4xl font-bold mb-4">
                { player.result ? '🎉 Congratulations! 🎉' : '❌ Game Over ❌' }
            </h1>

            <p className="text-lg text-gray-300 mb-6">
                { player.result
                    ? 'You guessed the word correctly!'
                    : 'Better luck next time!' }
            </p>

            <Button
                label="Play Again"
                icon="pi pi-replay"
                className="p-button-raised p-button-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg"
                onClick={ restartGame }
            />
        </div>
    )
}

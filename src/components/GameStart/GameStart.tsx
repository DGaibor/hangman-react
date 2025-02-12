import {Button} from '../../services/primeService.ts';
import { HangmanService } from '../../services/hangmanService.ts';
import { Player } from '../../interfaces/game.ts';
import { useGame } from '../../context/GameContext.tsx';


export const GameStart = () => {
    const { setPlayer } = useGame();
    const startGame = () => {
        const service = new HangmanService();
        const word = service.get();
        setPlayer((prevState: Player)=> ({...prevState,word:word,step:'game'}));
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">Welcome to Hangman!</h1>
            <p className="text-lg text-gray-300 mb-6">
                Guess the hidden word letter by letter. Be careful, you only have a few tries!
            </p>

            <Button
                label="Start Game"
                icon="pi pi-play"
                className="p-button-raised p-button-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg"
                onClick={ startGame }
            />

            <div className="mt-8 text-gray-400 text-sm">
                <p>Type letters on your keyboard to guess the word.</p>
                <p>Too many wrong guesses and you lose!</p>
            </div>
        </div>
    )
}

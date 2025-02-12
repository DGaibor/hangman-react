import { HangmanDrawing } from '../HangmanDrawing/HangmanDrawing.tsx';
import { WordInput } from '../WordInput/WordInput.tsx';

export const GamePlay = () => {
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
            <h1 className="text-4xl font-bold text-yellow-400 mb-6">Hangman Game</h1>
            <HangmanDrawing/>
            <div className="mt-6">
                <WordInput/>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
                Type any letter on your keyboard to guess the word.
            </p>
        </div>
    )
}

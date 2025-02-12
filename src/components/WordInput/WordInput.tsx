import { InputOtp } from '../../services/primeService.ts'
import { useEffect, useState } from 'react';
import { useGame } from '../../context/GameContext.tsx';
import './WordInout.css'
export const WordInput = () => {
    const { player, setPlayer } = useGame();
    const [token, setToken] = useState<string>(' '.repeat(player.word.length));
    const [fail, setFail] = useState<number>(0);

    const handleKeyDown = (e: KeyboardEvent) => {
        const letter = e.key.toLowerCase();
        const newToken = token.split('');

        let found = false;
        player.word.split('').forEach((char, index) => {
            if (char === letter) {
                newToken[index] = letter;
                found = true;
            }
        });


        const newValue = newToken.join('');
        if (newValue !== token) {
            setToken(newValue);
        } else if (!found) {
            setFail(prevFail => prevFail + 1);
            setPlayer(prevState => ({ ...prevState, fails: prevState.fails+1  }));
        }
    };
    
    useEffect(() => {
        if (token === player.word) {
            setPlayer(prevState => ({ ...prevState, step: 'end', result: true }));
        }
    }, [token, player.word, setPlayer]);
    
    useEffect(() => {
        if (fail >= player.limitMisses) {
           
            setPlayer(prevState => ({ ...prevState, step: 'end', result: false }));
        }
    }, [fail, player.limitMisses, setPlayer]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [token, fail]);

    return (
        <div className={'input-token'}>
            <InputOtp value={token} length={player.word.length} disabled={true} />
        </div>
    );
};

import { GameStart } from '../GameStart/GameStart.tsx';
import { GameResult } from '../GameResult/GameResult.tsx';
import { useGame } from '../../context/GameContext.tsx'
import { GamePlay } from '../GamePlay/GamePlay.tsx';

export const Game = () => {
    const { player } = useGame();
    
    return (
        <>
                {player.step=='start' && <GameStart/>}
                { player.step=='game' && <GamePlay/> }
                {player.step=='end' && <GameResult/>}
        </>
    )
}

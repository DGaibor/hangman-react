import { createContext, useContext, useState, ReactNode } from 'react';
import { GameContextType, initialStatePlayer, Player } from '../interfaces/game';

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
    const [player, setPlayer] = useState<Player>(initialStatePlayer);

    return (
        <GameContext.Provider value={{ player, setPlayer }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};

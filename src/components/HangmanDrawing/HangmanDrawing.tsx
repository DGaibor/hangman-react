import { useGame } from '../../context/GameContext.tsx';
import { useEffect, useState } from 'react';

export const HangmanDrawing = () => {
    const { player } = useGame();
    const [fails, setFails] = useState<number>(0);

    useEffect(() => {
        setFails(player.fails)
    }, [player]);
    
    const parts = [
        <div key="head" className="w-12 h-12 border-4 border-white rounded-full absolute top-10 left-1/2 transform -translate-x-1/2"></div>,
        <div key="body" className="w-1 h-24 bg-white absolute top-24 left-1/2 transform -translate-x-1/2"></div>,
        <div key="left-arm" className="w-16 h-1 bg-white absolute top-28 left-[44%] transform rotate-[30deg]"></div>,
        <div key="right-arm" className="w-16 h-1 bg-white absolute top-28 right-[44%] transform rotate-[-30deg]"></div>,
        <div key="left-leg" className="w-16 h-1 bg-white absolute top-48 left-[44%] transform rotate-[30deg]"></div>,
        <div key="right-leg" className="w-16 h-1 bg-white absolute top-48 right-[44%] transform rotate-[-30deg]"></div>,
    ];

    return (
        <div className="relative w-40 h-64 mx-auto flex justify-center items-center">
            <div className="w-20 h-1 bg-yellow-400 absolute top-4 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-1 h-56 bg-yellow-400 absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="w-12 h-1 bg-yellow-400 absolute top-4 left-[35%]"></div>
            <div className="w-1 h-10 bg-yellow-400 absolute top-4 left-[35%]"></div>

            {parts.slice(0, fails)}
        </div>
    );
};

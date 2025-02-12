import { Dispatch, SetStateAction } from 'react';

export interface Player {
    word: string;
    limitMisses: number;
    result: boolean | null;
    step: 'start'| 'game' | 'end';
    fails:number
}

export interface GameContextType {
    player: Player;
    setPlayer:Dispatch<SetStateAction<Player>> ;
}


export const initialStatePlayer: Player = {
    word:'',
    limitMisses:6,
    result: null,
    step:'start',
    fails:0
}

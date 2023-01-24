import {useState} from "react";
import { BoardView, BoardViewProps } from "./BoardView";

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type BoardProps = PartialBy<Omit<BoardViewProps, 'handleMove'>, 'boardState'> & {lastMove?: string};

const checkWin = (board:string[]) => {
    const wins = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ]
    let winner;
    wins.forEach((win) => {
        if(board[win[0]] === board[win[1]] && board[win[1]] === board[win[2]] && board[win[0]] !== undefined) {
            winner = board[win[0]];
        }
    });
    return winner;
}

export const Board:React.FC<BoardProps> = ({boardState:initialBoardState = [], lastMove}) => {

    const [board, setBoardState] = useState({boardState:initialBoardState, lastMove});
    const winner = checkWin(board.boardState);

    const handleMove = (place:number) => {
        // add check for win
        if(!board.boardState[place]) {
            board.lastMove = board.lastMove === "X" ? "O" : "X";
            board.boardState[place] = board.lastMove;
            setBoardState({...board});
        }
    }

    return (
        <>
            <BoardView key={JSON.stringify(board.boardState)} handleMove={handleMove} boardState={board.boardState}/>
            {winner && <div className="winner">{winner} wins!</div>}
        </>
    );
};

import React, { useState } from 'react';

import Square from './Square';

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);

    //winner Check
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }

        return false;
    }
    const isWinner = checkWinner();

    //draw Check
    const draw = () => {
        let co = 0;
        for (let i = 0; i < state.length; i++) {
            if (state[i] !== null) {
                co++;
            }
        }
        if (co === 9) {
            return true;
        } else return false;
    }
    const isDraw = draw();


    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isX ? "X" : "O";
        setState(copyState);
        setIsX(!isX);
    }

    return (
        <div className='board'>
            {isWinner ?
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1>{isWinner} is Winner</h1>
                    <button style={{ width: "100px" }} onClick={() => setState(Array(9).fill(null))}>Play Again</button>
                </div>
                :
                <>
                    {isDraw ?
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h1>It's a Draw</h1>
                            <button style={{ width: "100px" }} onClick={() => setState(Array(9).fill(null))}>Play Again</button>
                        </div>
                        :
                        <>
                            <h1>Player {isX ? "X" : "O"}'s Turn</h1>
                            <div className="boardRow">
                                <Square onClick={() => handleClick(0)} value={state[0]} />
                                <Square onClick={() => handleClick(1)} value={state[1]} />
                                <Square onClick={() => handleClick(2)} value={state[2]} />
                            </div>
                            <div className="boardRow">
                                <Square onClick={() => handleClick(3)} value={state[3]} />
                                <Square onClick={() => handleClick(4)} value={state[4]} />
                                <Square onClick={() => handleClick(5)} value={state[5]} />
                            </div>
                            <div className="boardRow">
                                <Square onClick={() => handleClick(6)} value={state[6]} />
                                <Square onClick={() => handleClick(7)} value={state[7]} />
                                <Square onClick={() => handleClick(8)} value={state[8]} />
                            </div>
                        </>
                    }
                </>
            }
        </div>
    )
}

export default Board;
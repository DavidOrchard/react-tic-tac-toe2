import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Board} from './Board';


describe('Test suite', function() {
    const tests = [
        {args: {board:[], place: [0] },expected:{board: ["X", "", ""]}},
        {args: {board:[], place: [1] },expected:{board: ["", "X"]}},
        {args: {board:[], place: [3, 1] },expected:{board: ["", "O","", "X"]}},
        {args: {board:[], place: [0, 3, 1, 4, 2] },expected:{board: ["X", "X","X", "O", "O"], winner: "X"}}

    ];
    tests.forEach(({args, expected}) => 
        it('check '+args, function () {
          render(<Board boardState={args.board}/>);
          args.place.forEach((place) => fireEvent.click(screen.getByTestId(place)));
          expected.board.forEach((elem, index) => {
            const linkElement2 = screen.getByTestId(index);
            expect(linkElement2).toHaveTextContent(elem);
          });
          if(expected.winner) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(screen.getByText(expected.winner + " wins!")).toBeVisible();
          }
        })
    );
  });

# Classic TicTacToe
Design:
BoardView display board & xos, who's turn and if anybody has won
   Could be grid but lets do table for better accessability.
BoardController contains state of board, last move
  - util function for win
  - board stored as flat array, not 3x3, easier to do win calculation
Styled components

Tests
  - Place X, in right display spot
  - tap again in same spot, no change
  - tap again in different spot, in correct display spot.
  - Array of states, then move spots.

## Assessment

Took about 75 minutes with test cases.  Seems a bit too long.
Probably didn't need Board component, could have used App.

What did I not do?

 - use Button and Square component, I did td.
 - show who's move it is, status section for wins/next/draw
 - Could have done "XIsNext" instead of storing X or O

What did I forget and figure out:
- changed state objects but not state so rerender wasn't happening
- {for} wasn't working so switched to [0, 1, 2].forEach
- some small html stuff like tbody inside table.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

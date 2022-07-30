/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

function checkForBingo(bingoCard, drawnNumbers) {
  console.log('Drawn Numbers: ' + JSON.stringify(drawnNumbers));

  //construct
  const arr = [[], [], [], [], []];

  for (let i = 0, len = bingoCard.length; i < len; i++) {
    let row = Math.floor(i / 5);
    let col = i % 5;
    drawnNumbers.includes(bingoCard[i]) ? arr[row][col] = -1 : arr[row][col] = bingoCard[i];
  }
  arr[2][2] = -1
  console.log(arr)

  //check rows
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == -1) {
        count++;
      } else {
        count = 0;
        break;
      }
    }
    if (count == 5) {
      return true
    }
  }

  //check cols
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][i] == -1) {
        count++;
      } else {
        count = 0;
        break;
      }
    }
    if (count == 5) {
      return true
    }
  }

  //check diagonal top left  -> bottom right
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] == -1) {
      count++;
    }
    if (count == 5) {
      return true
    }
  }
  //check diagonal top right -> bottom left
  count = 0;
  for (let i = 0, j = 4; i < arr.length; i++, j--) {
    if (arr[i][j] == -1) {
      count++;
    }
    if (count == 5) {
      return true
    }
  }


  return false;
}



module.exports = checkForBingo;

// here are some samples

// this should return true with diagonal + free
console.log(checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    8, 24, 53, 72
  ]
));

// this should return false
console.log(checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    1, 33, 53, 65, 29, 75
  ]
));
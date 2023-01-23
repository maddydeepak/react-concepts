// MxN array

// 2   3   4
// 5   6   7

// a = 1   2   3   4
//     5   6   7   8
//     9   10  11  12
//     13  14  15  16
// --------------------------

// output : 13 14 9 5 10 15 16 11 6 1 2 7 12 8 3 4

// a = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

void transformMatrix(a);
{
  var tempArr = [];
  const size = a.length * a[0].length;
  var currXIndex = a.length - 1;
  var currYIndex = 0;
  var moveUp = false;
  var moveRight = true;
  var diagonalUp = false;
  var diagonalDown = false;
  tempArr.push(a[currXIndex][currYIndex]);
  for (let i = 1; i < size; i++) {
    if (moveRight) {
      currYIndex = currYIndex + 1;
      moveRight = false;
      if (currXIndex == 0) {
        diagonalDown = true;
      } else if (currXIndex == a.length - 1) {
        diagonalUp = true;
      }
    } else if (moveUp) {
      currXIndex = currXIndex - 1;
      moveUp = false;
      if (currYIndex == 0) {
        diagonalDown = true;
      } else if (currYIndex == a.length - 1) {
        diagonalUp = true;
      }
    } else if (diagonalUp) {
      currXIndex = currXIndex - 1;
      currYIndex = currYIndex - 1;
      if (currXIndex == 0) {
        diagonalUp = false;
        moveRight = true;
      } else if (currYIndex == 0) {
        moveUp = true;
        diagonalUp = false;
      }
    } else if (diagonalDown) {
      currXIndex = currXIndex + 1;
      currYIndex = currYIndex + 1;
      if (currYIndex == a.length - 1) {
        diagonalDown = false;
        moveUp = true;
      } else if (currXIndex == a.length - 1) {
        moveRight = true;
        diagonalDown = false;
      }
    }
    tempArr.push(a[currXIndex][currYIndex]);
  }
}

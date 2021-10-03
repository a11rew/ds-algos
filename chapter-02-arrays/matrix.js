// 2D matrix

let averageTemp = [];

averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

for (i = 0; i < averageTemp.length; i++) {
  for (j = 0; j < averageTemp[i].length; j++) {
    // 1 increment for semantics
    console.log(`Matrix row ${i + 1}, Column: ${j + 1}: ${averageTemp[i][j]}`);
  }
}

// 3x3x3 matrix
// Each cell contains the sum of row, column and depth

let matrix3x3x3x3 = [];

for (i = 0; i < 3; i++) {
  // Row
  matrix3x3x3x3[i] = [];
  for (j = 0; j < 3; j++) {
    // Column
    matrix3x3x3x3[i][j] = [];
    for (z = 0; z < 3; z++) {
      // Depth
      matrix3x3x3x3[i][j][z] = i + j + z;
    }
  }
}

console.log(matrix3x3x3x3);

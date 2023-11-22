// @ts-nocheck
// 有效的数独

// 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
var isValidSudoku = function (board) {
  const map = new Map();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const current = board[row][col];
      if (current === ".") continue;
      const result = validateVal(
        map,
        [
          `col_${col}`,
          `row_${row}`,
          `box_${parseInt(row / 3) + parseInt(col / 3) * 3}`,
        ],
        current
      );
      if (result === false) return false;
    }
  }
  return true;
  function validateVal(map, keys, current) {
    for (let i = 0; i < keys.length; i++) {
      const set = map.get(keys[i]);
      if (!set) {
        map.set(keys[i], new Set([current]));
      } else {
        if (!set.has(current)) return false;
        set.add(current);
      }
    }
    return true;
  }
};

var isValidSudoku = function (board) {
  const size = board.length;
  const rowSet = new Set();
  const colSet = new Set();
  for (let i = 0; i < size; i++) {
    rowSet.clear();
    colSet.clear();
    // 每一行不能有重复的
    for (let j = 0; j < size; j++) {
      // 9 * 9
      const rowij = board[i][j];
      const colij = board[j][i];
      if (
        (rowij !== "." && rowSet.has(rowij)) ||
        (colij !== "." && colSet.has(colij))
      ) {
        return false;
      }
      rowSet.add(rowij);
      colSet.add(colij);
    }
  }

  for (let i = 0; i < size; i += 3) {
    for (let j = 0; j < size; j += 3) {
      rowSet.clear();
      for (let k = 0; k < 3; k++) {
        for (let m = 0; m < 3; m++) {
          const cur = board[i + k][j + m];
          if (cur !== "." && rowSet.has(cur)) {
            return false;
          }
          rowSet.add(cur);
        }
      }
    }
  }
  return true;
};

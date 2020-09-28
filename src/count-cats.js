module.exports = function countCats(matrix) {
  let number = 0
  matrix.forEach(item => {
    if (item.includes('^^')) {
      item.forEach(item => {
        if (item == '^^') {
          number++;
        }
      });
    }
  });
  return number;
};

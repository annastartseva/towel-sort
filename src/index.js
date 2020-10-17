// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === [] || matrix === undefined) { return [] };
    let result = matrix.reduce((result, element, index) => result.concat(index % 2 !== 0 ? element.reverse() : element), []);
    return result;
}
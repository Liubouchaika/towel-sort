
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix == undefined || matrix == [] ) {
  		return [];
  	} else {
  		let array = [];
  		for (let i = 0; i < matrix.length; i ++) {
  			if (i % 2 == 0) {
  				array.push(matrix[i]);
  			} else {
  				let odd = matrix[i];
  				let newOdd = odd.reverse();
  				array.push(newOdd);
  			}
  		}
  		return array.flat(Infinity);
  	}
}

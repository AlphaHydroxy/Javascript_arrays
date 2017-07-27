var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(2, 0, 3);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(item){
			return Math.pow(item, 2);
	})
},

	// sum: function (arr) {
	// 	var total = 0;
	// 	for(var i in arr) {
	// 		total += arr[i]; 
	// 	}
	// 	return total;
	// },

	sum: function (arr) {
		return arr.reduce(function(sum, value){
			return sum + value;
		})
	},

	findDuplicates: function (arr) {
		if(arr.filter){
			duplicates = arr.filter(function(num, i){
				return arr.lastIndexOf(num) == i && arr.indexOf(num) != i;
			})
		}
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		var removed = arr.filter(function(num){
			return valueToRemove !== num;
		});
		return removed;
	},

	findIndexesOf: function (arr, itemToFind) {
		var findIndex = [];
	for(var i = 0; i < arr.length; i++){
			if( arr[i] === itemToFind){
				findIndex.push(i);
			}
		}
		return findIndex;
	},

	// sumOfAllEvenNumbersSquared: function (arr) {
	// 	var evenNumbersSquared = 0;
	// 	for(var i = 0; i < arr.length; i++){
	// 		if(i % 2 === 0){
	// 			console.log(i);
	// 			return i *= i;
	// 			// Math.sqrt(i);
	// 			console.log(i);
	// 			evenNumbersSquared += i;
	// 		}
	// 	}
	// 	return evenNumbersSquared;
	// }
	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0;
		arr.forEach(function(number){
			if(number % 2 === 0){
				total += Math.pow(number, 2);
			}
		})
		return total;
	}

}


module.exports = arrayTasks;

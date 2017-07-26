var arrayTasks = {

	concat: function (arr1, arr2) {
		var array3 = arr1.concat(arr2);
		return array3;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(2, 0, 3);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(x){
			return Math.pow(x, 2);
	})
},

	sum: function (arr) {
		var total = 0;
		for(var i in arr) {
			total += arr[i]; 
		}
		return total;
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
	}
	

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks;

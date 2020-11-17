let array = [ 8, 4, 23, 42, 16, 15 ];
function quicksort(array, start, end) {
	if (start >= end) {
		return array;
	}
	let boundry = partion(array, start, end);
	quicksort(array, start, boundry - 1);
	quicksort(array, boundry + 1, end);
	return array;
}
function partion(arr, start, end) {
	let pivotimdex = start;
	let pivot = arr[end];

	for (let i = start; i < end; i++) {
		if (arr[i] <= pivot) {
			// boundry++
			swap(arr, i, pivotimdex);
			pivotimdex++;
		}
	}
	swap(arr, pivotimdex, end);
	return pivotimdex;
}
function swap(array, i, boundry) {
	let temp = array[i];
	array[i] = array[boundry];
	array[boundry] = temp;
}
console.log(quicksort(array, 0, array.length - 1), array);
module.exports = quicksort;

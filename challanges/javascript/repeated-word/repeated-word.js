let str = 'Once upon a time, there was a brave princess who...';
function reapeat(str) {
	let str2 = str.replace(/,/g, '').toLowerCase().split(' ');
	console.log(str2);
	let largeCount = 0;
	let largeRepest = '';
	for (let i = 0; i < str2.length; i++) {
		let count = 0;
		let j = i + 1;
		// console.log(jstr2.length)
		while (j < str2.length) {
			// console.log(count,str2[i],str2[j],j)
			if (str2[i] === str2[j]) {
				count = count + 1;
				console.log(count, str2[i]);
				//  console.log(str2[i]==str2[j],count+1)

				// console.log(str2[i]==str2[j],count)
			}

			j = j + 1;
			if (0 < count) {
				// largeCount=count
				largeRepest = str2[i];
				return largeRepest;

				//  console.log(largeCount,str2[i])
			}
		}
	}
}
// console.log(reapeat(str));
module.exports = reapeat;

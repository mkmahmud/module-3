function addUp(num) {
	let total = 0;
	let totalArray = [];
	for(let i = 1; i <= num; i++){
		totalArray.push(i);
	}
	for(let i =1; i <= totalArray.length; i++){
		total += i;
	}
    return total;
}

// console.log(addUp(4))





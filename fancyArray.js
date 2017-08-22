function fancyArray(arr,symbol,reversed){
	
	if(symbol === undefined){
		symbol = "-->";
	}

	if(reversed === true){
		for (var i = 0; i < arr.length/2; i++){
			var temp = arr[i];
			arr[i] = arr[arr.length-1-i];
			arr[arr.length-1-i] = temp;
		}
		for (var i = 0; i < arr.length; i++){
			console.log(i + " " + symbol + " " + arr[i]);
		}
	}

	if(reversed === false){
		for (var i = 0; i < arr.length; i++){
			console.log(i + " " + symbol + " " + arr[i]);
		}
	}
}

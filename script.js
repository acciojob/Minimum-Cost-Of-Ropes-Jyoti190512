function calculateMinCost() {
  //your code here
	event.preventDefault();
	const ropeLengthsInput = document.getElementById('ropeLengths');
	const resultDiv = document.getElementById('result');

	const ropeLengths = ropeLengthsInput.value.split(',').map(Number);

	if (ropeLengths.length < 2) {
		resultDiv.textContent = 'At least two ropes are required';
		return;
	}

	let minCost = 0;

	while (ropeLengths.length > 1) {
		ropeLengths.sort((a, b) => a - b);
		const sum = ropeLengths[0] + ropeLengths[1];
		minCost += sum;
		ropeLengths.splice(0, 2, sum);
	}

	resultDiv.textContent = `Minimum cost of ropes: ${minCost}`;
}

  
  
  
}  

// Catching the input date

document.getElementById('dateInput').addEventListener('change', function () {
	var input = this.value;
	var dateEntered = new Date(input);
	console.log(input); //e.g. 2015-11-13
	console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)

	return (yourDateOfBirth = input);
});

// Catching the today date

let today = new Date().toISOString().slice(0, 10);

console.log(today);

// Counting the difference between the current date and the current date

function dateDiffInDays(today, yourDateOfBirth) {
	const _MS_PER_DAY = 1000 * 60 * 60 * 24;

	// Discard the time and time-zone information.

	const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
	const utc2 = Date.UTC(
		yourDateOfBirth.getFullYear(),
		yourDateOfBirth.getMonth(),
		yourDateOfBirth.getDate()
	);

	console.log(Math.floor((utc2 - utc1) / _MS_PER_DAY));
}

// Displaying the difference

dateDiffInDays();

// If there is no input date, don't display the paragraph

console.log('hello');

const btnEl = document.getElementById('btn');
const birthdayEl = document.getElementById('birthday');
const resultEl = document.getElementById('result');

const calculateAge = () => {
	console.log('clicked');
	const birthdayValue = birthdayEl.value;

	if (birthdayValue == '') {
		alert('Please select the date');
	} else {
		const age = getAge(birthdayValue);
		resultEl.innerHTML = `Your age is ${age}`;
	}
};

const getAge = (birthdayValue) => {
	const currentDate = new Date();
	const birthdayDate = new Date(birthdayValue);

	const yearOfBirth = birthdayDate.getFullYear();
	const yourAge = currentDate.getFullYear() - yearOfBirth;

	console.log(yourAge);
	return yourAge;
};

btnEl.addEventListener('click', () => {
	calculateAge();
});

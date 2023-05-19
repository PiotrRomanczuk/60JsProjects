const buttonEl = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalSpan = document.getElementById('total');

buttonEl.addEventListener('click', () => {
	calculateTotal();
});

const calculateTotal = () => {
	const billValue = billInput.value;
	const tipValue = tipInput.value;

	let total = billValue * (1 + tipValue / 100);
	// console.log(total);

	totalSpan.innerHTML = `${total.toFixed(2)}`;
};

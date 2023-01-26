const dice = document.querySelector(".dice");
const num = document.querySelector(".num");
const btn = document.querySelector("button");

const randomNumber = () => {
	let random = Math.floor(Math.random() * 6) + 1;
	num.textContent = random;
};

btn.addEventListener("click", randomNumber);

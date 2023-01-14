const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		body.style.background = "#eee";
		body.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});

function load() {
	buttons = document.getElementsByClassName("wf-button");
	buttons.array.forEach(element => {
		element = setStyle(element);
	});
}

function createButton(value) {

}

function setStyle(button) {
	if (typeof button == "object" && button.tagName == "button") {
		button.style = "background-color:#323232;border-radius:6px;display:flex;padding: 3px 8px;justify-content: center;align-items: center;";
	}
}
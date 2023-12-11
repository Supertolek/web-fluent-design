function load() {
	buttons = document.getElementsByTagName("wf-button");
}

function createButton(value) {

}

function setStyle(button) {
	if (typeof button == "object" && button.tagName == "wf-button") {
		button.style.background = "#323232";
	}
}
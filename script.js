var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listElements = document.querySelectorAll("li");
var deleteButtons = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	li.addEventListener("click", toggleDone);
	addDeleteButton(li);
	input.value = "";
}

function toggleDone() {
	if (this.classList.contains("done")) {
		this.classList.toggle("done");
	}
	else {
		this.classList.add("done");
	}
}

function deleteListElement(event) {
	event.target.removeEventListener("click", deleteListElement);
	event.target.parentNode.removeEventListener("click", toggleDone);
	event.target.parentNode.remove();
}

function addDeleteButton(listElement) {
	var newButton = document.createElement("button");
	listElement.appendChild(newButton);
	newButton.innerHTML = "Delete";
	newButton.addEventListener("click", deleteListElement)
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Add event listeners to existing list items.
for (var i = 0; i < listElements.length; i++) {
	listElements[i].addEventListener("click", toggleDone);
}

// Add event listeners to existing delete buttons.
for (var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", deleteListElement)
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//1. If you click on the list item, it toggles the .done  class on and off.

//2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

//3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 
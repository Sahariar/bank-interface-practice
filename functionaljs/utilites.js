function getInputValueById(inputFieldId) {
	const inputfield = document.getElementById(inputFieldId);
	const inputfieldValueString = inputfield.value;
	const inputfieldValueFloat = parseFloat(inputfieldValueString);
	inputfield.value = "";

	return inputfieldValueFloat;
}

function getPreviousValueById(elementId) {
	const element = document.getElementById(elementId);
	const elementString = element.innerText;
	const value = parseFloat(elementString);
	return value;
}

function setTextElementVauleById(elementId, newValue) {
	const element = document.getElementById(elementId);
	return (element.innerText = newValue);
}

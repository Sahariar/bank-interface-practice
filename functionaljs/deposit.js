// step one: CLick add lisenter to button.

document
	.getElementById("submit-deposit")
	.addEventListener("click", function () {
		const previousValue = getPreviousValueById("deposit-view");
		const currentInputValue = getInputValueById("user-deposit");
		// balance previous value.
		const balancePreviousValue = getPreviousValueById("balance");
        
		if (isNaN(currentInputValue)) {
			// check if input is number
			alert("Sorry Please provide a valid Number");
		} else {
			// Show deposit text view to update amount
			const currentDepositValue = previousValue + currentInputValue;
			setTextElementVauleById("deposit-view", currentDepositValue);
			// Show Balnce text view to update amount
			const currentBalanceValue = currentDepositValue + balancePreviousValue;
			setTextElementVauleById("balance", currentBalanceValue);
		}
	});

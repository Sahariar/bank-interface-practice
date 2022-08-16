// step one: CLick add lisenter to button.

    document.getElementById('submit-deposit').addEventListener('click' , function(){
        // step : get inputfield info and convert deposit field input to float.

        const depositField = document.getElementById('user-deposit');
        const depositFieldValue = depositField.value;
        const depositFieldValueFloat = parseFloat(depositFieldValue);

        const depositOld = document.getElementById('deposit-view');
        const depositOldValue = depositOld.innerText;
        const depositOldValueFloat = parseFloat(depositOldValue);

        const balanceOld = document.getElementById('balance');
        const balanceOldValue = balanceOld.innerText;
        const balanceOldValueFloat = parseFloat(balanceOldValue);

        // console.log(depositFieldValueFloat, depositOldValueFloat,balanceOldValueFloat );

        if(isNaN(depositFieldValueFloat)){
            depositField.value = '';
            alert('Sorry Please provide a valid Number');
        }else{
            depositField.value = '';
            // calculate old and new value to current deposit value const.
        const currentDepositValue = depositFieldValueFloat + depositOldValueFloat;
        // show that value to depositeoldvalue view.
        depositOld.innerText = currentDepositValue;
            // calculate old and new value to current deposit value const.
        const currentBalanceValue = depositFieldValueFloat + balanceOldValueFloat;
        // show that value to depositeoldvalue view.
        balanceOld.innerText = currentBalanceValue;

    }

    });
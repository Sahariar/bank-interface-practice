// step one: CLick add lisenter to button.

document.getElementById('submit-withdraw').addEventListener('click' , function(){
    // step : get inputfield info and convert withdraw field input to float.

    const withdrawField = document.getElementById('user-withdraw');
    const withdrawFieldValue = withdrawField.value;
    const withdrawFieldValueFloat = parseFloat(withdrawFieldValue);
    withdrawField.value = '';
    const withdrawOld = document.getElementById('withdraw-view');
    const withdrawOldValue = withdrawOld.innerText;
    const withdrawOldValueFloat = parseFloat(withdrawOldValue);

    const balanceOld = document.getElementById('balance');
    const balanceOldValue = balanceOld.innerText;
    const balanceOldValueFloat = parseFloat(balanceOldValue);

    // console.log(withdrawFieldValueFloat, withdrawOldValueFloat,balanceOldValueFloat );

    if(isNaN(withdrawFieldValueFloat)){
        
        alert('Sorry Please provide a valid Number');
    } else if( balanceOldValueFloat < withdrawFieldValueFloat ){
        alert('You do not have that amount in your Balance');
    }else{
        // calculate old and new value to current withdraw value const.
    const currentwithdrawValue = withdrawFieldValueFloat + withdrawOldValueFloat;
    // show that value to withdraweoldvalue view.
    withdrawOld.innerText = currentwithdrawValue;
        // calculate old and new value to current withdraw value const.
    const currentBalanceValue = balanceOldValueFloat - withdrawFieldValueFloat ;
    // show that value to withdraweoldvalue view.
    balanceOld.innerText = currentBalanceValue;

}

});
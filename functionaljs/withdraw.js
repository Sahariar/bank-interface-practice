// step one: CLick add lisenter to button.

document.getElementById('submit-withdraw').addEventListener('click' , function(){
    // step : get inputfield info and convert withdraw field input to float.

    const previousWithdrawText = getPreviousValueById('withdraw-view');
    const withdrawInputValue = getInputValueById('user-withdraw');
    const balancePreviousValue = getPreviousValueById("balance");

    if(isNaN(withdrawInputValue)){
        alert('Sorry Please provide a valid Number');
    } else if( balancePreviousValue < withdrawInputValue ){
        alert('You do not have that amount in your Balance');
    }else{
        // calculate old and new value to current withdraw value const.
    const currentwithdrawValue = previousWithdrawText + withdrawInputValue;
    // show that value to withdraweoldvalue view.
    setTextElementVauleById('withdraw-view', currentwithdrawValue);
        // calculate old and new value to current withdraw value const.
    const currentBalanceValue = balancePreviousValue - withdrawInputValue ;
    // show that value to withdraweoldvalue view.
    setTextElementVauleById('balance' , currentBalanceValue);
}
});
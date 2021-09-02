// add event handler for deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    // update deposit total

    /* const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);
    depositInput.value = '';

    const depositTotal = document.getElementById('deposti-total');
    depositTotal.innerText = depositAmount; */

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(depositAmountText);
    // depositInput.value = '';

    // Get deposit value

    /* Declare a variable for use same funtion  */



    // update deposite total;
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const previousDeposiTotalText = depositTotal.innerText;
    const previousDeposiTotal = parseFloat(previousDeposiTotalText);
    const newDepositTotal = previousDeposiTotal + newDepositAmount;
    depositTotal.innerText = newDepositTotal; */



    // update balance total
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceAmountText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceAmountText);
    const newBalanceTotal = balanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal; */
    const newDepositAmount = getInputValue('deposit-input');
    /* if (newDepositAmount < 0) {
        const errorMessage = document.getElementById('deposit-error');
        errorMessage.innerHTML = '*Please enter a positive number to deposit.';
    } */
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }


})

// update withdraw total amount;
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // withdrawInput.value = '';

    /* Declare a variable for use same funtion  */

    // get an update of total withdraw amount

    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; 
    */

    // update balance total for withdraw case;
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceAmountText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceAmountText);
    const newBalanceTotal = balanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */
    const newWithdrawAmount = getInputValue('withdraw-input')
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance()) {
        updateTotalField('withdraw-total', newWithdrawAmount)
        updateBalance(newWithdrawAmount, false);
    }

})
// Share a common Function in multiple similar case for reducing same code repeat.
function getInputValue(inputId) {
    const userInput = document.getElementById(inputId);
    const userAmount = userInput.value;
    const newAmount = parseFloat(userAmount);
    userInput.value = '';
    return newAmount;
}


function updateTotalField(fieldId, newDepositAmount) {
    const totalField = document.getElementById(fieldId);
    const totalText = totalField.innerText;
    const previousTotal = parseFloat(totalText);
    const newTotal = previousTotal + newDepositAmount;
    totalField.innerText = newTotal;
}


// Get current Balance
function currentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmountText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceAmountText);
    return balanceAmount;
}


function updateBalance(inputAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmountText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceAmountText);
    if (isAdd == true) {
        const newBalanceTotal = balanceAmount + inputAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = balanceAmount - inputAmount;
        balanceTotal.innerText = newBalanceTotal;
    }

}
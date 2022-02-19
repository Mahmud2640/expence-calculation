function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  let amount = input.value;
  const amountTotal = parseFloat(amount);
  return amountTotal;
}

document
  .getElementById("calculator-button")
  .addEventListener("click", function () {
    const incomeAmountTotal = getInputValue("input-income");
    if (incomeAmountTotal < 0) {
      document.getElementById("error-income").style.display = "block";
    }
    const foodAmountTotal = getInputValue("input-food");
    if (foodAmountTotal < 0) {
      document.getElementById("error-food").style.display = "block";
    }
    const rentAmountTotal = getInputValue("input-rent");
    if (rentAmountTotal < 0) {
      document.getElementById("error-rent").style.display = "block";
    }
    const clothesAmountTotal = getInputValue("input-clothes");
    if (clothesAmountTotal < 0) {
      document.getElementById("error-clothes").style.display = "block";
    }

   

    //  calculate expence

    const totalExpence = foodAmountTotal + rentAmountTotal + clothesAmountTotal;

    if(totalExpence < incomeAmountTotal){
      const displayTotalExpence = document.getElementById("total-expenses");
    displayTotalExpence.innerText = totalExpence;
  }
  else{
      document.getElementById("error-expanses").style.display = "block";
  }

    //  calculate balance

    const balance = incomeAmountTotal - totalExpence;
    const displayTotalBalance = document.getElementById("balance");
    displayTotalBalance.innerText = balance;
  });

//   secound part

document.getElementById("save-btn").addEventListener("click", function () {
  const income = getInputValue("input-income");
  const saveAmmount = getInputValue("save-input");

  const totalSaveing = (income * saveAmmount) / 100;

  if(totalSaveing < income){
   const displaysaveBalance = document.getElementById("saving-amount");
  displaysaveBalance.innerText = totalSaveing;
}
else{
   document.getElementById("error-saveing-amount").style.display = "block";
}



  const balance = getInputValue("balance");
  const savingAmmount = getInputValue("saving-amount");
  const remainingBalance = balance - savingAmmount;
  const totalremaning = parseFloat(remainingBalance);
  const displayRemainingBalance = document.getElementById("remaining-balance");
  displayRemainingBalance.innerText = totalremaning;
});

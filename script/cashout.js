document.getElementById("cashout-btn").addEventListener("click",function(){
    // 1.get the agent number and validate
    const cashoutNumberInput=document.getElementById("cashout-number");
    const cashoutNumber=cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length !=11){
        alert("Invalid agent number");
        return;
    }


    // 2.get amount , validate, convert to number 
    const cashoutAmountInput=document.getElementById("cashout-ammount");
    const cashoutAmount=cashoutAmountInput.value;
    console.log(cashoutAmount);


    // 3.get balance , validate, convert to number 
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    console.log(balance);

    // 4.calculate balance

    const newBalance=Number(balance)-Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid amount");
        return;
    }
    console.log("New balance",newBalance);

    // 5. get the pin and verified it 
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if(pin === "1234"){
        // 5-1. true: show and alert>set balance
        alert("successfully cash out");
        console.log(newBalance);
        balanceElement.innerText=newBalance;
    }
    else{
        // 5-2. false: show and alert>return
        alert("invalid pin");
        return;
    }
})
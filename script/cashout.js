document.getElementById("cashout-btn").addEventListener("click",function(){
    // 1.get the agent number and validate
    const cashoutNumber=getValueFromInput("cashout-number");
    console.log(cashoutNumber);
    if(cashoutNumber.length !=11){
        alert("Invalid agent number");
        return;
    }

    // 2.get amount , validate, convert to number 
    const cashoutAmount=getValueFromInput("cashout-ammount");
    console.log(cashoutAmount);

    // 3.get balance , validate, convert to number 
    const currentBalance=getBalance();

    // 4.calculate balance

    const newBalance=currentBalance-Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid amount");
        return;
    }


    // 5. get the pin and verified it 
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if(pin === "1234"){
        // 5-1. true: show and alert>set balance
        alert("successfully cash out");
        setBalance(newBalance);
        // 0. history container ka dora niya asbo
        const history=document.getElementById("history-container");

        // 1.New div create korbo
        const newHistory=document.createElement("div");

        // 2.new div a inner html addd korbo
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">
             Cashout ${cashoutAmount} TAKA Success to ${cashoutNumber} at ${new Date()}
            </div>
        `;
        // 3.history container and newDiv append korbo
        
        history.append(newHistory);
    }
    else{
        // 5-2. false: show and alert>return
        alert("invalid pin");
        return;
    }

})
// document.getElementById("cashout-btn").addEventListener("click",function(){
//     // 1.get the agent number and validate
//     const cashoutNumberInput=document.getElementById("cashout-number");
//     const cashoutNumber=cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !=11){
//         alert("Invalid agent number");
//         return;
//     }


//     // 2.get amount , validate, convert to number 
//     const cashoutAmountInput=document.getElementById("cashout-ammount");
//     const cashoutAmount=cashoutAmountInput.value;
//     console.log(cashoutAmount);


//     // 3.get balance , validate, convert to number 
//     const balanceElement=document.getElementById("balance");
//     const balance=balanceElement.innerText;
//     console.log(balance);

//     // 4.calculate balance

//     const newBalance=Number(balance)-Number(cashoutAmount);
//     if(newBalance < 0){
//         alert("Invalid amount");
//         return;
//     }
//     console.log("New balance",newBalance);

//     // 5. get the pin and verified it 
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if(pin === "1234"){
//         // 5-1. true: show and alert>set balance
//         alert("successfully cash out");
//         console.log(newBalance);
//         balanceElement.innerText=newBalance;
//     }
//     else{
//         // 5-2. false: show and alert>return
//         alert("invalid pin");
//         return;
//     }
// })
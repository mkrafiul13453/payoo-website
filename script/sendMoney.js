document.getElementById("send-money-btn").addEventListener("click",function(){
    const accountNumber=getValueFromInput("account-number");
    if(accountNumber.length != 11){
        alert("Invalid account number.");
        return;
    }

    const sendAmount=document.getElementById("send-amount");
    const amount=sendAmount.value;
    const newBalance=getBalance()-Number(amount);
    
    const sendPin = getValueFromInput("send-pin");
    if(sendPin=="1234"){
        alert(`Send money successfully form ${accountNumber} Amount is ${amount} at${new Date()}`);
        setBalance(newBalance);
        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">
             Send money successfully from
              ${accountNumber} Amount is ${amount} at ${new Date()}
            </div>
        `;        
        history.appendChild(newHistory);
    }

    else{
        alert("invalid pin number.");
        return;
    }
})
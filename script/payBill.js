document.getElementById("add-pay-btn").addEventListener("click",function(){
    const paySelected = getValueFromInput("pay-select");
    if(paySelected == "Select back"){
        alert("Select a bank.");
        return;
    }

    const billerAccountNumber=getValueFromInput("biller-account-number");
    if(billerAccountNumber.length != 11){
        alert("Invalid account number");
        return;
    }

    const payAmount=getValueFromInput("add-pay-amount");
    const newBalance=getBalance()-Number(payAmount);

    const payPin=getValueFromInput("add-pay-pin");
    if(payPin == "1234"){
        setBalance(newBalance);
        const history=document.getElementById("history-container");
        const newHistory=document.createElement("div");
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">
             Pay bill successfully from
              ${billerAccountNumber} Amount is ${payAmount} at ${new Date()}
            </div>
        `;        
        history.appendChild(newHistory);
    }
    else{
        alert("Invalid pin number.")
    }
})
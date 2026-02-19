document.getElementById("add-money-btn").addEventListener("click",function(){
    // 1. Get the bank account
    const bankAccount=getValueFromInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert("please select a bank");
        return;
    }

    // 2.get bank account number
    const accno=getValueFromInput("add-money-number");
    if(accno.length != 11){
        alert("invalid account no");
        return;
    }


    // 3. get amount
    const amount=getValueFromInput("add-money-amount");
    const newBalance=getBalance() + Number(amount);

    const pin = getValueFromInput("add-money-pin");
    if(pin =="1234"){
        alert(`Add money successfully from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);
        // 0. history container ka dora niya asbo
        const history=document.getElementById("history-container");

        // 1.New div create korbo
        const newHistory=document.createElement("div");

        // 2.new div a inner html addd korbo
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">
             Add money successfully from
              ${bankAccount}, Account-no:${accno} at ${new Date()}
            </div>
        `;
        // 3.history container and newDiv append korbo
        
        history.append(newHistory);
        }
        else{
            alert("Invalid pin number");
            return;
        }

});
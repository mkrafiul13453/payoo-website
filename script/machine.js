function getValueFromInput (id){
    const input = document.getElementById(id);
    const value=input.value;
    console.log(id,value);
    return value;
}


// --> machine for get balance

function getBalance(){
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    console.log("Current Balance",Number(balance));
    return Number(balance);
}


// machine value input nibe and -->set the balance

function setBalance (value){
    const balanceElement=document.getElementById("balance");
    balanceElement.innerText=value;
}



// machine get a id > sob id agaie hide kora thakbe >jai id dibo oitai show korbe

function showOnly(id){
    console.log("Clicked");
    const addmoney=document.getElementById("add-money");
    const cashout=document.getElementById("cashout");
    const history=document.getElementById("history");

    // Sobaika hide kore dao
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    history.classList.add("hidden");

    // id wala element ta show koro
    const selected=document.getElementById(id);
    selected.classList.remove("hidden");

}

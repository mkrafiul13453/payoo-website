console.log("Login functionality is coming.")

// 1. get the mobile number input.
// 2. get the pin number input.
// 3. match the pin and the mobile number.
// 3-1: true: alert and go to the home page.
// 3-2: false: alert and return.

document.getElementById("login-btn").addEventListener("click",function(){
    console.log("log in button is click")

    // 1. get the mobile number input.
    const numberInput=document.getElementById("input-number");
    const contactNumber=numberInput.value;
    console.log(contactNumber);


    // 2. get the pin number input.
    const inputPin=document.getElementById("input-pin");
    const pin=inputPin.value;
    console.log(pin);


    // 3. match the pin and the mobile number.
    // 3-1: true: alert and go to the home page.
    // 3-2: false: alert and return.
    if(contactNumber=="01234567890" && pin=="1234"){
        alert("Login successfully");
        window.location.assign("/home.html");
    }
    else{
        alert("Fail to login")
    }
})
//.........create an account register a new account........

function Register(){
    //1.fetch values from html
    uname=user.value
    acno=acno.value
    pswd=regpass.value
    
    console.log(acno,uname,pswd);
    
    //2. create accountnoDetails object
    accountDetails={
        acno,
        uname,
        pswd,
        balance:0
    }
    
    //3.check if acno laready presnt in local storage
    if(acno in localStorage){
        alert("User already registered")
    }else
    {
        //To set details in localStorage
        localStorage.setItem(acno,JSON.stringify(accountDetails))
        alert('registration succesfully')
        //redirect to login page
        window.location="./login.html"
        
    }
    
    


}

    
    
    
    //________________login______________________
    function LoginAc(){
        //1. fetch the details
        acno=inplogin.value
        pswd=inppass.value
        console.log(acno,pswd);
    
        //2.check if acno is present in local storage
    
        if(acno in localStorage){
            accountDetails=JSON.parse(localStorage.getItem(acno));
            if(pswd==accountDetails.pswd){
                alert("Login Successful")
window.location="./home.html" 
           }else{
                alert("Incorrect password")
            }
        }else{
            alert("Invalid account number")
        }
    }
    
    let amnt=0;
    let withdraw=0;
    let balance=0;
    let pswd='';
    function deposit(){
        amnt=dep_amount.value
        acno=dep_acno.value
        amnt=Math.floor(amnt)

        console.log(amnt,acno);
        if(acno in localStorage){
            accountDetails=JSON.parse(localStorage.getItem(acno))
            if(amnt<=0){
                alert('value cant be empty or negative')
            }
            else{
                accountDetails.balance+=amnt
                localStorage.setItem(acno,JSON.stringify(accountDetails))
        alert(`your amount ${amnt} succesfully added`)
        let htmldata=document.getElementById('balance')
        htmldata.innerHTML=`<p class="text-white fw-bolder mt-2 fs-5 text-center shadow-lg">
        Your current balance is: ${accountDetails.balance}
        </p>`

            }
        }
        else{
            alert('incorrect account number')
        }
    }
    


    function withdrawal(){
        amnt=wd_amount.value
        acno=wd_acno.value
        amnt=Math.floor(amnt)

        if(acno in localStorage){
            details=JSON.parse(localStorage.getItem(acno))
            if(acno==details.acno && amnt<=0){
                alert('please enter a amount')
            }
            else if(amnt>details.balance){
                alert('insufficient balance')
            }
            else{
                alert('account balance before withdrawal:'+ details.balance)
                alert('withdrawal balance is:' +amnt)
                details.balance-=amnt
                alert('your amount succesfully withdrawed')

                localStorage.setItem(acno,JSON.stringify(details))
                alert('after withdrawal, balance is :'+details.balance)
                document.getElementById("withdraw_amount").innerHTML=`<div class="text-white fs-5 fw-bold mt-2 text-center shadow ">Your Current Balance is :  <span class=" fw-bolder"> ₹ ${details.balance}</span></div>`
}
        }
    else{
        alert('incorrect account number')
    }
    }

        function logout() {
        localStorage.clear();
        window.location = "./index.html";
    }
    

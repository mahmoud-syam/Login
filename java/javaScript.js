
// this all to tosign and tologin
var toLogin=document.getElementById("toLogin");

var toSign=document.getElementById("toSign");
toLogin.addEventListener("click",hideBtnSignAndPassword)
function hideBtnSignAndPassword()
{
document.getElementById("btnLogin").style.display="block";
document.getElementById("btnSign").style.display="none";
document.getElementById("nameUser").style.display="none";
document.getElementById("pLogin").style.display="none";
document.getElementById("pSign").style.display="block";
document.getElementById("pInvalidPassword").style.display="none";
document.getElementById("pInvalidName").style.display="none";
document.getElementById("pInvalidEmail").style.display="none";
}

toSign.addEventListener("click",hideBtnLogin)

function hideBtnLogin()
{
document.getElementById("btnLogin").style.display="none";
document.getElementById("btnSign").style.display="block";
document.getElementById("nameUser").style.display="block";
document.getElementById("pLogin").style.display="block";
document.getElementById("pSign").style.display="none";
document.getElementById("pInvalidPassword").style.display="none";
document.getElementById("pInvalidName").style.display="none";
document.getElementById("pInvalidEmail").style.display="none";
document.getElementById("loginInvalid").style.display="none";
}
// 
var btnSign=document.getElementById("btnSign");
btnSign.addEventListener("click",signUp)



var nameUser=document.getElementById("nameUser");
var emailUser=document.getElementById("emailUser");
var passwordUser=document.getElementById("passwordUser");

// password validate

 var regularExpressionPass  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

passwordUser.addEventListener("keyup" ,passwordValidate);
function passwordValidate(){

 if(regularExpressionPass.test(passwordUser.value)) {
    

    document.getElementById("icPasCorrect").style.display="block";
    document.getElementById("pInvalidPassword").style.display="none";

    document.getElementById("icPasCorrect").style.color="#17acb8";
   
}
else{
    document.getElementById("pInvalidPassword").style.display="block";
    document.getElementById("icPasCorrect").style.display="none";

   


}
}

// email validate
var regularExpressionEmail  = /^[a-zA-Z0-9]{4,}@(gmail|yahoo).com$/;
emailUser.addEventListener("keyup" ,emailValidate);
function emailValidate(){

    if(regularExpressionEmail.test(emailUser.value)) {
       
   
       document.getElementById("icEmailCorrect").style.display="block";
       document.getElementById("pInvalidEmail").style.display="none";
   
       document.getElementById("icEmailCorrect").style.color="#17acb8";
      
   }
   else{
       document.getElementById("pInvalidEmail").style.display="block";
       document.getElementById("icEmailCorrect").style.display="none";
   
      
   
   
   }
   }

   

// Name Validate 
var regularExpressionName  = /^[A-Z][a-z]{2,} [A-Z][a-z]{2,}$/;
nameUser.addEventListener("keyup" ,nameValidate);
function nameValidate(){

    if(regularExpressionName.test(nameUser.value)) {
       
   
       document.getElementById("icNameCorrect").style.display="block";
       document.getElementById("pInvalidName").style.display="none";
   
       document.getElementById("icNameCorrect").style.color="#17acb8";
      
   }
   else{
       document.getElementById("pInvalidName").style.display="block";
       document.getElementById("icNameCorrect").style.display="none";
   
      
   
   
   }
   }

// get data from input
var userDataList=[];
if(localStorage.getItem("usersData")!=null){
    userDataList=JSON.parse(localStorage.getItem("usersData"));
}
function signUp(){

    var oneUserData={
        name:nameUser.value,
        email:emailUser.value,
        password:passwordUser.value
    }
    


    for(var i=0; i<userDataList.length; i++){
        if(regularExpressionPass.test(passwordUser.value) &&
         regularExpressionEmail.test(emailUser.value) &&
          regularExpressionName.test(nameUser.value))
          {
            if(  emailUser.value.includes(userDataList[i].email)&& passwordUser.value.includes(userDataList[i].password)){
                window.alert("Email already in use")
                break;
            }
            else{
              

            }


    
            userDataList.push(oneUserData);
            console.log(userDataList)
            localStorage.setItem("usersData",JSON.stringify(userDataList));
            clearInput();
            document.getElementById("pInvalidPassword").style.display="block";
            document.getElementById("icPasCorrect").style.display="none";
            document.getElementById("pInvalidEmail").style.display="block";
            document.getElementById("icEmailCorrect").style.display="none";
            document.getElementById("pInvalidName").style.display="block";
           document.getElementById("icNameCorrect").style.display="none";
        
            }
        
            else{
            //     document.getElementById("pInvalidPassword").style.display="block";
            //     document.getElementById("icPasCorrect").style.display="none";
            //     document.getElementById("pInvalidEmail").style.display="block";
            //     document.getElementById("icEmailCorrect").style.display="none";
            //     document.getElementById("pInvalidName").style.display="block";
            //    document.getElementById("icNameCorrect").style.display="none";
        
        
            }
        
    }
   

   
}
function clearInput(){
    nameUser.value="";
    emailUser.value="";
    passwordUser.value="";
}

var navBtn=document.getElementById("navBtn");
navBtn.addEventListener("click",function(){
    
    
    document.getElementById("home").style.display="none";
    document.getElementById("navBar").style.display="none";
    document.getElementById("loginAndSign").style.display="block";
    document.getElementById("loginInvalid").style.display="none";
    document.getElementById("icEmailCorrect").style.display="none";
    document.getElementById("icPasswordCorrect").style.display="none";
    clearInput()
});

var btnLogin=document.getElementById("btnLogin");
btnLogin.addEventListener("click",function(){

    for(var i=0 ; i<userDataList.length ; i++){
        if(emailUser.value.includes(userDataList[i].email)&& passwordUser.value.includes(userDataList[i].password)){
            document.getElementById("home").style.display="block";
            document.getElementById("loginAndSign").style.display="none";
            document.getElementById("navBar").style.display="block";
            document.getElementById("containerHone").innerHTML=`
            <h1 class="welcom" id="welcom">Welcome ${" "} ${userDataList[i].name} </h1>
            `
            clearInput();
             

        }
        else{
            document.getElementById("loginInvalid").style.display="block";
            document.getElementById("pInvalidName").style.display="none";


        }
    }
// true
    // document.getElementById("home").style.display="block";
    // document.getElementById("loginAndSign").style.display="none";
    // document.getElementById("navBar").style.display="block";

});
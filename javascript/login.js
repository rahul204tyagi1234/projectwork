// let collectlogin = [];

// function loginData(email, password) {
//   (this.email = email), (this.password = password);
// }
// createLoginData = () => {
//     var email=document.getElementById("emailfeild").value;
//     var password =document.getElementById("passwordfeild").value;
//     newLoginData=new loginData(email, password)
//     collectlogin.push(newLoginData);

//     localStorage.setItem("store Data",JSON.stringify(collectlogin));
// };

// function showlogin(url) {
//   const showLoginPage = document.getElementById("login");
//   console.log();
//   fetch(url)
//     .then((res) => res.text())
//     .then((data) => {
//       showLoginPage.innerHTML = data;
//     });
//


function loginDatas(){
    var email =document.getElementById("emailfeilds").value;
    var password=document.getElementById("passwordfeilds").value;
    var loginEmail=document.getElementById("emailfeild").value;
    var loginPassword=document.getElementById("passwordfeild").value;

    if(email===loginEmail && password===loginPassword){
        document.getElementById("")
    }
    else if(email!=loginEmail){
        alert("your email is not matching");
    }
    else if(password!=loginPassword){
        alert("your password is not matching");
    }
    else{
        alert("you can't go at dasboard");
    }


}

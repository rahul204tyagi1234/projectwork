let collectlogin = [];

function loginData(email, password) {
  (this.email = email), (this.password = password);
}
createLoginData = () => {
    var email=document.getElementById("emailfeild").value;
    var password =document.getElementById("passwordfeild").value;
    newLoginData=new loginData(email, password)
    collectlogin.push(newLoginData);

    localStorage.setItem("store Data",JSON.stringify(collectlogin));
};

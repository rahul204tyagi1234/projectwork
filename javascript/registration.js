let idofRegistration = 1; 
let storeRegistrationData = [];

function rangData (name, lastName, email, password,confirmpassword,address,){
    this.id = idofRegistration,
    this.name = name,
    this.lastName = lastName,
    this.email = email,
    this.password = password,
    this.confirmpassword = confirmpassword,
    this.address = address,
    // this.mobileNum = mobileNum,
    // this.adharNum = adharNum,
    this.isLogin=false

}

createRegData = () =>{
    

    var name = document.getElementById('firstName').value;
    var  lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmPassword').value;
    var address = document.getElementById('address').value;
    // var mobileNum = document.getElementById('mobilefeild').value;
    // var adharNum = document.getElementById('AdharFeild').value;

    newRegistrationData = new rangData(name, lastName, email, password,confirmpassword,address);


    storeRegistrationData.push(newRegistrationData);
    // console.log(storeRegistrationData, "Array Data");


    localStorage.setItem("userData",JSON.stringify(storeRegistrationData));
    // console.log(storeRegistrationData, "Array Data");
    window.location.href = "login.html";

    idofRegistration++ ;
    
}
let idofRegistration = 1; 
let storeRegistrationData = [];

function rangData (name, fathername, email, password,confirmpassword,Address, mobileNum,AdharNum, ){
    this.id = idofRegistration,
    this.name = name,
    this.fathername = fathername,
    this.email = email,
    this.password = password,
    this.confirmpassword = confirmpassword,
    this.Address = Address,
    this.mobileNum = mobileNum,
    this.AdharNum = AdharNum

}

createRegData = () =>{
    

    var name = document.getElementById('namefeild').value;
    var  fathername = document.getElementById('fnamefeild').value;
    var email = document.getElementById('emailfeild').value;
    var password = document.getElementById('passwordfeild').value;
    var confirmpassword = document.getElementById('cpfeild').value;
    var Address = document.getElementById('addressfeild').value;
    var mobileNum = document.getElementById('mobilefeild').value;
    var AdharNum = document.getElementById('AdharFeild').value;

    newRegistrationData = new regData(name, fathername, email, password, confirmpassword, Address, mobileNum, AdharNum);


    storeRegistrationData.push(newRegistrationData);


    localStorage.setItem("local Data",JSON.stringify(storeRegistrationData));
    console.log(storeRegistrationData, "Array Data");

    idofRegistration++ ;
    
}
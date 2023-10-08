let idOfRegistration = 1;
let storeRegistrationData = [];

function rangData(name, lastName, email, password, confirmpassword, address) {
  (this.id = idOfRegistration),
    (this.name = name),
    (this.lastName = lastName),
    (this.email = email),
    (this.password = password),
    (this.confirmpassword = confirmpassword),
    (this.address = address),
    (this.isLogin = false);
}

function createRegData(){
  var name = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmPassword").value;
  var address = document.getElementById("address").value;
  if (password !== confirmpassword) {
    alert("your password and confirmpassword is not matching ");
  }
  storeRegistrationData.push(new rangData(name,lastName,email,password,confirmpassword,address
  ));
  // console.log(storeRegistrationData, "Array Data");

  localStorage.setItem("userData", JSON.stringify(storeRegistrationData));
  // console.log(storeRegistrationData, "Array Dat // window.location.href = "/login.html";a");
  showLogin('/login.html');

  idOfRegistration++;
};

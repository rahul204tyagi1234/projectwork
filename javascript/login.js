// window.history.forward();

window.addEventListener("load", function () {
  const allUserDataJSON = localStorage.getItem("userData");

  if (allUserDataJSON) {
    const userData = JSON.parse(allUserDataJSON);

    const logOutData = userData.find(
      (userData) => userData.isLogin === true
    );

    if (logOutData) {
      window.location.href = "/dasboard.html";
    }
  }
});
function userLogin() {
  var userEmail=document.getElementById("userEmail").value;
  var userPassword=document.getElementById("userPassword").value;
  const allUserDataJSON = localStorage.getItem("userData");
  // console.log(allUserDataJSON);
 

  if (allUserDataJSON) {
    const totalUserData = JSON.parse(allUserDataJSON);
    const userIndexNumber = totalUserData.findIndex(
      (userData) =>
        (userData.email === userEmail && userData.password === userPassword));

        if (userIndexNumber !== -1) {
          totalUserData[userIndexNumber].isLogin = true;
          localStorage.setItem("userData", JSON.stringify(totalUserData));
    
          alert("Login successful");
          window.location.href = "dasboard.html";
        } else {
          alert("your data is not matching , Please try again.");
        }
      } 
  }
  

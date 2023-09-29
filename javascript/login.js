window.history.forward();
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
          alert("your email is not matching , Please try again.");
        }
      } 
     
  }
  

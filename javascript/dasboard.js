// window.history.forward();

window.addEventListener("load", function () {
  const allUserDataJSON = localStorage.getItem("userData");

  if (allUserDataJSON) {
    const userData = JSON.parse(allUserDataJSON);

    const logOutData = userData.find(
      (userData) => userData.isLogin === false
    );

    if (logOutData) {
      window.location.href = "/header.html";
    }
  }
});

function logOut() {
  let logOut = document.getElementById("logout");
  const allUserDataJSON = localStorage.getItem("userData");
  logOut.addEventListener("click", function () {
    if (allUserDataJSON) {
      const allUserData = JSON.parse(allUserDataJSON);
      const loggedInUser = allUserData.find(
        (userData) => userData.isLogin === true
      );
      var checkLogout = confirm("Are you sure.");
      if (checkLogout === true) {
        if (loggedInUser) {
          loggedInUser.isLogin = false;
  
          localStorage.setItem("userData", JSON.stringify(allUserData));
        }

        window.location.href = "/header.html";
      }
      
    }
     else {
      alert("false");
    }
  });
}





// var header = document.getElementById("show");
var btns = document.getElementsByClassName("list-group-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

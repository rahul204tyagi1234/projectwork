const loginForm = document.getElementById("loginUser");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  // Fetch all user data from local storage
  const allUserDataJSON = localStorage.getItem("userData");
  if (allUserDataJSON) {
    const allUserDatas = JSON.parse(allUserDataJSON);
    // Find the user with matching credentials
    const userIndexNumber = allUserDatas.findIndex(
      (userData) =>
        (userData.email === userEmail || userData.username === userEmail) &&
        userData.password === userPassword
    );
    if (userIndexNumber !== -1) {
      // Set isLogin to true upon successful login
      allUserDatas[userIndexNumber].isLogin = true;
      localStorage.setItem("userData", JSON.stringify(allUserDatas));
      alert("Login successful!");
      window.location.href = "/dasboard.html";
    } else {
      alert(" Please try again.");
    }
  } else {
    alert("User not registered");
  }
});

// for(){

// }

// if(email===loginEmail && password===loginPassword){
//     window.location.href="/dasboard.html"
// }
// else if(email!=loginEmail){
//     alert("your email is not matching");
// }
// else if(password!=loginPassword){
//     alert("your password is not matching");
// }
// else{
//     alert("you can't go at dasboard");
// }

// const loginForm = document.querySelector("form");
// let isLogin = false; // Initialize isLogin as false

// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const username = document.getElementById("username").value;

//   const password = document.getElementById("password").value;

//   // Fetch all user data from local storage
//   const allUserDataJSON = localStorage.getItem("userData");

//   if (allUserDataJSON) {
//     const allUserData = JSON.parse(allUserDataJSON);
//     console.log('allUserData :',typeof allUserData)
//     // Loop through all user data
//     for (const userData of allUserData) {
//       console.log("userData from localStorage :", userData);
//       if (

//     // Find the user with matching credentials
//     const userIndex = allUserData.findIndex(
//       (userData) =>
//         (userData.email === username || userData.username === username) &&
//         userData.password === password
//       ) {
//         alert("Login successful!");

//         // Set isLogin to true upon successful login
//         userData.isLogin = true;
//         localStorage.setItem("userData", JSON.stringify(userData));
//         window.location.href = "/student-home-page.html";
//         return;
//       } else if (
//         (userData.email !== username && userData.username !== username) ||
//         userData.password !== password
//       ) {
//         alert("Invalid username/email or password. Please try again.");
//       } else {
//         alert("User not registered. Please register first.");
//       }
//     );

//     if (userIndex !== -1) {
//       // Set isLogin to true upon successful login
//       allUserData[userIndex].isLogin = true;
//       localStorage.setItem("userData", JSON.stringify(allUserData));

//       alert("Login successful!");
//       window.location.href = "/student-home-page.html";
//     } else {
//       alert("Invalid username/email or password. Please try again.");
//     }
//   } else {
//     alert("User not registered. Please register first.");
// }
// });

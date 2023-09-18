const nav = document.getElementById("header");

fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  });

setTimeout(() => {
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarNav = document.getElementById("navbarNav");
  navbarToggle.addEventListener("click", function () {
    navbarNav.classList.toggle("show");
  });
}, 50);

setTimeout(() => {
 document.getElementById("loginBtn");
  // console.log('login :',login)
  document.addEventListener("click", function () {
    document.getElementById("loginBtn").classList.add("hideAnchor");
    document.getElementById("registrationBtn").classList.remove("hideAnchor");
    document.getElementById("contact us").classList.remove("hideAnchor");
  });
  
}, 50);
// document.getElementById("registrationBtn").addEventListener("click", function () {
//     document.getElementById("loginForm").classList.add("hidden");
//     document.getElementById("registrationForm").classList.remove("hidden");
//     document.getElementById("contactUsPage").classList.add("hidden");
// });

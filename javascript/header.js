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

function hideLogin() {
  var elm = document.getElementById("login");
  elm.classList.add("hideAnchor");
}

// setTimeout(() => {
//  var elm= document.getElementById("login");
//   console.log('login :',login)
//   elm.addEventListener('click',()=>{
//     elm.classList.add('hideAnchor')
//   })
// }, 500);

// setTimeout(() => {
//   document.getElementById("registrationBtn");
//    // console.log('login :',login)
//    document.addEventListener("click", function () {
//      document.getElementById("registrationBtn").classList.add("hideAnchor");
//     //  document.getElementById("registrationBtn").classList.remove("hideAnchor");
//     //  document.getElementById("contact us").classList.remove("hideAnchor");
//    });

//  }, 50);

function showLogin(url) {
  const showLoginPage = document.getElementById("login-page");
  console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showLoginPage.innerHTML = data;
    });
}


function showregistration(url) {
  const showLoginPage = document.getElementById("registration-page");
  console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showLoginPage.innerHTML = data;
    });
}

function showcontactus(url) {
  const showLoginPage = document.getElementById("contactus-page");
  console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showLoginPage.innerHTML = data;
    });
}
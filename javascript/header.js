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
  const showRegistrationPage = document.getElementById("registration-page");
  console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showRegistrationPage.innerHTML = data;
    });
}

function showcontactus(url) {
  const showcontactusPage = document.getElementById("contactus-page");
  console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showcontactusPage.innerHTML = data;
    });
}
function showHomePage(url) {
  const showHomePage = document.getElementById("home-page");
  // console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showHomePage.innerHTML = data;
    });
}
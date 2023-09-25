const navElement = document.getElementById("header");

fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    navElement.innerHTML = data;
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
  const showLoginPage = document.getElementById("all-pages");
  console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showLoginPage.innerHTML = data;
    });
}


function showregistration(url) {
  const showRegistrationPage = document.getElementById("all-pages");
  console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showRegistrationPage.innerHTML = data;
    });
}

function showcontactus(url) {
  const showcontactusPage = document.getElementById("all-pages");
  console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showcontactusPage.innerHTML = data;
    });
}
function showHomePage(url) {
  const showHomePage = document.getElementById("all-pages");
  // console.log();
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      showHomePage.innerHTML = data;
    });
}
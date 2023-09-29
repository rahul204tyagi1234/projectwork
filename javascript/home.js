const showHomePage = document.getElementById("all-pages");
fetch("home.html")
  .then((res) => res.text())
  .then((data) => {
    console.log(data);
    showHomePage.innerHTML = data;
  });
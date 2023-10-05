const nav = document.getElementById("nav");

fetch("index.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
  })
  .catch((err) => {
    console.log("Error loading nav ", err);
  });

const footer = document.getElementById("footer");

setTimeout(()=>{
    fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    // console.log("vbbbbbbbbbbb===========" ,data)
    footer.innerHTML = data;
  });

},100);

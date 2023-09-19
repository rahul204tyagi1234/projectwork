const footer = document.getElementById("footer");

// setTimeout(()=>{
    fetch("footer.html")
  .then((res) => res.text())
  .then((datas) => {
    console.log("vbbbbbbbbbbb===========" ,datas)
    footer.innerHTML = datas;
  });

// },100);

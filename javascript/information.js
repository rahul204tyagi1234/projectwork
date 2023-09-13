fetch("/json/information.json")
.then((res)=>res.json())
.then((data)=>{
    const div=document.getElementsByClassName("img-fluid rounded-start");
    // console.log("div",div)
    data.forEach((element) => {
        const img = document.createElement("div");
        img.innerHTML = ` <img
        src="${element.img}"
        class="img-fluid rounded-start"
        alt="..."
      />`;
      div.appendChild(img);
      });

});
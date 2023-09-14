fetch("/json/information.json")
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
    const div=document.getElementById("cardImg");
    console.log("div",div)
    data.forEach((element) => {
        const img = document.createElement("div");
        img.innerHTML = `
        <img
        src="${element.image}"
        class="img-fluid rounded-start"
        alt="..."
       
      />
      <div class="col-md-8">
      <h3>${element.title}</h3>
      <p>${element.information}</p>
      `;
      
      div.appendChild(img);
      });

});
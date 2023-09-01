fetch("/json/carusel.json")
.then((res)=>res.json())
.then((data)=>{
    const div=document.querySelector(".carousel-inner")
    console.log("div",div);
    data.forEach((element) =>{
        const div=document.createElement("div");
        div.innerHTML=`<div id="cr-1" class="carousel-item active">${element.img}</div>
        <div id="cr-2" class="carousel-item">${element.img}</div>
        <div id="cr-3" class="carousel-item">${element.img}</div>`;
        // div.appendChild(div);
        console.log(element);
    })
})











// fetch("/json/notification.json")
//   .then((res) => res.json())
//   .then((data) => {
//     const ul = document.querySelector(".list-group");
//     console.log("ul ", ul);
//     data.forEach((element) => {
//       const li = document.createElement("li");
//       li.innerHTML = ` <li class="list-group-item fw-bold text-center">${element.heading}</li>
//            <li class="list-group-item text-center">${element.content}</li>`;

//       ul.appendChild(li);
//     });
//   });
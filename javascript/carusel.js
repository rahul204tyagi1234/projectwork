//
fetch("/json/carusel.json")
.then((res)=>res.json())
.then((data)=>{
    const div=document.querySelector(".carousel-inner")
    // console.log("div",div);
    // console.log('data is :',data)
    data.forEach((element) =>{
        const img=document.createElement("div");
        img.innerHTML=`
        <img
        src="${element.img}"
        class="carousel-inner active"
        alt="..."</br>
      />`
      // console.log(element);
      div.appendChild(img);
    })
})

//











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
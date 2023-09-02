

fetch("/json/notification.json")
  .then((res) => res.json())
  .then((data) => {
    const ul = document.querySelector(".list-group");
    //console.log("ul ", ul);
    data.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = ` <li class="list-group-item fw-bold text-center">${element.heading}</li>
           <li class="list-group-item text-center">${element.content}</li>`;

      ul.appendChild(li);
    });
  });

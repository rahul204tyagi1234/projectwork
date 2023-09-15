fetch("/json/information.json")
  .then((res) => res.json())
  .then((data) => {
    const div = document.getElementById("cardImg");

    data.forEach((element) => {
      const img = document.createElement("div");
      img.classList.add("row", "g-0");
      img.innerHTML = `
         <div class="col-md-4">
        <img
        src="${element.image}"
        class="img-fluid rounded-start"
        alt="..."
      />
      </div>
      <div class="col-md-8">
      <div class="card-body">
      <h3>${element.title}</h3>
      <p>${element.information}</p>
      </div>
      </div>
      `;
      //   const img2 = document.createElement("div");
      //   img2.innerHTML = `

      // <div class="col-md-8">
      // <h3>${element.title}</h3>
      // <p>${element.information}</p></div>
      // <div class="col-md-4">
      //   <img
      //   src="${element.image}"
      //   class="img-fluid rounded-start"
      //   alt="..."

      // /></div>
      // `;

      div.appendChild(img);
      // div.appendChild(img2);
    });
  });

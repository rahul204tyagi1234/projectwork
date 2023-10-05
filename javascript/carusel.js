//

fetch("/json/carusel.json")
  .then((res) => res.json())
  .then((data) => {
    const div = document.querySelector(".carousel-inner");
    // console.log("div",div);
    // console.log('data is :',data)
    data.forEach((element) => {
      const img = document.createElement("div");
      img.innerHTML = `
        <img
        src="${element.img}"
        class="carousel-item active"
        alt="..."
      />`;
      // console.log(element);
      div.appendChild(img);
    });
  });

setTimeout(() => {
  const cr1 = document.querySelector("div");
  const arr = document.querySelectorAll(".carousel-item");
  // console.log("arr is :", arr);
  var counter = 0;

  function showCurrentItem() {
    arr.forEach((item, index) => {
      if (counter === arr.length) {
        counter = 0;
      }
      if (index === counter) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  const nextImage = document.querySelector(".carousel-control-next");
  nextImage.addEventListener("click", nextCarousel);

  const prevImage = document.querySelector(".carousel-control-prev");
  prevImage.addEventListener("click", prevCarousel);
  function nextCarousel() {
  
    counter = (counter + 1) % arr.length;
    showCurrentItem();
  }

  function prevCarousel() {
 
    counter = (counter - 1 + arr.length) % arr.length;
    showCurrentItem();
  }

  showCurrentItem();
  setInterval(nextCarousel, 5000);
}, 50);

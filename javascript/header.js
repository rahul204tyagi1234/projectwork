setTimeout(() => {
  var cr1 = document.getElementById("cr-1");
  var cr2 = document.getElementById("cr-2");
  var cr3 = document.getElementById("cr-3");
  
  var arr = [cr1, cr2, cr3];
  // var arr = document.querySelectorAll(".carousel-item")
  // console.log('ar is :', crr);
  // console.log('ar is :', arr);
  
  var counter = 0;
  
  // function slideshow() {
  
  //     let slides = document.getElementsByClassName('carousel-indicators')
  //     console.log(slides);
  // }
  // slideshow();
  // arr.forEach((data) => {
  //   for (let index = 0; index < data.length; ) 
  //   {}
  // });
  
  function showCurrentItem() {
    arr.forEach((item, index) => {
      if (counter === arr.length) {
        counter = 0;
      }
      if (index === counter) {
        item.classList.add("active");
      } else {
        item.classList.remove("");
      }
    });
  }
  setInterval(nextCrowsel, 5000);
  
  function nextCrowsel() {
    // console.log('crousel next',counter)
    counter = (counter + 1) % arr.length;
    showCurrentItem();
  }
  
  function backCrowsel() {
    counter = (counter - 1) % arr.length;
    showCurrentItem();
  }
  
  
  
}, 50);
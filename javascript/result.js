// const res = document.getElementById("result");

// fetch("result.html")
//   .then((res) => res.text())
//   .then((data) => {
//     res.innerHTML = data;
//   });


  function showresult(url) {
    const showresultPage = document.getElementById("profile");
    // console.log();
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        showresultPage.innerHTML = data;
      });
  }
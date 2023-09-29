function showrpayment(url) {
    const showpaymentPage = document.getElementById("profile");
    // console.log();
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        showpaymentPage.innerHTML = data;
      });
  }
  
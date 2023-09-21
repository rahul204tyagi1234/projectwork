function showProfile(url) {
    const showProfilePage = document.getElementById("profile");
    console.log();
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        showProfilePage.innerHTML = data;
      });
  }
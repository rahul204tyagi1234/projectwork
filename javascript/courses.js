function showCourses(url) {
    const showCoursesPage = document.getElementById("profile");
    // console.log();
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        showCoursesPage.innerHTML = data;
      });
  }
  
function showCourses(url) {
    const showCoursesPage = document.getElementById("courses");
    console.log();
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        showCoursesPage.innerHTML = data;
      });
  }
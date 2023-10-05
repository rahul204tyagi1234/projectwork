function showCourses() {
    const showCoursesPage = document.getElementById("profile");
    // console.log();
    fetch('/courses.html')
      .then((res) => res.text())
      .then((data) => {
        showCoursesPage.innerHTML = data;
      });
  }
  showCourses();
  
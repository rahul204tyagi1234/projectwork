
// window.onload = showCourses(url);
function logOut() {
    let logOut = document.getElementById('logout')
    // console.log(logOut.length,"length")
    logOut.addEventListener('click',function(){
       var checkLogout= confirm("Are you sure.");
       if(checkLogout===true){
        window.location.href="/home.html"
       }else{
        alert('false');
        
       }
        
    })
}

// var header = document.getElementById("show");
var btns = document.getElementsByClassName("list-group-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

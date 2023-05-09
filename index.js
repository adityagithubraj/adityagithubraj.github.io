let i = 0;
let txt = "full stack web developer";
let speed = 100;

typeWriter();

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("user-detail-name").style.color = "white";
    document.getElementById("demo1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
   
    i = 2;
    // clear the text
    document.getElementById("demo1").innerHTML = "";
    // make the recursive call
    document.getElementById("user-detail-name").style.color = "#71e281";
    setTimeout(typeWriter, speed);
  }
}

var myNav = document.getElementById("nav-menu");
var myNav2 = document.getElementById("main");
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 15) {
    myNav.classList.add("nav-colored");
    myNav2.classList.add("nav-colored");
  
  } else {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myNav2.classList.remove("nav-colored");
  }
};

GitHubCalendar(".calendar", "adityagithubraj", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});

document.getElementById("resume-button-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1wwPg7ctrAmqe_kqX6ugC1EdVVn4QFjQx/view?usp=share_link"
  );
};

document.getElementById("resume-button-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1wwPg7ctrAmqe_kqX6ugC1EdVVn4QFjQx/view?usp=share_link"
  );
};

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display = "block";
}

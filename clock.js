let section = document.querySelector("section"),
  icons = document.querySelector(".icons");

//Dark mode
icons.onclick = () => {
  section.classList.toggle("dark");
};

// Time functions

setInterval(() => {
  let date = new Date(),
    hours = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  //AM AND PM CALCULATION

  let ampm;
  ampm = hours < 12 ? "AM" : "PM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? (hours = 12) : hours;
  //Adding zero
  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  document.querySelector(".hour_num").innerText = hours;
  document.querySelector(".min_num").innerText = min;
  document.querySelector(".sec_num").innerText = sec;
  document.querySelector(".am_pm").innerText = ampm;
}, 1000); //time interval 1000ms=1s

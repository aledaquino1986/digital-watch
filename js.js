function clock() {
  let hours = document.querySelector("#hour");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let hourSpan = document.querySelector(".hour-span");
  let minuteSpan = document.querySelector(".minute-span");
  let secondSpan = document.querySelector(".second-span");

  var newHour = new Date().getHours();
  var newMinutes = new Date().getMinutes();
  var newSeconds = new Date().getSeconds();

  hours.innerHTML = newHour;
  minutes.innerHTML = newMinutes;
  seconds.innerHTML = newSeconds;

  newHour < 2 ? (hourSpan.innerHTML = "hour") : (hourSpan.innerHTML = "hours");

  newMinutes < 2
    ? (minuteSpan.innerHTML = "minute")
    : (minuteSpan.innerHTML = "minutes");

  newSeconds < 2
    ? (secondSpan.innerHTML = "second")
    : (secondSpan.innerHTML = "seconds");
}

let interval = setInterval(clock, 1000);

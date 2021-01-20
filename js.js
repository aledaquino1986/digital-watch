function clock () {

  let hours = document.querySelector("#hour");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");

  var newHour = new Date().getHours();
  var newMinutes = new Date().getMinutes();
  var newSeconds = new Date().getSeconds();

  hours.innerHTML = newHour;
  minutes.innerHTML = newMinutes;
  seconds.innerHTML = newSeconds;
}

let interval = setInterval(clock, 1000)
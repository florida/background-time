const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const displayTime = () => {
  const currentTime = new Date(Date.now());

  const displayHours = currentTime.getHours() % 12;
  const displayMinutes = currentTime.getMinutes();
  const displaySeconds = currentTime.getSeconds();

  changeBackground(displaySeconds);

  hours.innerHTML = formatDisplay(displayHours);
  minutes.innerHTML = formatDisplay(displayMinutes);
  seconds.innerHTML = formatDisplay(displaySeconds);
  console.log(displaySeconds);
};

const changeBackground = (seconds) => {
  const color = `hsl(${seconds * 6}, 50%, 70%)`;

  document.body.style.backgroundColor = color;
};

const formatDisplay = (num) => {
  return num < 10 ? `0${num}` : num;
};
displayTime();
setInterval(displayTime, 1000);

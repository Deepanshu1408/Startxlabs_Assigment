const convertSec = (sec) => {
  seconds = Math.floor(sec % 60);
  minutes = Math.floor(sec / 60);
  hours = Math.floor((minutes % 60) / 60);
  return (
    hours +
    "Hours" +
    ":" +
    minutes +
    "Minutes" +
    ":" +
    seconds +
    "Seconds"
  ).toString();
};

console.log(convertSec(137));

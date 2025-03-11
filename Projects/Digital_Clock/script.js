function updateClock() {
  const digitalTime = document.getElementById("time");
  const digitalDate = document.getElementById("date");
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const am_pm = hour >= 12 ? "PM" : "AM";
  digitalTime.textContent = `${hour}:${minutes}:${seconds} ${am_pm}`;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  digitalDate.textContent = date.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();

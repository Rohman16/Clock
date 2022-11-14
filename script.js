function rtate() {
  const time = new Date();
  const numSecond = time.getSeconds();
  let numSecondUse = "";
  if (numSecond < 10) {
    numSecondUse = "0" + numSecond;
  } else {
    numSecondUse = numSecond;
  }
  const numMinute = time.getMinutes();
  let numMinuteUse = "";
  if (numMinute < 10) {
    numMinuteUse = "0" + numMinute;
  } else {
    numMinuteUse = numMinute;
  }
  const numHour = time.getHours();
  const secondDeg = (numSecond / 60) * 360 + 180;
  const minuteDeg = (numMinute / 60) * 360 + 180;
  const hourDeg = ((numHour + numMinute / 60) / 12) * 360 + 180;

  const digital = document.getElementById("digital");
  const second = document.querySelector(".second");
  const minute = document.querySelector(".min");
  const hour = document.querySelector(".hour");
  second.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  minute.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  hour.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  digital.innerHTML = `${numHour}:${numMinute}:${numSecondUse}`;
}

setInterval(rtate, 1000);

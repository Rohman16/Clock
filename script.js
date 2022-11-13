const btn = document.getElementById("rotate");
const btnLeft = document.getElementById("rotate-left");
const myHour = document.querySelector(".min hand");
let k = 0;
let m = 0;

btn.addEventListener("click", () => {
  m += 5;
  const test = document.getElementById("tester");
  const obj = document.querySelector(".min");
  obj.style.transform = `translateX(-50%) rotate(${m}deg)`;
  test.innerHTML = k;
  k += 3;
});

btnLeft.addEventListener("click", () => {
  m -= 5;
  const test = document.getElementById("tester");
  const obj = document.querySelector(".hand");
  obj.style.transform = `translateX(-50%) rotate(${m}deg)`;
  test.innerHTML = k;
  k -= 3;
});

function rtate() {
  const time = new Date();
  const numSecond = time.getSeconds();
  const numMinute = time.getMinutes();
  const numHour = time.getHours();
  const secondDeg = (numSecond / 60) * 360 + 180;
  const minuteDeg = (numMinute / 60) * 360 + 180;
  const hourDeg = (numHour / 12) * 360 + 180;
  // m += 180;
  const test = document.getElementById("tester");
  const second = document.querySelector(".second");
  const minute = document.querySelector(".min");
  const hour = document.querySelector(".hour");
  second.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  minute.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  hour.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  test.innerHTML = `${numSecond}:${numMinute}`;
  k += 3;
}

setInterval(rtate, 1000);

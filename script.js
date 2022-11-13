const btn = document.getElementById("rotate");
const btnLeft = document.getElementById("rotate-left");
let k = 0;
let m = 0;

btn.addEventListener("click", () => {
  m += 5;
  const test = document.getElementById("tester");
  const obj = document.querySelector(".hand");
  obj.style.transform = `translateY(-50%) rotate(${m}deg)`;
  test.innerHTML = k;
  k += 3;
});

btnLeft.addEventListener("click", () => {
  m -= 5;
  const test = document.getElementById("tester");
  const obj = document.querySelector(".hand");
  obj.style.transform = `translateY(-50%) rotate(${m}deg)`;
  test.innerHTML = k;
  k -= 3;
});

function rtate() {
  m += 5;
  const test = document.getElementById("tester");
  const obj = document.querySelector(".hand");
  obj.style.transform = `translateY(-50%) rotate(${m}deg)`;
  test.innerHTML = k;
  k += 3;
}

setInterval(rtate, 1000);

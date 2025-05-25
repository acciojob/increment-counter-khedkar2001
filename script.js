const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
  const currentValue = parseInt(counterElement.textContent);
  alert("Current (before increment): " + currentValue);
  counterElement.textContent = currentValue + 1;
});

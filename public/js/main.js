async function start() {
  const weatherPromise = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=apparent_temperature"
  );
  const weatherData = await weatherPromise.json();
  const ourTemperature = weatherData.hourly.apparent_temperature[12];
  document.querySelector("#temperature-output").textContent = ourTemperature;
}

start();

// pet filter button code
const allButtons = document.querySelectorAll(".pet-filter button");

allButtons.forEach((el) => {
  el.addEventListener("click", handleButtonClick);
});

function handleButtonClick(e) {
  // remove active class from any and all buttons
  allButtons.forEach((el) => el.classList.remove("active"));

  // add active class to the specific button that just got clicked
  e.target.classList.add("active");

  // actually filter the pets down below
  const currentFilter = e.target.dataset.filter;
  document.querySelectorAll(".pet-card").forEach((el) => {
    if (currentFilter == el.dataset.species || currentFilter == "all") {
      el.style.display = "grid";
    } else {
      el.style.display = "none";
    }
  });
}

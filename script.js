const metricRadioBtn = document.querySelector(
  "#metric-calac-system-radio-field"
);
const imperialRadioBtn = document.querySelector(
  "#imperial-calac-system-radio-field"
);
const metricSystemForm = document.querySelector("#metric-system-form");
const imperialSystemForm = document.querySelector("#imperial-system-form");

metricRadioBtn.addEventListener("click", () => {
  metricSystemForm.classList.remove("hidden");
  imperialSystemForm.classList.add("hidden");
});
imperialRadioBtn.addEventListener("click", () => {
  imperialSystemForm.classList.remove("hidden");
  metricSystemForm.classList.add("hidden");
});

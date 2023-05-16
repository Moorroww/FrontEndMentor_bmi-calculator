//                            All variables
const metricRadioBtn = document.querySelector(
  "#metric-calac-system-radio-field"
);
const imperialRadioBtn = document.querySelector(
  "#imperial-calac-system-radio-field"
);
const metricSystemForm = document.querySelector("#metric-system-form");
const imperialSystemForm = document.querySelector("#imperial-system-form");
const metricInputFields = document.querySelectorAll(
  ".metric-system-data-inputs"
);
const imperialInputFields = document.querySelectorAll(
  ".imperial-system-data-inputs"
);

//                            Switching between metric and imperial mode
metricRadioBtn.addEventListener("click", () => {
  metricSystemForm.classList.remove("hidden");
  imperialSystemForm.classList.add("hidden");
});
imperialRadioBtn.addEventListener("click", () => {
  imperialSystemForm.classList.remove("hidden");
  metricSystemForm.classList.add("hidden");
});

//                            BMI calculator for metric system
function metricBmiCalc() {
  const height = document.querySelector("#height-cm").value;
  const weight = document.querySelector("#weight-kg").value;

  return ((weight / Math.pow(height, 2)) * 10000).toFixed(2);
}
//                            Checking if that works..
metricInputFields.forEach((field) => {
  field.addEventListener("input", () => {
    if (metricInputFields[0].value != "" && metricInputFields[1].value != "")
      console.log(metricBmiCalc());
  });
});

//                            BMI calculator for imperial system
// function imperialBmiCalc() {
//   const heightFt =
//     parseInt(document.querySelector("#height-ft").value) == "NaN"
//       ? 0
//       : parseInt(document.querySelector("#height-ft").value) * 12;
//   const heightIn =
//     parseInt(document.querySelector("#height-in").value) == "NaN"
//       ? 0
//       : parseInt(document.querySelector("#height-in").value) + heightFt;
//   const weightSt =
//     parseInt(document.querySelector("#weight-st").value) == "NaN"
//       ? 0
//       : parseInt(document.querySelector("#weight-st").value) * 14;
//   const weightLbs =
//     parseInt(document.querySelector("#weight-lbs").value) == "NaN"
//       ? 0
//       : parseInt(document.querySelector("#weight-lbs").value) + weightSt;

//   return ((weightLbs / Math.pow(heightIn, 2)) * 703).toFixed(2);
// }

//                            Checking if that works, some problems with imperial system bcs of 4 input winows :/

// imperialInputFields.forEach((field) => {
//   field.addEventListener("input", () => {
//     if (imperialBmiCalc() != "NaN") {
//       console.log(imperialBmiCalc());
//     }
//   });
// });

//                            Suggestion for each BMI group that will appear next to user BMI score
function BmiScoreSuggestions(bmi) {
  if (bmi < 18.5) {
    return "Your BMI suggests you are underweight. Your ideal weight is between 63.3kgs - 85.2kgs.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI suggests you are a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Your BMI suggests you are overweight. Your ideal weight is between 63.3kgs - 85.2kgs.";
  } else if (bmi >= 30) {
    return "Your BMI suggests you are obese. Your ideal weight is between 63.3kgs - 85.2kgs.";
  } else {
    return 0;
  }
}

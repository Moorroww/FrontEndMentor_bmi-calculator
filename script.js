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

metricInputFields.forEach((field) => {
  field.addEventListener("input", () => {
    if (metricInputFields[0].value != "" && metricInputFields[1].value != "")
      console.log(metricBmiCalc());
  });
});

//                            BMI calculator for imperial system
function imperialBmiCalc() {
  const heightFt = isNaN(parseInt(document.querySelector("#height-ft").value))
    ? 0
    : parseInt(document.querySelector("#height-ft").value);
  const heightIn = isNaN(parseInt(document.querySelector("#height-in").value))
    ? 0
    : parseInt(document.querySelector("#height-in").value);
  const weightSt = isNaN(parseInt(document.querySelector("#weight-st").value))
    ? 0
    : parseInt(document.querySelector("#weight-st").value);
  const weightLbs = isNaN(parseInt(document.querySelector("#weight-lbs").value))
    ? 0
    : parseInt(document.querySelector("#weight-lbs").value);

  const heightCm = heightFt * 30.48 + heightIn * 2.54;
  const weightKg = weightSt * 6.35029 + weightLbs * 0.453592;

  if (heightCm !== 0) {
    return (weightKg / Math.pow(heightCm / 100, 2)).toFixed(2);
  } else {
    return "Invalid height. Please provide a non-zero value.";
  }
}

const imperialInputFieldsArray = Array.from(imperialInputFields);
imperialInputFieldsArray.forEach((field) => {
  field.addEventListener("input", () => {
    const fieldValues = imperialInputFieldsArray.map((field) => field.value);
    if (
      (fieldValues[0] !== "" || fieldValues[1] !== "") &&
      (fieldValues[2] !== "" || fieldValues[3] !== "")
    ) {
      console.log(imperialBmiCalc());
    }
  });
});

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

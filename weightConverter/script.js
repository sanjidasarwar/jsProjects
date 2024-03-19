const initailWeight = document.querySelector("#initailWeight");
const initailWeightInput = document.querySelector("#initailWeightValue");
const convertedWeight = document.querySelector("#convertedWeight");
let convertedWeightInput = document.querySelector("#convertedWeightValue");
const weightOptions = document.querySelectorAll(".weightOptions");

initailWeightInput.value = '1';

weightOptions.forEach((select) => {
  select.addEventListener("change", function () {
    const allOptions = this.options;

    for (let i = 0; i < allOptions.length; i++) {
      if (allOptions[i].hasAttribute("selected")) {
        allOptions[i].removeAttribute("selected");
      }
    }

    allOptions[this.selectedIndex].setAttribute("selected", "selected");
  });
});

function calculateWeight(inputField) {
  let input;
  let result;
  console.log(inputField.id);
  if (inputField.id == "initailWeightValue") {
    input = initailWeightInput.value;
  } else if (inputField.id == "convertedWeightValue") {
    input = convertedWeightInput.value;
  }

  if (initailWeight.value == "kg" && convertedWeight.value == "pound") {
    result = inputField.id == "initailWeightValue" ? input * 2.20462 : input / 2.20462;
  } else if (initailWeight.value == "pound" && convertedWeight.value == "kg") {
    result = inputField.id == "initailWeightValue" ? input / 2.20462 : input * 2.20462;
  }

  const outputField = inputField.id == "initailWeightValue" ? convertedWeightInput : initailWeightInput
  
  outputField.value = result.toFixed(4);
  outputField.removeAttribute('readonly');
}

initailWeightInput.addEventListener("input", function () {
  calculateWeight(initailWeightInput);
});
convertedWeightInput.addEventListener("input", function () {
  calculateWeight(convertedWeightInput);
});

calculateWeight(initailWeightInput);

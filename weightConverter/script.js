const initailWeight = document.querySelector("#initailWeight");
const initailWeightInput = document.querySelector("#initailWeightValue");
const convertedWeight = document.querySelector("#convertedWeight");
const convertedWeightInput = document.querySelector("#convertedWeightValue");
const weightOptions = document.querySelectorAll(".weightOptions");

// let initailWeightValue = "";
// let convertedWeightValue = "";

initailWeightInput.value = '1';

// Conversion rates between units
const conversionRates = {
    kg: {
      pound: 2.20462,
      gm: 1000,
      mg: 1000000
    },
    pound: {
      kg: 0.453592,
      gm: 453.592,
      mg: 453592
    },
    gm: {
      kg: 0.001,
      pound: 0.00220462,
      mg: 1000
    },
    mg: {
      kg: 0.000001,
      pound: 0.00000220462,
      gm: 0.001
    }
  };

weightOptions.forEach((select) => {
  select.addEventListener("change", function () {
    const allOptions = this.options;
    // if (this.id == "initailWeight") {
    //   initailWeightValue = allOptions[this.selectedIndex].value;
    // }
    // if (this.id == "convertedWeight") {
    //   convertedWeightValue = allOptions[this.selectedIndex].value;
    // }

    for (let i = 0; i < allOptions.length; i++) {
      if (allOptions[i].hasAttribute("selected")) {
        allOptions[i].removeAttribute("selected");
      }
    }
    const targetField = this.id === "initailWeight" ? initailWeightInput : convertedWeightInput;
    calculateWeight(targetField);

  });
});

function calculateWeight(inputField) {

  let input, fromUnit, toUnit;
  if (inputField === initailWeightInput) {
    input = initailWeightInput.value;
    fromUnit = initailWeight.value;
    toUnit = convertedWeight.value;
  } else if (inputField === convertedWeightInput) {
    input = convertedWeightInput.value;
    fromUnit = convertedWeight.value;
    toUnit = initailWeight.value;
  }
 
  let result=convertWeight(input, fromUnit, toUnit);

    if (inputField === initailWeightInput) {
    convertedWeightInput.value = result.toFixed(4);
  } else if (inputField === convertedWeightInput) {
    initailWeightInput.value = result.toFixed(4);
  }

  initailWeightInput.removeAttribute('readonly');
  convertedWeightInput.removeAttribute('readonly');
}

function convertWeight(weight, fromUnit, toUnit) {
    const rate = conversionRates[fromUnit][toUnit];
    return weight * rate
}

initailWeightInput.addEventListener("input", function () {
    calculateWeight(initailWeightInput);
  });
  convertedWeightInput.addEventListener("input", function () {
    calculateWeight(convertedWeightInput);
  });
  
  calculateWeight(initailWeightInput);

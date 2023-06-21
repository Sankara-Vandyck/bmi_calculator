const createElement = (tag, classNames = [], attributes = {}) => {
    const element = document.createElement(tag);
    element.classList.add(...classNames);
    Object.entries(attributes).forEach(([key, value]) => {
      element[key] = value;
    });
    
    return element;
  };

  const section = document.createElement('section');
  section.classList.add('header');
  
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header-container');
  section.appendChild(headerContainer);
  
  const headerElement = document.createElement('div');
  headerElement.classList.add('header-element');
  headerContainer.appendChild(headerElement);
  
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = './assets/images/logo.svg';
  logo.alt = 'logo';
  headerElement.appendChild(logo);
  
  const headerElementContainer = document.createElement('div');
  headerElementContainer.classList.add('header-element-container');
  headerElement.appendChild(headerElementContainer);
  
  const h1 = document.createElement('h1');
  h1.textContent = 'Body Mass Index Calculator';
  headerElementContainer.appendChild(h1);
  
  const p = document.createElement('p');
  p.textContent = 'Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.';
  headerElementContainer.appendChild(p);
  
  const headerSubheaderContainer = document.createElement('div');
  headerSubheaderContainer.classList.add('header-subheader-container');
  headerContainer.appendChild(headerSubheaderContainer);
  
  const headerSubContainer = document.createElement('div');
  headerSubContainer.classList.add('header-sub-container');
  headerSubheaderContainer.appendChild(headerSubContainer);
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Enter your details below';
  headerSubContainer.appendChild(h2);
  
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main-container');
  headerSubContainer.appendChild(mainDiv);
  
  const selectContainer = document.createElement('div');
  selectContainer.classList.add('radio-container');
  mainDiv.appendChild(selectContainer);
  
  const metricContainer = document.createElement('div');
  metricContainer.classList.add('metric-container');
  selectContainer.appendChild(metricContainer);
  
  const metricRadioInput = document.createElement('input');
  metricRadioInput.classList.add('metric-radio-input');
  metricRadioInput.type = 'radio';
  metricRadioInput.name = 'unit';
  metricRadioInput.value = 'metric';
  metricContainer.appendChild(metricRadioInput);

 
  
  const metricRadioLabel = document.createElement('label');
  metricRadioLabel.classList.add('metric-radio-label');
  metricRadioLabel.textContent = 'Metric';
  metricContainer.appendChild(metricRadioLabel);
  
  const imperialContainer = document.createElement('div');
  imperialContainer.classList.add('imperial-container');
  selectContainer.appendChild(imperialContainer);
  
  const radioInput = document.createElement('input');
  radioInput.classList.add('radio-input');
  radioInput.type = 'radio';
  radioInput.name = 'unit';
  radioInput.value = 'imperial';
  imperialContainer.appendChild(radioInput);
  
  const radioLabel = document.createElement('label');
  radioLabel.classList.add('radio-label');
  radioLabel.textContent = 'Imperial';
  imperialContainer.appendChild(radioLabel);
  
  const selectedContainers = document.querySelector('.radio-container');
  
let selectedUnit = "metric";
let metricCart = null;
let imperialCart = null;
let selectedContainer = null;

// Function to handle unit selection change
function handleUnitChange(event) {
  selectedUnit = event.target.value;

  // Perform any necessary actions based on the selected unit
  if (selectedUnit === "metric") {
    // Show metric cart and hide imperial cart
    if (!metricCart) {
      metricCart = createMetricCart();
    }
    metricCart.style.display = "block";
    
    if (imperialCart) {
      imperialCart.style.display = "none";
      const headerSub = document.querySelector('.header-subheader-container');
      headerSub.style.height = '484px';
    }

    // Append metric cart to the selected container
    if (selectedContainer) {
      selectedContainer.appendChild(metricCart);
    }
  
  } else if (selectedUnit === "imperial") {
    // Show imperial cart and hide metric cart
   
    if (!imperialCart) {
      imperialCart = createImperialCart();
    }
    imperialCart.style.display = "block";

    if (metricCart) {
      metricCart.style.display = "none";
    }

    // Append imperial cart to the selected container
    if (selectedContainer) {
      selectedContainer.appendChild(imperialCart);
    }
    const headerSub = document.querySelector('.header-subheader-container');
    headerSub.style.height = '606px';
  }
}

// Function to set the selected container based on the selected unit
function setSelectedContainer() {
  selectedContainer = selectContainer.querySelector(`.${selectedUnit}-container`);
}

function createMetricCart() {
  const cart = document.createElement("div");
  cart.classList.add("metric-cart");

  const metricElementCart = document.createElement("div");
  metricElementCart.classList.add("metric-element-cart");
  cart.appendChild(metricElementCart);

  const heightWeightElement = document.createElement("div");
  heightWeightElement.classList.add("metric-height-weight");
  metricElementCart.appendChild(heightWeightElement);

  const heightLabel = document.createElement("div");
  heightLabel.classList.add("height-label-element");
  heightWeightElement.appendChild(heightLabel);

  const heightHeading = document.createElement("h2");
  heightHeading.classList.add("height-label");
  heightHeading.textContent = "Height";
  heightLabel.appendChild(heightHeading);

  const heightInput = document.createElement("input");
  heightInput.classList.add("metric-height-input");
  heightInput.type = "number";
  heightInput.placeholder = "0";
  heightInput.min = "1";
  heightInput.value = "";
  heightLabel.appendChild(heightInput);

  const cmLabel = document.createElement("span");
  cmLabel.textContent = "cm";
  cmLabel.classList.add("kg-label");
  heightLabel.appendChild(cmLabel);
  heightInput.addEventListener("keyup", calculateMetricResult);

  heightInput.addEventListener('input', function(event) {
    if (heightInput.value < 0) {
      heightInput.value = '';
    }
  });


  const weightLabel = document.createElement("div");
  weightLabel.classList.add("weight-label-element");
  heightWeightElement.appendChild(weightLabel);

  const weightHeading = document.createElement("h2");
  weightHeading.classList.add("height-label");
  weightHeading.textContent = "Weight";
  weightLabel.appendChild(weightHeading);

  const weightInput = document.createElement("input");
  weightInput.classList.add("metric-height-input");
  weightInput.type = "number";
  weightInput.placeholder = "0";
  weightInput.min = "1";
  weightInput.value = "";
  weightLabel.appendChild(weightInput);

  const kgLabel = document.createElement("span");
  kgLabel.textContent = "kg";
  kgLabel.classList.add("kg-label");
  weightLabel.appendChild(kgLabel);

  weightInput.addEventListener("keyup", calculateMetricResult);

  weightInput.addEventListener('input', function(event) {
    if (weightInput.value < 0) {
      weightInput.value = '';
    }
  });

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result-div");
  metricElementCart.appendChild(resultDiv);

  const resultElement = document.createElement("div");
  resultElement.classList.add("result-content");
  resultElement.textContent = " ";
  resultDiv.appendChild(resultElement);

  const resultCalculator = document.createElement("div");
  resultCalculator.classList.add("result-calculator");
  resultCalculator.textContent = " ";
  resultDiv.appendChild(resultCalculator);

  const resultMessageContent = document.createElement("div");
  resultMessageContent.classList.add("result-message-welcome");
  resultDiv.appendChild(resultMessageContent);

  const resultWelcomeContent = document.createElement("div");
  resultWelcomeContent.classList.add("result-welcome-content");
  resultWelcomeContent.textContent = "Welcome!";
  resultMessageContent.appendChild(resultWelcomeContent);

  const resultMessage = document.createElement("div");
  resultMessage.classList.add("result-message");
  resultMessage.textContent = "Enter your height and weight and you’ll see your BMI result here";
  resultMessageContent.appendChild(resultMessage);

  function calculateMetricResult() {
    const height = parseInt(heightInput.value) || 0;
    const weight = parseInt(weightInput.value) || 0;
    const result = calculateMetric(height, weight);

    if (height || weight) {
      resultMessageContent.style.display = "none";
      resultElement.textContent = `Your BMI is... ${result}`;
      resultCalculator.style.display = "block";

      const bmiCategory = getBMICategory(result);
      const weightRange = getWeightRange(height);
      resultCalculator.textContent = `Your BMI suggests you're ${bmiCategory}.. Your ideal weight range is ${weightRange}.`;
    }
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'healthy weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'overweight';
    } else {
      return 'obese';
    }
  }
  
  function getWeightRange(height) {
    const lowerWeight = calculateMetric(height, 18.5);
    const upperWeight = calculateMetric(height, 24.9);
    return `${lowerWeight}kgs - ${upperWeight}kgs`;
  }

  function calculateMetric(height, weight) {
    const bmi = weight / ((height / 100) ** 2);
    return bmi.toFixed(1); // Return BMI rounded to 1 decimal place
  }

  return cart;
}

// Function to create the cart for imperial calculations
function createImperialCart() {
  const cart = document.createElement("div");
  cart.classList.add("imperial-cart");

  const imperialElementCart = document.createElement("div");
  imperialElementCart.classList.add("imperial-element-cart");
  cart.appendChild(imperialElementCart);

  const imperialContent = document.createElement("div");
  imperialContent.classList.add("imperial-content");
  imperialElementCart.appendChild(imperialContent);

  // Height Label
  const heightLabel = document.createElement("div");
  heightLabel.classList.add("height-label-text");
  imperialContent.appendChild(heightLabel);

  const heightLabelHeading = document.createElement("h2");
  heightLabelHeading.classList.add("imperial-label");
  heightLabelHeading.textContent = "Height";
  heightLabel.appendChild(heightLabelHeading);

  // Accept Input
  const acceptInput = document.createElement("div");
  acceptInput.classList.add("accept-input");
  imperialContent.appendChild(acceptInput);

  const heightInputContainer = document.createElement("div");
  heightInputContainer.classList.add("input-container");
  acceptInput.appendChild(heightInputContainer);

  const feetInput = document.createElement("input");
  feetInput.classList.add("imperial-height-input");
  feetInput.type = "number";
  feetInput.placeholder = "0";
  feetInput.min = "1";
  feetInput.addEventListener("keyup", calculateImperialResult);
  heightInputContainer.appendChild(feetInput);
  feetInput.addEventListener('input', function(event) {
    if (feetInput.value < 0) {
      feetInput.value = '';
    }
  });

  const feetLabel = document.createElement("label");
  feetLabel.classList.add("input-label");
  feetLabel.textContent = "ft";
  heightInputContainer.appendChild(feetLabel);

  const inchesInputContainer = document.createElement("div");
  inchesInputContainer.classList.add("input-container");
  acceptInput.appendChild(inchesInputContainer);

  const inchesInput = document.createElement("input");
  inchesInput.classList.add("imperial-height-input");
  inchesInput.type = "number";
  inchesInput.placeholder = "0";
  inchesInput.min = "1";
  inchesInput.addEventListener("keyup", calculateImperialResult);
  inchesInputContainer.appendChild(inchesInput);
  inchesInput.addEventListener('input', function(event) {
    if (inchesInput.value < 0) {
      inchesInput.value = '';
    }
  });

  const inchesLabel = document.createElement("label");
  inchesLabel.classList.add("input-label");
  inchesLabel.textContent = "in";
  inchesInputContainer.appendChild(inchesLabel);

  // Weight Label
  const weightLabel = document.createElement("div");
  weightLabel.classList.add("weight-label-text");
  imperialContent.appendChild(weightLabel);

  const weightLabelHeading = document.createElement("h2");
  weightLabelHeading.classList.add("imperial-label");
  weightLabelHeading.textContent = "Weight";
  weightLabel.appendChild(weightLabelHeading);

  // Accept Weight
  const acceptWeight = document.createElement("div");
  acceptWeight.classList.add("accept-weight");
  imperialContent.appendChild(acceptWeight);

  const stonesInputContainer = document.createElement("div");
  stonesInputContainer.classList.add("input-container");
  acceptWeight.appendChild(stonesInputContainer);

  const stonesInput = document.createElement("input");
  stonesInput.classList.add("imperial-height-input");
  stonesInput.type = "number";
  stonesInput.placeholder = "0";
  stonesInput.min = "1";
  stonesInput.addEventListener("keyup", calculateImperialResult);
  stonesInputContainer.appendChild(stonesInput);
  stonesInput.addEventListener('input', function(event) {
    if (stonesInput.value < 0) {
      stonesInput.value = '';
    }
  });

  const stonesLabel = document.createElement("label");
  stonesLabel.classList.add("input-label");
  stonesLabel.textContent = "st";
  stonesInputContainer.appendChild(stonesLabel);

  const poundsInputContainer = document.createElement("div");
  poundsInputContainer.classList.add("input-container");
  acceptWeight.appendChild(poundsInputContainer);

  const poundsInput = document.createElement("input");
  poundsInput.classList.add("imperial-height-input");
  poundsInput.type = "number";
  poundsInput.placeholder = "0";
  poundsInput.min = "1";
  poundsInput.addEventListener("keyup", calculateImperialResult);
  poundsInputContainer.appendChild(poundsInput);
  stonesInput.addEventListener('input', function(event) {
    if (stonesInput.value < 0) {
      stonesInput.value = '';
    }
  });

  const poundsLabel = document.createElement("label");
  poundsLabel.classList.add("input-label");
  poundsLabel.textContent = "lbs";
  poundsInputContainer.appendChild(poundsLabel);

  // Result Div
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("imperial-result-div");
  imperialElementCart.appendChild(resultDiv);

  const resultElement = document.createElement("div");
  resultElement.classList.add("result-content");
  resultElement.textContent = " ";
  resultDiv.appendChild(resultElement);

  const resultCalculator = document.createElement("div");
  resultCalculator.classList.add("result-suggest");
  resultCalculator.textContent = " "
  resultDiv.appendChild(resultCalculator);

  const resultMessageContent = document.createElement("div");
  resultMessageContent.classList.add("result-message-welcome");
  resultDiv.appendChild(resultMessageContent);

  const resultWelcomeContent = document.createElement("div");
  resultWelcomeContent.classList.add("result-welcome-content");
  resultWelcomeContent.textContent = "Welcome!";
  resultMessageContent.appendChild(resultWelcomeContent);

  const resultMessage = document.createElement("div");
  resultMessage.classList.add("result-message");
  resultMessage.textContent = "Enter your height and weight and you’ll see your BMI result here";
  resultMessageContent.appendChild(resultMessage);

  function calculateImperialResult() {
    const feet = parseFloat(feetInput.value) || 0;
    const inches = parseFloat(inchesInput.value) || 0;
    const heightInches = feet * 12 + inches;

    const stones = parseFloat(stonesInput.value) || 0;
    const pounds = parseFloat(poundsInput.value) || 0;
    const weightPounds = stones * 14 + pounds;

    const heightInchesSquared = heightInches * heightInches;
    const bmi = (weightPounds / heightInchesSquared) * 703;

    if(heightInches || weightPounds){
      resultMessageContent.style.display = "none";
      resultElement.textContent = `Your BMI is... ${bmi.toFixed(1)}`;
      resultCalculator.textContent = `Your BMI suggests you're a ${getWeightCategory(bmi
      )}. Your ideal weight is between ${getIdealWeightRange(heightInches)}`;

    }
  }

  function getWeightCategory(bmi) {
    if (bmi < 18.5) {
      return "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "healthy weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "overweight";
    } else {
      return "obese";
    }
  }

  function getIdealWeightRange(heightInches) {
    const lowerRangeKg = 18.5 * (heightInches * heightInches) / 703;
    const upperRangeKg = 25 * (heightInches * heightInches) / 703;
    const lowerRangeLbs = lowerRangeKg * 2.20462; // Convert kg to lbs
    const upperRangeLbs = upperRangeKg * 2.20462; // Convert kg to lbs
  
    const lowerRangeSt = Math.floor(lowerRangeLbs / 14); // Calculate the number of stones
    const lowerRangeRemainingLbs = (lowerRangeLbs % 14).toFixed(1); // Calculate the remaining pounds
  
    const upperRangeSt = Math.floor(upperRangeLbs / 14); // Calculate the number of stones
    const upperRangeRemainingLbs = (upperRangeLbs % 14).toFixed(1); // Calculate the remaining pounds
  
    return `${lowerRangeSt}st ${lowerRangeRemainingLbs}lbs - ${upperRangeSt}st ${upperRangeRemainingLbs}lbs.`;
  }
  
  return cart;
}

// Add event listeners to the radio inputs
const metricInput = selectContainer.querySelector("input[name='unit'][value='metric']");
const imperialInput = selectContainer.querySelector("input[name='unit'][value='imperial']");

metricInput.addEventListener("change", handleUnitChange);
imperialInput.addEventListener("change", handleUnitChange);

// Set metric radio as selected by default
metricInput.checked = true;

// Set the selected container initially
setSelectedContainer();

// Set metric cart as default selection
handleUnitChange({ target: metricInput });

headerSubContainer.appendChild(selectContainer);
document.body.appendChild(section);

  const section2 = createElement('section', ['middle-container']);
  const middleContainerElement = section2.appendChild(createElement('div', ['middle-container-element']));
  middleContainerElement.appendChild(createElement('img', ['manIcon'], { src: "./assets/images/image-man-eating.webp", alt: "man" }));
  
  const middleContainerCurve = middleContainerElement.appendChild(createElement('div', ['middle-container-curve']));
  middleContainerCurve.appendChild(createElement('img', ['curve'], { src: "./assets/images/pattern-curved-line-left.svg", alt: "left" }));
  middleContainerCurve.appendChild(createElement("div", ['bmi-result'], { textContent: "What your BMI result means" }));
  middleContainerCurve.appendChild(createElement("div", ["healthy-range"], { textContent: "A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week." }));
  
  section2.appendChild(middleContainerElement);
  document.body.appendChild(section2);
  
  const section3 = createElement('section', ['fourth-container']);

  const fourthContainerElement = section3.appendChild(createElement('div', ['fourth-container-element']));
  
  const healthyEating = fourthContainerElement.appendChild(createElement('div', ['healthy-eating']));
  healthyEating.appendChild(createElement('img', ['eating-icon'], { src: "./assets/images/icon-eating.svg", alt: "eating" }));

  const healthyContainer = healthyEating.appendChild( createElement("div"), ["healthy-container"])
  healthyContainer.appendChild(createElement('div', ['healthy-title'], { textContent: "Healthy eating" }));
  healthyContainer.appendChild(createElement('div', ['healthy-status'], { textContent: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood." }));
  
  const regularHealthCheck = fourthContainerElement.appendChild(createElement('div', ['healthy-health-check']));
  regularHealthCheck.appendChild(createElement('img', ['exercise-icon'], { src: "./assets/images/icon-exercise.svg", alt: "exercise" }));

  const healthCheckElement = regularHealthCheck.appendChild(createElement('div', ['healthy-health-element']));
  healthCheckElement.appendChild(createElement('div', ['regular-fitness-title'], { textContent: "Regular exercise" }));
  healthCheckElement.appendChild(createElement('div', ['exercise-fitness-status'], { textContent: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity." }));
  
  const adequateStatus = fourthContainerElement.appendChild(createElement('div', ['adequate-status']));
  adequateStatus.appendChild(createElement('img', ['adequate-icon'], { src: "./assets/images/icon-sleep.svg", alt: "sleep" }));

  const effectiveCondition = adequateStatus.appendChild(createElement ('div', ['effective-condition']));
  effectiveCondition.appendChild(createElement('div', ['sufficiently-sleep-status'], { textContent: "Adequate sleep" }));
  effectiveCondition.appendChild(createElement('div', ['adequate-sleep-status'], { textContent: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation." }));
  
  section3.appendChild(fourthContainerElement);
  document.body.appendChild(section3);

  const section4 = createElement('section', ['last-container']);
  const lastContainerElement = section4.appendChild(createElement('div', ['last-container-element']))

  const limitationsBmiStatus = lastContainerElement.appendChild(createElement('div', ['limitation-status-bmi']))
  limitationsBmiStatus.appendChild(createElement('div', ['limitation-status-header'], {textContent: 'Limitations of BMI'}));
  limitationsBmiStatus.appendChild(createElement('div', ['limitation-status-element'], {textContent: "Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use."}))
  limitationsBmiStatus.appendChild(createElement('img', ['line-curve-right'], {src: './assets/images/pattern-curved-line-right.svg', alt: "right"}))

  const gridElement = lastContainerElement.appendChild(createElement('grid', ['grid-container-element']))

  const gridContainer = gridElement.appendChild(createElement('div', ['grid-container']))
  const genderedGridElement = gridContainer.appendChild(createElement('div', ['gendered-grid']))
  const genderedContainer = genderedGridElement.appendChild(createElement('div', ['gendered-container']))
  const genderElementImg = genderedContainer.appendChild(createElement('div', ['gender-image']))
  genderElementImg.appendChild(createElement('img', [], {src: './assets/images/icon-gender.svg', alt: 'gender'}))
  genderElementImg.appendChild(createElement('h5', ['gender-text'], {textContent: 'Gender'}))
  genderedContainer.appendChild(createElement('div', ['gender-develop'], {textContent: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."}))

  const ageGridElement = gridContainer.appendChild(createElement('div', ['age-grid']))
  const ageContainer = ageGridElement.appendChild(createElement('div', ['age-container']))
  const imgAgeDevelop = ageContainer.appendChild(createElement('div', ['img-gender-develop']))
  imgAgeDevelop.appendChild(createElement('img', [], {src: './assets/images/icon-age.svg', alt: 'age'}))
  imgAgeDevelop.appendChild(createElement('h5', ['age-text'], {textContent: 'Age'}))
  ageContainer.appendChild(createElement('div', ['age-develop'], {textContent: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."}))

  const musclePregElement = gridElement.appendChild(createElement('div', ['muscle-preg-element']))
  const gridAgeRace = musclePregElement.appendChild(createElement('div', ['muscle-grid']))
  const muscleContainer = gridAgeRace.appendChild(createElement('div', ['muscle-container']))
  const imgMuscleElement = muscleContainer.appendChild(createElement('div', ['img-muscle-element']))
  imgMuscleElement.appendChild(createElement('img', [], {src: './assets/images/icon-muscle.svg', alt: 'muscle'}))
  imgMuscleElement.appendChild(createElement('h5', ['muscle-text'], {textContent: 'Muscle'}))
  muscleContainer.appendChild(createElement('div', ['muscle-develop'], {textContent: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."}))

  const pregnancyGridElement = musclePregElement.appendChild(createElement('div', ['pregnancy-grid']))
  const pregnancyContainer = pregnancyGridElement.appendChild(createElement('div', ['pregnancy-container']))
  const pregContentElement = pregnancyContainer.appendChild(createElement('div', ['preg-content-element']))
  pregContentElement.appendChild(createElement('img', [], {src: './assets/images/icon-pregnancy.svg', alt: 'pregnancy'}))
  pregContentElement.appendChild(createElement('h5', ['pregnancy-text'], {textContent: 'Pregnancy'}))
  pregnancyContainer.appendChild(createElement('div', ['Pregnancy-develop'], {textContent: "  Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."}))
 
  const raceGridElement = gridElement.appendChild(createElement('div', ['race-grid']))
  const raceContainer = raceGridElement.appendChild(createElement('div', ['race-container']))
  const racerContent = raceContainer.appendChild(createElement('div', ['racer-content']))
  racerContent.appendChild(createElement('img', [], {src: './assets/images/icon-race.svg', alt: 'race'}))
  racerContent.appendChild(createElement('h5', ['race-text'], {textContent: 'Race'}))
  raceContainer.appendChild(createElement('div', ['race-develop'], {textContent: " Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."}))

 

  document.body.appendChild(section4);
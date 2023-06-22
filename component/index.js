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
  
  const headerElementContainer = document.createElement('div');
  headerElementContainer.classList.add('header-element-container');
  headerElement.appendChild(headerElementContainer);

  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = './assets/images/logo.svg';
  logo.alt = 'logo';
  headerElementContainer.appendChild(logo);

  const headerPage = document.createElement('div');
  headerPage.classList.add('headered-pages-header');
  headerElementContainer.appendChild(headerPage);
  
  const h1 = document.createElement('h1');
  h1.classList.add('header-title');
  h1.textContent = 'Body Mass Index Calculator';
  headerPage.appendChild(h1);
  
  const p = document.createElement('p');
  p.classList.add('header-page');
  p.textContent = 'Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.';
  headerPage.appendChild(p);
  
  const headerSubheaderContainer = document.createElement('div');
  headerSubheaderContainer.classList.add('header-subheader-container');
  headerElement.appendChild(headerSubheaderContainer);
  
  const headerSubContainer = document.createElement('div');
  headerSubContainer.classList.add('header-sub-container');
  headerSubheaderContainer.appendChild(headerSubContainer);

  const headerContainerElement = document.createElement('div');
  headerContainerElement.classList.add('header-container-element');
  headerSubContainer.appendChild(headerContainerElement);
  
  const h2 = document.createElement('h2');
  h2.classList.add('header-container-title');
  h2.textContent = 'Enter your details below';
  headerContainerElement.appendChild(h2);
  
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main-container');
  headerContainerElement.appendChild(mainDiv);
  
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
  kgLabel.classList.add("kg-label");
  kgLabel.textContent = "kg";
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
    const height = parseFloat(heightInput.value) || 0;
    const weight = parseFloat(weightInput.value) || 0; 
    const result = calculateMetric(height, weight);
    
    if (height || weight) {
      resultMessageContent.style.display = "none";
      resultElement.innerHTML = `Your BMI is...<span class="result-number">${result}</span>`;
      resultCalculator.style.display = "block";

      const bmiCategory = getBMICategory(result);
      const weightRange = getWeightRange(height);
      resultCalculator.innerHTML = `Your BMI suggests you're ${bmiCategory}.. Your ideal weight range is <span class="weight-range" > ${weightRange}</span> .`;
    }
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'healthy weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'overweight';
    } else {
      return 'obesity';
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
      const result = ((weightPounds / heightInchesSquared) * 703).toFixed(1)

      if(heightInches || weightPounds){
        resultMessageContent.style.display = "none";
        resultElement.innerHTML = `Your BMI is...<span class="result-number">${result}</span>`

        const bmiCategory = getWeightCategory(result);
        const weightRange = getIdealWeightRange(heightInches);
        resultCalculator.innerHTML = `Your BMI suggests you're a ${bmiCategory}. Your ideal weight is between <span class="weight-range" > ${weightRange}`;

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

  const section2 = document.createElement('section');
  section2.classList.add('middle-container');

  const middleContainerElement = document.createElement('div');
  middleContainerElement.classList.add('middle-container-element');
  section2.appendChild(middleContainerElement);

  const manIcon = document.createElement('img');
  manIcon.classList.add('manIcon');
  manIcon.src = "./assets/images/image-man-eating.webp";
  manIcon.alt = "man";
  middleContainerElement.appendChild(manIcon);

  const middleContainerCurve = document.createElement('div');
  middleContainerCurve.classList.add('middle-container-curve');
  middleContainerElement.appendChild(middleContainerCurve);

  const curveLeft = document.createElement('img');
  curveLeft.classList.add('curve');
  curveLeft.src = "./assets/images/pattern-curved-line-left.svg";
  curveLeft.alt = "left";
  middleContainerCurve.appendChild(curveLeft);

  const bmiResult = document.createElement('div');
  bmiResult.classList.add('bmi-result');
  bmiResult.textContent = "What your BMI result means";
  middleContainerCurve.appendChild(bmiResult);

  const healthyRange = document.createElement('div');
  healthyRange.classList.add('healthy-range');
  healthyRange.textContent = "A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.";
  middleContainerCurve.appendChild(healthyRange);

  document.body.appendChild(section2);

  const section3 = document.createElement('section');
  section3.classList.add('fourth-container');

  const fourthContainerElement = document.createElement('div');
  fourthContainerElement.classList.add('fourth-container-element');
  section3.appendChild(fourthContainerElement);

  const healthyEating = document.createElement('div');
  healthyEating.classList.add('healthy-eating');
  fourthContainerElement.appendChild(healthyEating);

  const eatingIcon = document.createElement('img');
  eatingIcon.classList.add('eating-icon');
  eatingIcon.src = "./assets/images/icon-eating.svg";
  eatingIcon.alt = "eating";
  healthyEating.appendChild(eatingIcon);

  const healthyContainer = document.createElement('div');
  healthyContainer.classList.add('healthy-container');
  healthyEating.appendChild(healthyContainer);

  const healthyTitle = document.createElement('div');
  healthyTitle.classList.add('healthy-title');
  healthyTitle.textContent = "Healthy eating";
  healthyContainer.appendChild(healthyTitle);

  const healthyStatus = document.createElement('div');
  healthyStatus.classList.add('healthy-status');
  healthyStatus.textContent = "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.";
  healthyContainer.appendChild(healthyStatus);

  const regularHealthCheck = document.createElement('div');
  regularHealthCheck.classList.add('healthy-health-check');
  fourthContainerElement.appendChild(regularHealthCheck);

  const exerciseIcon = document.createElement('img');
  exerciseIcon.classList.add('exercise-icon');
  exerciseIcon.src = "./assets/images/icon-exercise.svg";
  exerciseIcon.alt = "exercise";
  regularHealthCheck.appendChild(exerciseIcon);

  const healthCheckElement = document.createElement('div');
  healthCheckElement.classList.add('healthy-health-element');
  regularHealthCheck.appendChild(healthCheckElement);

  const regularFitnessTitle = document.createElement('div');
  regularFitnessTitle.classList.add('regular-fitness-title');
  regularFitnessTitle.textContent = "Regular exercise";
  healthCheckElement.appendChild(regularFitnessTitle);

  const exerciseFitnessStatus = document.createElement('div');
  exerciseFitnessStatus.classList.add('exercise-fitness-status');
  exerciseFitnessStatus.textContent = "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.";
  healthCheckElement.appendChild(exerciseFitnessStatus);

  const adequateStatus = document.createElement('div');
  adequateStatus.classList.add('adequate-status');
  fourthContainerElement.appendChild(adequateStatus);

  const adequateIcon = document.createElement('img');
  adequateIcon.classList.add('adequate-icon');
  adequateIcon.src = "./assets/images/icon-sleep.svg";
  adequateIcon.alt = "sleep";
  adequateStatus.appendChild(adequateIcon);

  const effectiveCondition = document.createElement('div');
  effectiveCondition.classList.add('effective-condition');
  adequateStatus.appendChild(effectiveCondition);

  const sufficientlySleepStatus = document.createElement('div');
  sufficientlySleepStatus.classList.add('sufficiently-sleep-status');
  sufficientlySleepStatus.textContent = "Adequate sleep";
  effectiveCondition.appendChild(sufficientlySleepStatus);

  const adequateSleepStatus = document.createElement('div');
  adequateSleepStatus.classList.add('adequate-sleep-status');
  adequateSleepStatus.textContent = "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.";
  effectiveCondition.appendChild(adequateSleepStatus);

  document.body.appendChild(section3);

    const section4 = document.createElement('section');
  section4.classList.add('last-container');

  const lastContainerElement = document.createElement('div');
  lastContainerElement.classList.add('last-container-element');
  section4.appendChild(lastContainerElement);

  const limitationsBmiStatus = document.createElement('div');
  limitationsBmiStatus.classList.add('limitation-status-bmi');
  lastContainerElement.appendChild(limitationsBmiStatus);

  const limitationStatusHeader = document.createElement('div');
  limitationStatusHeader.classList.add('limitation-status-header');
  limitationStatusHeader.textContent = 'Limitations of BMI';
  limitationsBmiStatus.appendChild(limitationStatusHeader);

  const limitationStatusElement = document.createElement('div');
  limitationStatusElement.classList.add('limitation-status-element');
  limitationStatusElement.textContent = 'Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.';
  limitationsBmiStatus.appendChild(limitationStatusElement);

  const lineCurveRight = document.createElement('img');
  lineCurveRight.classList.add('line-curve-right');
  lineCurveRight.src = './assets/images/pattern-curved-line-right.svg';
  lineCurveRight.alt = 'right';
  limitationsBmiStatus.appendChild(lineCurveRight);

  const gridElement = document.createElement('grid');
  gridElement.classList.add('grid-container-element');
  lastContainerElement.appendChild(gridElement);

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  gridElement.appendChild(gridContainer);

  const genderedGridElement = document.createElement('div');
  genderedGridElement.classList.add('gendered-grid');
  gridContainer.appendChild(genderedGridElement);

  const genderedContainer = document.createElement('div');
  genderedContainer.classList.add('gendered-container');
  genderedGridElement.appendChild(genderedContainer);

  const genderElementImg = document.createElement('div');
  genderElementImg.classList.add('gender-image');
  genderedContainer.appendChild(genderElementImg);

  const genderImage = document.createElement('img');
  genderImage.src = './assets/images/icon-gender.svg';
  genderImage.alt = 'gender';
  genderElementImg.appendChild(genderImage);

  const genderText = document.createElement('h5');
  genderText.classList.add('gender-text');
  genderText.textContent = 'Gender';
  genderElementImg.appendChild(genderText);

  const genderDevelop = document.createElement('div');
  genderDevelop.classList.add('gender-develop');
  genderDevelop.textContent = "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.";
  genderedContainer.appendChild(genderDevelop);

  const ageGridElement = document.createElement('div');
  ageGridElement.classList.add('age-grid');
  gridContainer.appendChild(ageGridElement);

  const ageContainer = document.createElement('div');
  ageContainer.classList.add('age-container');
  ageGridElement.appendChild(ageContainer);

  const imgAgeDevelop = document.createElement('div');
  imgAgeDevelop.classList.add('img-gender-develop');
  ageContainer.appendChild(imgAgeDevelop);

  const ageImage = document.createElement('img');
  ageImage.src = './assets/images/icon-age.svg';
  ageImage.alt = 'age';
  imgAgeDevelop.appendChild(ageImage);

  const ageText = document.createElement('h5');
  ageText.classList.add('age-text');
  ageText.textContent = 'Age';
  imgAgeDevelop.appendChild(ageText);

  const ageDevelop = document.createElement('div');
  ageDevelop.classList.add('age-develop');
  ageDevelop.textContent = "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.";
  ageContainer.appendChild(ageDevelop);

  const musclePregElement = document.createElement('div');
  musclePregElement.classList.add('muscle-preg-element');
  gridElement.appendChild(musclePregElement);

  const gridAgeRace = document.createElement('div');
  gridAgeRace.classList.add('muscle-grid');
  musclePregElement.appendChild(gridAgeRace);

  const muscleContainer = document.createElement('div');
  muscleContainer.classList.add('muscle-container');
  gridAgeRace.appendChild(muscleContainer);

  const imgMuscleElement = document.createElement('div');
  imgMuscleElement.classList.add('img-muscle-element');
  muscleContainer.appendChild(imgMuscleElement);

  const muscleImage = document.createElement('img');
  muscleImage.src = './assets/images/icon-muscle.svg';
  muscleImage.alt = 'muscle';
  imgMuscleElement.appendChild(muscleImage);

  const muscleText = document.createElement('h5');
  muscleText.classList.add('muscle-text');
  muscleText.textContent = 'Muscle';
  imgMuscleElement.appendChild(muscleText);

  const muscleDevelop = document.createElement('div');
  muscleDevelop.classList.add('muscle-develop');
  muscleDevelop.textContent = "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.";
  muscleContainer.appendChild(muscleDevelop);

  const pregnancyGridElement = document.createElement('div');
  pregnancyGridElement.classList.add('pregnancy-grid');
  musclePregElement.appendChild(pregnancyGridElement);

  const pregnancyContainer = document.createElement('div');
  pregnancyContainer.classList.add('pregnancy-container');
  pregnancyGridElement.appendChild(pregnancyContainer);

  const pregContentElement = document.createElement('div');
  pregContentElement.classList.add('preg-content-element');
  pregnancyContainer.appendChild(pregContentElement);

  const pregnancyImage = document.createElement('img');
  pregnancyImage.src = './assets/images/icon-pregnancy.svg';
  pregnancyImage.alt = 'pregnancy';
  pregContentElement.appendChild(pregnancyImage);

  const pregnancyText = document.createElement('h5');
  pregnancyText.classList.add('pregnancy-text');
  pregnancyText.textContent = 'Pregnancy';
  pregContentElement.appendChild(pregnancyText);

  const pregnancyDevelop = document.createElement('div');
  pregnancyDevelop.classList.add('Pregnancy-develop');
  pregnancyDevelop.textContent = "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimize health risks for both mother and child.";
  pregnancyContainer.appendChild(pregnancyDevelop);

  const raceGridElement = document.createElement('div');
  raceGridElement.classList.add('race-grid');
  gridElement.appendChild(raceGridElement);

  const raceContainer = document.createElement('div');
  raceContainer.classList.add('race-container');
  raceGridElement.appendChild(raceContainer);

  const racerContent = document.createElement('div');
  racerContent.classList.add('racer-content');
  raceContainer.appendChild(racerContent);

  const raceImage = document.createElement('img');
  raceImage.src = './assets/images/icon-race.svg';
  raceImage.alt = 'race';
  racerContent.appendChild(raceImage);

  const raceText = document.createElement('h5');
  raceText.classList.add('race-text');
  raceText.textContent = 'Race';
  racerContent.appendChild(raceText);

  const raceDevelop = document.createElement('div');
  raceDevelop.classList.add('race-develop');
  raceDevelop.textContent = "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.";
  raceContainer.appendChild(raceDevelop);

  document.body.appendChild(section4);

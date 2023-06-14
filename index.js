const createElement = (tag, classNames = [], attributes = {}) => {
    const element = document.createElement(tag);
    element.classList.add(...classNames);
    Object.entries(attributes).forEach(([key, value]) => {
      element[key] = value;
    });
    return element;
  };
  
  const section = createElement('section', ['header']);
  const headerContainer = section.appendChild(createElement("div", ["header-container"]));
  const headerElement = headerContainer.appendChild(createElement("div", ["header-element"]));
  const logo = headerElement.appendChild(createElement("img", ["logo"], { src: "./assets/images/logo.svg", alt: "logo" }));
  const headerElementContainer = headerElement.appendChild(createElement("div", ["header-element-container"]));
  headerElementContainer.appendChild(createElement("h1", [], { textContent: "Body Mass Index Calculator" }));
  headerElementContainer.appendChild(createElement("p", [], { textContent: "Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being." }));
  
  const headerSubheaderContainer = createElement("div", ["header-subheader-container"]);
  const headerSubContainer = headerSubheaderContainer.appendChild(createElement("div", ["header-sub-container"]));
  headerSubContainer.appendChild(createElement("h2", [], { textContent: "Enter your details below" }));
  headerContainer.appendChild(headerSubheaderContainer);
  
  const mainDiv = createElement("div", ["main-container"]);
  
  const selectContainer = mainDiv.appendChild(createElement("div", ["radio-container"]));
  const metricContainer = selectContainer.appendChild(createElement("div", ["metric-container"]));
  metricContainer.appendChild(createElement("input", ["radio-input"], { type: "radio", name: "unit", value: "metric" }));
  metricContainer.appendChild(createElement("label", ["radio-label"], { textContent: "Metric" }));
  
  const imperialContainer = selectContainer.appendChild(createElement("div", ["imperial-container"]));
  imperialContainer.appendChild(createElement("input", ["radio-input"], { type: "radio", name: "unit", value: "imperial" }));
  imperialContainer.appendChild(createElement("label", ["radio-label"], { textContent: "Imperial" }));


  const metricCard = metricContainer.appendChild(createElement("div", ["card", "metric-card"]));
  const metricCardBody = metricCard.appendChild(createElement("div", ["card-body"]))

  const metricHeight = metricCardBody.appendChild(createElement("div", ["height-metric-container"]))
  const heightLabel = metricHeight.appendChild(createElement("label", ["height-label"], { textContent: "Height" }));
  const heightInput = metricHeight.appendChild(createElement("input", ["input-field"], { textContent: "cm" }));
  heightInput.type = 'number';
  heightInput.min = '0';

  const metricWeight = metricCardBody.appendChild(createElement("div", ["weight-metric-container"]))
  const wieightLabel = metricWeight.appendChild(createElement("label", ["weight-label"], { textContent: "Weights" }));
  const wieightInput = metricWeight.appendChild(createElement("input", ["input-field"], { textContent: "kg" }));
  wieightInput.type = 'number';
  wieightInput.min = '0';
  
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
  healthyEating.appendChild(createElement('div', ['healthy-title'], { textContent: "Healthy eating" }));
  healthyEating.appendChild(createElement('div', ['healthy-status'], { textContent: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood." }));
  
  const regularHealthCheck = fourthContainerElement.appendChild(createElement('div', ['healthy-health-check']));
  regularHealthCheck.appendChild(createElement('img', ['exercise-icon'], { src: "./assets/images/icon-exercise.svg", alt: "exercise" }));
  regularHealthCheck.appendChild(createElement('div', ['regular-fitness-title'], { textContent: "Regular exercise" }));
  regularHealthCheck.appendChild(createElement('div', ['exercise-fitness-status'], { textContent: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity." }));
  
  const adequateStatus = fourthContainerElement.appendChild(createElement('div', ['adequate-status']));
  adequateStatus.appendChild(createElement('img', ['adequate-icon'], { src: "./assets/images/icon-sleep.svg", alt: "sleep" }));
  adequateStatus.appendChild(createElement('div', ['sufficiently-sleep-status'], { textContent: "Adequate sleep" }));
  adequateStatus.appendChild(createElement('div', ['adequate-sleep-status'], { textContent: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation." }));
  
  section3.appendChild(fourthContainerElement);
  document.body.appendChild(section3);

  const section4 = createElement('section', ['last-container']);
  const lastContainerElement = section4.appendChild(createElement('div', ['last-container-element']))

  const limitationsBmiStatus = lastContainerElement.appendChild(createElement('div', ['limitation-status-bmi']))
  limitationsBmiStatus.appendChild(createElement('div', ['limitation-status-header'], {textContent: 'Limitations of BMI'}));
  limitationsBmiStatus.appendChild(createElement('div', ['limitation-status-element'], {textContent: "Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use."}))
  limitationsBmiStatus.appendChild(createElement('img', ['line-curve-right'], {src: './assets/images/pattern-curved-line-right.svg', alt: "right"}))

  const gridElement = lastContainerElement.appendChild(createElement('grid', ['grid-container-element']))

  const genderedGridElement = gridElement.appendChild(createElement('div', ['gendered-grid']))
  const genderedContainer = genderedGridElement.appendChild(createElement('div', ['gendered-container']))
  genderedContainer.appendChild(createElement('img', [], {src: './assets/images/icon-gender.svg', alt: 'gender'}))
  genderedContainer.appendChild(createElement('h5', ['gender-text'], {textContent: 'Gender'}))
  genderedContainer.appendChild(createElement('div', ['gender-develop'], {textContent: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."}))

  const muscleGridElement = gridElement.appendChild(createElement('div', ['muscle-grid']))
  const muscleContainer = muscleGridElement.appendChild(createElement('div', ['muscle-container']))
  muscleContainer.appendChild(createElement('img', [], {src: './assets/images/icon-muscle.svg', alt: 'muscle'}))
  muscleContainer.appendChild(createElement('h5', ['muscle-text'], {textContent: 'Muscle'}))
  muscleContainer.appendChild(createElement('div', ['muscle-develop'], {textContent: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."}))

  const ageGridElement = gridElement.appendChild(createElement('div', ['age-grid']))
  const ageContainer = ageGridElement.appendChild(createElement('div', ['age-container']))
  ageContainer.appendChild(createElement('img', [], {src: './assets/images/icon-age.svg', alt: 'age'}))
  ageContainer.appendChild(createElement('h5', ['age-text'], {textContent: 'Age'}))
  ageContainer.appendChild(createElement('div', ['age-develop'], {textContent: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."}))

  const raceGridElement = gridElement.appendChild(createElement('div', ['race-grid']))
  const raceContainer = raceGridElement.appendChild(createElement('div', ['race-container']))
  raceContainer.appendChild(createElement('img', [], {src: './assets/images/icon-race.svg', alt: 'race'}))
  raceContainer.appendChild(createElement('h5', ['race-text'], {textContent: 'Race'}))
  raceContainer.appendChild(createElement('div', ['race-develop'], {textContent: " Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."}))

  const pregnancyGridElement = gridElement.appendChild(createElement('div', ['pregnancy-grid']))
  const pregnancyContainer = pregnancyGridElement.appendChild(createElement('div', ['pregnancy-container']))
  pregnancyContainer.appendChild(createElement('img', [], {src: './assets/images/icon-pregnancy.svg', alt: 'pregnancy'}))
  pregnancyContainer.appendChild(createElement('h5', ['pregnancy-text'], {textContent: 'Pregnancy'}))
  pregnancyContainer.appendChild(createElement('div', ['Pregnancy-develop'], {textContent: "  Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."}))

  document.body.appendChild(section4);
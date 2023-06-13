const section = document.createElement('section');
section.classList.add('header');

const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");
section.appendChild(headerContainer);

const headerElement = document.createElement("div");
headerElement.classList.add("header-element");
headerContainer.appendChild(headerElement);

const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = "./assets/images/logo.svg";
logo.alt = "logo";

const headerElementContainer = document.createElement("div");
headerElementContainer.classList.add("header-element-container");

const h1 = document.createElement("h1");
h1.textContent = "Body Mass Index Calculator";
const p = document.createElement("p");
p.textContent = "Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.";

headerElementContainer.appendChild(h1);
headerElementContainer.appendChild(p);

headerElement.appendChild(logo);
headerElement.appendChild(headerElementContainer);

const headerSubheaderContainer = document.createElement("div");
headerSubheaderContainer.classList.add("header-subheader-container");

const headerSubContainer = document.createElement("div");
headerSubContainer.classList.add("header-sub-container");

const h2 = document.createElement("h2");
h2.textContent = "Enter your details below"

headerSubContainer.appendChild(h2)
headerContainer.appendChild(headerSubheaderContainer);
// Create the main div container
const mainDiv = document.createElement("div");
mainDiv.classList.add("main-container");

// Create the div container for radio buttons
const selectContainer = document.createElement("div");
selectContainer.classList.add("radio-container");

// Create the div container for the metric input and label
const metricContainer = document.createElement("div");
metricContainer.classList.add("metric-container");

// Create the metric radio button
const metricRadio = document.createElement("input");
metricRadio.type = "radio";
metricRadio.name = "unit";
metricRadio.value = "metric";
metricRadio.classList.add("radio-input");

// Create the metric label
const metricLabel = document.createElement("label");
metricLabel.textContent = "Metric";
metricLabel.classList.add("radio-label");

// Append the metric radio button and label to the metric container
metricContainer.appendChild(metricRadio);
metricContainer.appendChild(metricLabel);


// Create the div container for the imperial input and label
const imperialContainer = document.createElement("div");
imperialContainer.classList.add("imperial-container");

// Create the imperial radio button
const imperialRadio = document.createElement("input");
imperialRadio.type = "radio";
imperialRadio.name = "unit";
imperialRadio.value = "imperial";
imperialRadio.classList.add("radio-input");

// Create the imperial label
const imperialLabel = document.createElement("label");
imperialLabel.textContent = "Imperial";
imperialLabel.classList.add("radio-label");

// Append the imperial radio button and label to the imperial container
imperialContainer.appendChild(imperialRadio);
imperialContainer.appendChild(imperialLabel);

// Append the metric container and imperial container to the selectContainer div
selectContainer.appendChild(metricContainer);
selectContainer.appendChild(imperialContainer);

headerSubContainer.appendChild(selectContainer);

headerSubheaderContainer.appendChild(headerSubContainer)
document.body.appendChild(section);

const section2 = document.createElement('section');
section2.classList.add('middle-container');

const middleContainerElement = document.createElement('div');
middleContainerElement.classList.add('middle-container-element');

const humanPic = document.createElement('img');
humanPic.classList.add('manIcon');
humanPic.src = "./assets/images/image-man-eating.webp";
humanPic.alt = "man";
middleContainerElement.appendChild(humanPic);

const middleContainerCurve = document.createElement('div');
middleContainerCurve.classList.add('middle-container-curve');

const curve = document.createElement('img')
curve.classList.add('curve');
curve.src = "./assets/images/pattern-curved-line-left.svg"
curve.alt = "left"
middleContainerCurve.appendChild(curve);

const bmiResult = document.createElement("div");
bmiResult.classList.add('bmi-result');
bmiResult.textContent = "What your BMI result means"
middleContainerCurve.appendChild(bmiResult);

const healthyRange = document.createElement("div");
healthyRange.classList.add("healthy-range");
healthyRange.textContent = " A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week."
middleContainerCurve.appendChild(healthyRange)


middleContainerElement.appendChild(middleContainerCurve);
section2.appendChild(middleContainerElement);
document.body.appendChild(section2);

const section3 = document.createElement('section');
section3.classList.add('fourth-container');

const fourthContainerElement = document.createElement('div');
fourthContainerElement.classList.add('fourth-container-element');


section3.appendChild( fourthContainerElement );
document.body.appendChild(section3);
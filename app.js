// https://calculator.swiftutors.com/newtons-law-of-cooling-calculator.html

// calculatores doesnot work

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const objectstemperatureattimeRadio = document.getElementById('objectstemperatureattimeRadio');
const surroundingTemperatureRadio = document.getElementById('surroundingTemperatureRadio');
const objectsInitialTemperatureRadio = document.getElementById('objectsInitialTemperatureRadio');
const coreTemperatureRadio = document.getElementById('coreTemperatureRadio');
const timeRadio = document.getElementById('timeRadio');

let objectstemperatureattime;
let surroundingTemperature = v1;
let objectsInitialTemperature = v2;
let coreTemperature = v3;
let time = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

objectstemperatureattimeRadio.addEventListener('click', function() {
  variable1.textContent = '(Ts) Surrounding Temperature';
  variable2.textContent = '(To) Object\'s Initial Temperature';
  variable3.textContent = '(T) Core Temperature';
  variable4.textContent = '(t) Time';
  surroundingTemperature = v1;
  objectsInitialTemperature = v2;
  coreTemperature = v3;
  time = v4;
  result.textContent = '';
});

surroundingTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(T(t)) Object\'s temperature at time';
  variable2.textContent = '(To) Object\'s Initial Temperature';
  variable3.textContent = '(T) Core Temperature';
  variable4.textContent = '(t) Time';
  objectstemperatureattime = v1;
  objectsInitialTemperature = v2;
  coreTemperature = v3;
  time = v4;
  result.textContent = '';
});

objectsInitialTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(T(t)) Object\'s temperature at time';
  variable2.textContent = '(Ts) Surrounding Temperature';
  variable3.textContent = '(T) Core Temperature';
  variable4.textContent = '(t) Time';
  objectstemperatureattime = v1;
  surroundingTemperature = v2;
  coreTemperature = v3;
  time = v4;
  result.textContent = '';
});

coreTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(T(t)) Object\'s temperature at time';
  variable2.textContent = '(Ts) Surrounding Temperature';
  variable3.textContent = '(To) Object\'s Initial Temperature';
  variable4.textContent = '(t) Time';
  objectstemperatureattime = v1;
  surroundingTemperature = v2;
  objectsInitialTemperature = v3;
  time = v4;
  result.textContent = '';
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = '(T(t)) Object\'s temperature at time';
  variable2.textContent = '(Ts) Surrounding Temperature';
  variable3.textContent = '(To) Object\'s Initial Temperature';
  variable4.textContent = '(T) Core Temperature';
  objectstemperatureattime = v1;
  surroundingTemperature = v2;
  objectsInitialTemperature = v3;
  coreTemperature = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(objectstemperatureattimeRadio.checked)
    result.textContent = `Object's temperature at time = ${computeObjectstemperatureattime().toFixed(2)} %`;

  else if(surroundingTemperatureRadio.checked)
    result.textContent = `Surrounding Temperature = ${computeSurroundingTemperature().toFixed(2)}`;

  else if(objectsInitialTemperatureRadio.checked)
    result.textContent = `Object's Initial Temperature = ${computeObjectsInitialTemperature().toFixed(2)}`;

  else if(coreTemperatureRadio.checked)
    result.textContent = `Core Temperature = ${computeCoreTemperature().toFixed(2)}`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computeTime().toFixed(2)}`;
})

// calculation

function computeObjectstemperatureattime() {
  return Number(surroundingTemperature.value) + (Number(objectsInitialTemperature.value) - Number(surroundingTemperature.value)) * Math.pow(Math.E, -computeK() * Number(time.value))
}

function computeSurroundingTemperature() {
  return Number(costofGoodsManufactured.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeObjectsInitialTemperature() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeCoreTemperature() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeTime() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) + Number(endingWorkinProcessInventory.value);
}

function computeK() {
  return Math.log((Number(coreTemperature.value) - Number(surroundingTemperature.value)) / (Number(objectsInitialTemperature.value) - Number(surroundingTemperature.value)))
}
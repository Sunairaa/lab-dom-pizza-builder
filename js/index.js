// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if(state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if(state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let SauceElement = document.querySelector('.sauce');
  if(state.whiteSauce) {
    SauceElement.setAttribute('class', 'sauce sauce-white');
  } else {
    SauceElement.setAttribute('class', 'sauce');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let GlutenFreeCrustElement = document.querySelector('.crust');
  // console.log(GlutenFreeCrustElement);
  if(state.glutenFreeCrust) {
    GlutenFreeCrustElement.setAttribute('class', 'crust crust-gluten-free');
  } else {
    GlutenFreeCrustElement.setAttribute('class', 'crust');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((btn) => {
    if (btn.innerHTML === 'pepperoni') {
      state.pepperoni ? btn.classList.add('active') : btn.classList.remove('active');
    } else if ((btn.innerHTML === 'Mushrooms')) {
      state.mushrooms ? btn.classList.add('active') : btn.classList.remove('active');
    } else if ((btn.innerHTML === 'Green peppers')) {
      state.greenPeppers ? btn.classList.add('active') : btn.classList.remove('active');
    } else if ((btn.innerHTML === 'White sauce')) {
      state.whiteSauce ? btn.classList.add('active') : btn.classList.remove('active');
    } else if ((btn.innerHTML === 'Gluten-free crust')) {
      state.glutenFreeCrust ? btn.classList.add('active') : btn.classList.remove('active');
    }
  })
}

function renderPrice() {
 
  let total = basePrice;
  const priceListElement = document.querySelector('aside ul')
  const TotalPriceElement = document.querySelector('aside strong');
  priceListElement.innerHTML = "";
  console.log(priceListElement);
  
  if(state.pepperoni) {
    let pepperoniLi = document.createElement('li');
    pepperoniLi.innerText = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`;
    priceListElement.appendChild(pepperoniLi);
    total += ingredients.pepperoni.price;
  }

  if(state.mushrooms) {
    let mushroomsLi = document.createElement('li');
    mushroomsLi.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
    priceListElement.appendChild(mushroomsLi);
    total += ingredients.mushrooms.price;
  }

  if(state.greenPeppers) {
    let greenPeppersLi = document.createElement('li');
    greenPeppersLi.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
    priceListElement.appendChild(greenPeppersLi);
    total += ingredients.greenPeppers.price;
  }

  if(state.whiteSauce) {
    let whiteSauceLi = document.createElement('li');
    whiteSauceLi.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
    priceListElement.appendChild(whiteSauceLi);
    total += ingredients.whiteSauce.price;
  }

  if(state.glutenFreeCrust) {
    let glutenFreeCrustLi = document.createElement('li');
    glutenFreeCrustLi.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
    priceListElement.appendChild(glutenFreeCrustLi);
    total += ingredients.glutenFreeCrust.price;
  }
  
  TotalPriceElement.innerHTML = total;
  console.log(total);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

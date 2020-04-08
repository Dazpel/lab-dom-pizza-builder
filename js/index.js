// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
  total: {name: 'Total', price:21,}
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything(index) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(index);
  renderPrice(index);
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(onePep => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(onePep => {
      if (state.greenPeppers) {
        onePep.style.visibility = 'visible';
      } else {
        onePep.style.visibility = 'hidden';
      }
    });
}



function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (document.querySelector("section.sauce").className === 'sauce sauce-white') {
    document.querySelector("section.sauce").classList.toggle('sauce-white', false);
    document.querySelector("section.sauce").classList.toggle('sauce-white');
  }

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (document.querySelector("section.crust").className === 'crust crust-gluten-free') {
    document.querySelector("section.crust").classList.toggle('crust-gluten-free"', false);
    document.querySelector("section.crust").classList.toggle('crust-gluten-free"');
  }
}

function renderButtons(i) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (i!==undefined){
    document.getElementsByClassName('btn')[i].classList.toggle('active')
  }
}


function renderPrice(i) {
let p =document.querySelector("body > aside > strong") ;
  if (i!==undefined){

    if(document.getElementsByClassName('btn')[i].className.includes('active'))
    {
      ingredients.total.price += Object.values(ingredients)[i].price
      document.querySelectorAll('.price ul li')[i].style.display = 'block'
    }
    else
    {
      ingredients.total.price -= Object.values(ingredients)[i].price
      document.querySelectorAll('.price ul li')[i].style.display = 'none'
    }
  }
  p.innerText = `$${ingredients.total.price}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything(0);
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything(1);
});
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything(2);
});

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything(3);
});

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(4);
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

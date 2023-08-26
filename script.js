const target = document.getElementById("pizza-base");
const color_pizza = document.getElementById("pizza-container")
const errorMessage = document.getElementById("error-message");
const pepperoni_topping =document.getElementById("pepperoni-topping");
const mushrooms_topping =document.getElementById("mushrooms-topping");
const peppers_topping =document.getElementById("peppers-topping");
const display_error = document.getElementById("error-display");
let selectedBase = null;

const ingredients = document.querySelectorAll(".ingredient");
const pepperoni = document.getElementById("pepperoni");
const mushrooms = document.getElementById("mushrooms");
const peppers = document.getElementById("peppers");

const baseOptions = document.querySelectorAll(".base-option");

let baseAdded = false;
let pepperoni_bool =false;
let pepper_bool = false;
let mushroom_bool = false;


baseOptions.forEach((baseOption) => {
  baseOption.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
    const baseValue = event.target;
    selectedBase = baseValue;
    if (baseValue && !baseAdded) {
      baseAdded = true;
    }
  });
});
console.log(selectedBase);
target.addEventListener("dragover", (event) => {
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  var data = event.dataTransfer.getData("text");

  if (data && baseAdded) {
    if (data === selectedBase.id) {
      console.log("Base  added");
      console.log(data);
      if(data==="thin-crust")color_pizza.style.backgroundColor="#CC9F62";
      if(data==="thick-crust")color_pizza.style.backgroundColor="#BF873B";
      baseAdded = false;
    }
  }
});

let add_ons = [];
let sel_top;
pepperoni.addEventListener("dragstart", (event) => {
  
  sel_top=event.target;
  pepperoni_bool=true;
  target.addEventListener("drop", (event) => {


    if (selectedBase === null) {
      console.log("Add a base");

    }

    else if (pepperoni_bool) {
      pepperoni_topping.style.display="block";
  
      console.log("Ingredients Added");
    }

 

  });
});




function show_pepperoni(sel_top){


}
mushrooms.addEventListener("dragstart", (event) => {
 sel_top=event.target;
mushroom_bool=true;

  target.addEventListener("drop", (event) => {
    if (selectedBase === null) {
      console.log("Add a base");
    }

   else if (mushroom_bool) {
      mushrooms_topping.style.display="block";
  
      console.log("Ingredients Added");
    }
  });
});
peppers.addEventListener("dragstart", (event) => {
  sel_top=event.target;
pepper_bool=true;

   target.addEventListener("drop", (event) => {
    if (selectedBase === null) {
      console.log("Add a base");
    }

   else if (pepper_bool) {
     peppers_topping.style.display="block";
  
      console.log("Ingredients Added");
    }
   });
 });
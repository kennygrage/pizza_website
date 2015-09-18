//**********Global Variables**********//
var this_pizza_price = 13;           //running total of each specific pizza - large pizza starts checked
var total_order_price;               //how_many * this_pizza_price
var current_size = "Large";          //used to subtract price from this_pizza_price when pizza size is changed
var pizza_prices = [];               //array holding the prices of all of the pizzas
var toppings = [];                   //toppings on the pizza
var toppings_price_per_each = 1;     //price per topping






function Pizza(size, price) {
  this.size = size;
  this.price = price;
  this.toppings = [];
} //end Pizza()


function Topping(topping) {
  this.topping = topping;
} //end Topping()


//Reset prices
function resetPrices() {
  this_pizza_price = 13;
  current_size = "Large";
  $("#this_pizza_price").text(this_pizza_price);
}

//Reset all fields to as they were on page load
function resetFields() {
  $('input[name="size"]').attr('checked', false); //clear radio button: size
  $("#large").prop('checked', true); //large starts off as default
  $('input:checkbox').removeAttr('checked'); //clear topping checkboxes
} //end resetFields()


//Subtract the old pizza price from this_pizza_price and total_pizza_price
function subtractOldPizzaPrice() {
  if (current_size == "Large") {
    this_pizza_price -= 13;
  }
  else if (current_size == "Medium") {
    this_pizza_price -= 9;
  }
  else if (current_size == "Small") {
    this_pizza_price -= 6;
  }
}


$(document).ready(function() {
  $("#this_pizza_price").text(this_pizza_price);


  //***Pizza Size***//
  $('input[type=radio][name=size]').change(function() {
    //large
    if (this.value == 'Large') {
      subtractOldPizzaPrice();
      this_pizza_price += 13;
      current_size = "Large";
      $("#this_pizza_price").text(this_pizza_price);
    }
    //medium
    else if (this.value == 'Medium') {
      subtractOldPizzaPrice();
      this_pizza_price += 9;
      current_size = "Medium";
      $("#this_pizza_price").text(this_pizza_price);
    }
    //small
    else if (this.value == 'Small') {
      subtractOldPizzaPrice();
      this_pizza_price += 6;
      current_size = "Small";
      $("#this_pizza_price").text(this_pizza_price);
    }
  });


  //***Toppings Checkboxes***//
  //pepperoni
  $('#pepperoni_topping').change(function() {
    if($(this).is(":checked")) {
      this_pizza_price += toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
    else {
      this_pizza_price -= toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
  });

  //extra cheese
  $('#extra_cheese_topping').change(function() {
    if($(this).is(":checked")) {
      this_pizza_price += toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
    else {
      this_pizza_price -= toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
  });

  //pineapple
  $('#pineapple_topping').change(function() {
    if($(this).is(":checked")) {
      this_pizza_price += toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
    else {
      this_pizza_price -= toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
  });

  //sausage
  $('#sausage_topping').change(function() {
    if($(this).is(":checked")) {
      this_pizza_price += toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
    else {
      this_pizza_price -= toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
  });

  //canadian bacon
  $('#canadian_bacon_topping').change(function() {
    if($(this).is(":checked")) {
      this_pizza_price += toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
    else {
      this_pizza_price -= toppings_price_per_each;
      $("#this_pizza_price").text(this_pizza_price);
    }
  });


  //***Buttons***//
  //clear_this_pizza button
  $("#clear_this_pizza").click(function() {
    resetFields();
    resetPrices();
  }); //end button: clear_this_pizza

  //order_pizza button
  $("form#order_pizza").submit(function(event) {
    event.preventDefault();
    var how_many = $("#how_many").val();
    total_order_price = this_pizza_price * how_many;
    alert("Thanks for ordering. Your total price is: $" + total_order_price);
  }); //end "form#order-pizza"

}); //end document.ready





// //add_pizza button
// $("#add_pizza").click(function() {
//   pizza_prices.push(this_pizza_price);
//   resetFields();
//
//
//   var pizza_size = $('input[name="size"]:checked').val();
//   var pizza_price;
//   if (pizza_size == "Large") {
//     pizza_price = 13;
//   }
//   else if (pizza_size == "Medium") {
//     pizza_price = 9;
//   }
//   else if (pizza_size == "Small") {
//     pizza_price = 6;
//   }
//   var newPizza = new Pizza(pizza_size, pizza_price);
//
//
//   if(document.getElementById('pepperoni_topping').checked) {
//       toppings.push("Pepperoni");
//   }
//   if(document.getElementById('extra_cheese_topping').checked) {
//       toppings.push("Extra Cheese");
//   }
//   if(document.getElementById('pineapple_topping').checked) {
//       toppings.push("Pineapple");
//   }
//   if(document.getElementById('sausage_topping').checked) {
//       toppings.push("Sausage");
//   }
//   if(document.getElementById('canadian_bacon_topping').checked) {
//       toppings.push("Canadian Bacon");
//   }
//
//   for (var i=0; i < toppings.length; i++) {
//
//   }
//   this_pizza_price = 13;
//   total_order_price += 13;
// }); //end button: add_pizza

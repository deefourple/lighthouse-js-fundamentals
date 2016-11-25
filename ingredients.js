var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients: 8 items 0-7 index

var counter = 0;
while (counter < 8) {
  console.log(ingredients[counter]);
  counter ++;
}

// Write a for loop that prints out the contents of ingredients:

for (var counter = 0; counter < 8; counter++){
  console.log(ingredients[counter]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

//~~~~~~~~While Loop

var counter = 7;
while (counter != -1) {
  console.log(ingredients[counter]);
  counter--;
}

//~~~~~~~~For Loop

for (var counter = 7; counter != -1; counter--) {
  console.log(ingredients[counter]);
}

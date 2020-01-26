#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

var restaurants = require("./data/restaurants.json");

const options = yargs
 .usage("Usage: -t <type>")
 .option("t", { alias: "type", describe: "Type of food", type: "string", demandOption: false })
 .argv;

const greeting = `Hello, it looks like you're looking for ${options.type} food!`;
console.log(greeting);

restaurantsOfType = [];

restaurants.forEach(function(restaurant) {
  if (options.type) {
    if (restaurant.tags.includes(options.type)) {
      restaurantsOfType.push(restaurant);
    }
  } else {
    /** if we're not looking for a particular type
    just add all restaurants to list*/
    restaurantsOfType.push(restaurant);
  }
});

console.log(restaurantsOfType);

/** TODO LIST 

1. Add distance parameter
2. Add option to choose randomly between results if more than one
3. Add option to remove results from list
4. "Rechoose" option*/
const foods = ["Beans", "Chicken and fries", "egg sauce", "egg roll", "potatoe porridge", "Pancakes", "Spaghetti stir-fry"];

const getAllFood = () => Math.trunc(Math.random() * foods.length );
class wereWolfAte {
  constructor(food, day) {
    this.food = food;
    this.day = day;
  }
}

const Lycanthrope = function(name) {
  this.name = name;
  this.log = [];

  this.eat = function(food, day) {
    this.log.push(new wereWolfAte(food, day));
  };

  this.showLogs = function() {
    // console.log(this.log);
    for (log of this.log) {
      
      if (log.food === "Chicken and fries") {
        console.log(log, " // Changed to werewolf");
      } else {
        console.log(log);
      }
    }
  };
};

const Jacques = function(name) {
  Lycanthrope.call(this, name);
};

const jacques = new Jacques("Ella");

function start(ella) {
  const totalTime = 24; // 2 weeks

  for (let i = 0; i < totalTime; i++) {
    ella.eat(foods[getAllFood()], i + 1);
  }
}

start(jacques);
jacques.showLogs();
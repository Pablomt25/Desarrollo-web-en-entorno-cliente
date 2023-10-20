class Cat{
    constructor(name){
        this.name = name;
        this.tiredness = 0;
        this.hunger = 0;
        this.lonliness = 0;
        this.happiness = 0;
    }  

}

  
  Cat.prototype.feed = function(amount) {
    this.hunger -= amount;
    this.happiness += amount;
  };
  
  Cat.prototype.sleep = function(hours) {
    this.tiredness -= hours;
    this.happiness += hours;
  };
  
  Cat.prototype.pet = function(minutes) {
    this.loneliness -= minutes;
    this.happiness += minutes;
  };
  
  Cat.prototype.printStatus = function() {
    console.log(
        `${this.name} is ${this.hunger > 5 ? 'really hungry' : 'full'}, ` +
        `${this.tiredness > 5 ? 'tired' : 'rested'}, ` +
        `${this.loneliness > 5 ? 'lonely' : 'happy'}, ` +
        `and ${this.happiness > 5 ? 'VERY happy' : 'content'}.`
    );
};


const myCat = new Cat("Whiskers");

myCat.feed(2);
myCat.sleep(8);
myCat.pet(0);

myCat.printStatus();

//this = reference to the object twhere THIS is used
//        (the object depends on the Immediate context)
//        person.name = this.name

// this cannot be used with a arrow function

const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
  name: "Patrick",
  favFood: "pizza",
  sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

 person1.eat();
 person2.eat();
const obj={
    name: "Vipin",
    age:22,
    greet: function(){
        console.log("Hello");
    }
};

// console.log(obj.age);
// console.log(obj.name);
// obj.greet();
// console.log(obj.hasOwnProperty("name"));
// obj.toString();
// console.log(obj);
// console.log(typeof obj);


// const arr= [10,20,40,50];
// console.log(arr.length);
// console.log(arr.sort());


// const obj2 = {
//     account: 30
// }
// console.log(obj2.account);
// console.log(obj2.name);

// obj2.__proto__ = obj;
// console.log(obj2.name);


// Now I am going to learn about the classes in js 

// class Person{
//     constructor(name,role,profession){
//         this.name=name;
//         this.role=role;
//         this.profession=profession;
//     }

//     sayHi(){
//         console.log(`Hello my name is ${this.name} and role is ${this.role} and I am working here as a ${this.profession}`)
//     }

// }

// const person1 = new Person("Vipin Verma","Tech and Marketing Lead", "Software engineer and digital expert");
// const person2 = new Person ("Akaash","Team Lead","Serial Entrepreneur");
// person1.sayHi();
// person2.sayHi();




// Banking APllication User  
//  class Customer extends Person{
//     constructor(name,age,account,balance){
//         super(name);
//         this.age=age;
//         this.account=account;
//         this.balance=balance;
//     }

//     checkBalance(){
//         return this.balance;
//     }

//  }

//  const c1= new Customer("Vipin",20,125,2458);
//  console.log(c1);
 
// console.log(c1.checkBalance());

// console.log(c1.sayHi());


class Car{
    constructor(name,brand,color){
        this.name=name;
        this.brand=brand;
        this.color=color;
    }

    sayBuyCar(){
        return (`The name of Luxiorous Car is ${this.name} and brand is ${this.brand} and lovely color is ${this.color}`);
    }
}

const car1= new Car("XUV","Mahindra","Magenta");
console.log(car1);
console.log(car1.sayBuyCar());

class User extends Car{
    constructor(username,name,color,brand){
        super(name,color,brand);
       
        this.username=username;
    }
    sayHi(){
        return (`the user name is ${this.username} `)
    }
}

const user1 = new User("Vipin","Kia","Blue","Mahindra");
console.log(user1);
'use strict'
const fs = require('fs');
let obj = {

    name: 'Alex',
    getName(){
	console.log('test')
    }
}



let foo = {
    name:'Elena',
    __proto__: obj,
    getName(){
	super.getName()
    }
}


class ParentA {

    constructor(){
	this.n = 'a'
    }
    foo(){
	console.log('ParentA', this.n)
    }
    
}

class ChildA extends ParentA{
    foo(){
	super.foo();
	console.log('ChildA',this.n)
    }
}

class ParentB{
    constructor(){
	this.n = 'b'
    }
    
    foo(){
	console.log('ParentB',this.n)
    }
}

class ChildB extends ParentB{
    foo(){
	super.foo()
	console.log('ChildB',this.n)
    }
    }
let a;

function User() {
a()
}

//let u = new User('alex','kul');



setTimeout(() => {
 User()
})
//User()
a = () => 0

let arr = [5,6,7];
let o = { item: 9 };
({item: arr[3]} = o);
console.log(arr);

function incNumber(delta = 0){
    return (ctx, val) => {
	return Number.call(ctx, val + delta)
}
}
console.log(
Array.apply(null,{length :5}).map(Number.call, Number).map(a => a + 1))
console.log(new Array(10).fill().map(incNumber(2)))

let obj1 = Object.call(null,{
name: 'Alex',

});
console.log(obj1)
console.log(Reflect.ownKeys(obj1))
console.log(Object.keys(obj1))
console.log(obj1.hasOwnProperty('name'))

function newObj(constructor,...params){
    let obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, params) || obj
}

function Car(name){
this.name=name
}

Car.prototype.getName = function() {
return this.name
}

let car = newObj(Car,'audi')
console.log(car)

function SmallCar(name, speed){
 Car.call(this, name )
 this.speed = speed
}

Object.setPrototypeOf(SmallCar.prototype ,Car.prototype)


SmallCar.prototype.getSpeed = function() {
 return this.speed
}

SmallCar.prototype.getInfo = function () {
    return Car.prototype.getName.call(this) + ' ' + this.getSpeed()
}


let smCar = newObj(SmallCar, 'audi',120);
console.log(smCar.getInfo() )
let person = {
    a: 1
};

let person1 = person
console.log(person === person1);
person = null
console.log(person === person1);
console.log(person1)
let animal = {
    eat(){
	console.log('I am animal!')
    }
}

let rabbit = {
    __proto__: animal,
    eat(){
	super.eat()
    }
}

let otherAnimal = {
    __proto__: rabbit,
    eat(){
	super.eat()
    }
}

otherAnimal.eat()

function f1(tag){
    let trimTag = tag.trim()
    let existsScopes = []
    for( let i = 0; i < trimTag.length; i++) {
	let sym = trimTag[i]
	if(i === 0) {
	    existsScopes.push([])
	}
	if( sym === '<' || sym === '>') {
	    let currentIndex = existsScope.length - 1
	    let currentScopes = existsScope[ currentIndex ]
	    let currentIndexChild = currentScopes.length - 1
	    if( currentIndexChild === -1 ) {
	)?????
	    } else if( currentIndexChild === 0 ){
		let currentScopesChild = currentScopes[currentIndexChild]
		currentScopesChild.push(sym)
	    }
	}
    }
}
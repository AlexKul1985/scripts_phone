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

//let a = new ChildA;
//let b = new ChildB;
//b.foo.call(a)
let a = 5;
let b = 6;

let z = 4;


function foo1(val){
    return val*2;
}
function bar(x=a + 1, y = foo1(x), v = z +1){
    console.log(x,y,v)
}
let a1 = [2,3,3,3,3,3,4,5,6,6,7,8,7,77,10,9,9,9,12,12,55,55,11,11,11,11,15,15,15];

function countRepeat(){
    let res = {};
    let mid = new Map()
    for(let i = 0; i < a1.length; i++){
	if(mid.has(a1[i])){
	    if(a1[i] in res){
		res[a1[i]]++;
	    }
	    else {
		res[a1[i]] = 2;
	    }
	}
	else{
	    mid.set(a1[i],0)
	}
    }
    return res;
}

function countRepeatSerial(){

    let res = {};
    let one = {};
    
    
    for(let i = 0; i < a1.length; i++
    ){
	if(a1[i + 1] == a1[i]){
	    if(a1[i] in res){
		if(a1[i] in one)
		    delete res[a1[i]];
		else
		    res[a1[i]]++;
		
	    }
	    else {
		if(!(a1[i] in one))
		    res[a1[i]] = 1;
	    }
	}
	else {
	    if(a1[i] in res &&  a1[i - 1] == a1[i]){
		
		     res[a1[i]]++;
	    }
	    else {
		if(a1[i] in one){
		    one[a1[i]]++;
		    
		}
		else {
		    if(a1[i] in res)
			delete res[a1[i]]
		    one[a1[i]] = 1;
		}
	    }
	}
    }
    
    
    return res;
}

//console.log(countRepeatSerial())


const stream = fs.createReadStream(__filename,{highWaterMark: 8
});

const streamW = fs.createWriteStream('1.js',{
highWaterMark: 8
});

let count = 0;
let body = "";

stream.on('data',(c) => {
    count++;
    if(count == 1){
	stream.pause();

    setTimeout(()=>{
	stream.resume();
	console.log('resume');
    },2000)
    }
    body += c;
    
    console.log(c)
})

stream.on('end',() => {

console.log(body.toString('utf8'))
})

stream.pipe(streamW)


    
    
	
	
let user = {
    name:'Alex',
    age:34,
    password:'ffgh'
    }
//console.log(user)
const noPassword = ({password,...rest}) => rest
//console.log(noPassword(user))
//console.log(user)

function test([{a}]){
console.log(a)


}


let o = {
    name: 'Alex',
    age:34,
    students:[
    {
    a:'a'
    },
    {
    a:'b'
    }
    ]
}

let o2 = {
    
}
//o2.students = [...o.students]
//o2.students[0] = { ...o.students[0] }
//o2.students[1].a ='j'



function deepCloneObject(o){
    let newO = Array.isArray(o) ? [] : {}
    
    Object.keys(o).forEach((v) => {
	    newO[v] = typeof o[v] == 'object' ?
	     deepCloneObject(o[v]) : o[v]
    })
    return newO;
}

//console.log(o)
let o3 = deepCloneObject(o)
o3.students[0].a = 'j'
o.students[1].a = 'x'
o.name ='Elena'
//console.log(o)
//console.log(o3)
let g = ['H','e','l','l','o'];
let str = '';
 function concat(g,a = g.length){
    return a == 1 ? g[g.length-1] : g[g.length - a] + concat(g,a - 1)
 }

//2^5=2*2^5-1
//str = g[lenG -a] + f(g-1)


function pow(x,n){
    if(n == 0) return 1;
    return x*pow(x, n-1)
}

console.log(concat(['w','o','r','l','d']))


//
function convArr(s,arr=[],a=0){
    arr.push(s[a])
 return a == s.length - 1 ? arr : convArr(s,arr,a+1)

}

console.log(convArr('hello'))


function foo(a){
    
}

console.log(' * *')
console.log('*   *')
console.log(' * * ')
let st = /reg/


st[Symbol.match] = false

//console.log("/reg/".startsWith(st))

function quiqSort(arr){
    if(arr.length < 2) return arr;
    let pivot = arr[0];
    let low = [];
    let high = [];
    for(let i = 1; i < arr.length; i++){
	if(arr[i] >= pivot){
	    high.push(arr[i])
	}
	else {
	    low.push(arr[i])
	}
    }
    return [...quiqSort(low),pivot,...quiqSort(high)]
}

console.log(quiqSort([7,2,5,6,1,1,3,0,12,8,7,4]))

let k = {
    toString(){
	return 'test'
    }
}



console.log(k+'!')
let o1 = {
    person:{
	age:34,
	name:'Alex'
    }
}
let  tt = (o,f,i=0) => i == f.length ? 
    o :
    tt(o[f[i]],f,i+1)

console.log(tt(o1,['person','name']))


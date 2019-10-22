const stream = require('stream');
const fs = require('fs');
const os = require('os');
let countChunks = 0;

const sr = fs.createReadStream('1.txt',{
    highWaterMark: 20
})

class MyStream extends stream.Transform {
    
    constructor({sr}){
	super(); 
	this.EOL = os.EOL;
	this.num = 0;
	this.str = '';
	this.resolve = null;
	this.flagInitPromise = false
	sr.on('end',() => {
	console.log('end')
	    this.resolve()
	})
	
    }
    
    _initPromise(callback){
	(new Promise((resolve) => {
	    this.resolve = resolve
	}))
	.then(callback)
    }

    _transform(chunk, encoding, callback){
        let res = '';
	this.str += chunk.toString('utf8')
	
	if(!this.flagInitPromise){
	console.log(this.str)
	    this.flagInitPromise = true
	    this._initPromise(() => {
	    for(let d of this._gen(this.str)){
		res += (++this.num) +') '+d;
	    }
	
	    callback(null,res)
	    })
	}
    }
    
    *_gen(str){
	let start = 0;
	let end = null;
	
	while((end = str.indexOf(this.EOL,start)) !== -1){
		
	    let count = this._getCountEOL(str, end);
		
	    yield str.slice(start,end + count);
		
	    start = end + count;
	}
	    
		
	    //yield str.slice(start)
		
	
	
    }
    _getCountEOL(str,numEnd){
    
	let count = 1;
	
	while(true){
	    let ind = str.indexOf(this.EOL,numEnd + count)
	    if(ind !== numEnd + count)
		break
	    count++;
	    
	}
	return count;
	
    }
    
    _trimLeftEOL(){
	 
    }
    static getInstance(sr){
	if(!MyStream.instance){
	    MyStream.instance = new MyStream({sr})
	}
	return MyStream.instance
    }
}

MyStream.instance = null;

const sw = fs.createWriteStream('1.out.txt', {
    
    highWaterMark:20
    
});


sw.on('close',() => {
    console.log('count chunks: ', countChunks)
})
sr.on('data', (chunk) => {
    //countChunks++
})
sr.pipe(MyStream.getInstance(sr)).pipe(sw);
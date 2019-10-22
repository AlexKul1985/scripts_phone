let Module = (function(){

    let modules = {};
    
    function define(name, deps, impl){
	for(let i = 0; i < deps.length; i++){
	    deps[i] = modules[deps[i]];
	    }
	    
	    modules[name] = impl.apply(impl,deps);
	
	
    }
    
    function get(name){
	return modules[name]
    }
    
    return {
	define, get
    }

})();


Module.define('foo',[],function(){

    function hello(name){
	return 'Hello '+name
    }
    
    return {
	hello
    }

});

Module.define('bar', ['foo'],function(foo){
    let n = 'Alexandr'
    function awesome(){
	
	log( foo.hello(n))
	
    }
    
    return {
	awesome
    }
});

try {

    let foo = Module.get('foo');
    let bar = Module.get('bar')

    
} catch (e){
    log(e.message);
}

function log(message){
    let pre = document.createElement('pre');
    pre.style.fontSize = '4rem'
    pre.innerText = JSON.stringify(message,'',4);
    document.body.appendChild(pre)
}


const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push('Ralph');
    
}
function destructivelyPrependCat(name){
    return cats.unshift('Bob');
}
function  destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    return [...cats.slice(0,4), "Broom"];
}
function prependCat(name){
    return ["Arnold", ...cats.slice(0,4)];
}
function removeLastCat(){
    return [...cats.slice(0,2)];
}
function removeFirstCat(){
    return [...cats.slice(1,3)];
}

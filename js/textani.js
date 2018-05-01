/* Make a div with id "str"*/ 
var string = "Stockholm Based Developer";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 70);
})();
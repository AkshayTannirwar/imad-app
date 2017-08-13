//counter code
var button = document.getElementById('counter');

var counter = 0;
button.onclick = function()
{
    //Make a request to counter the endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTMl = counter.toString();
}
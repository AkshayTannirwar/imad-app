//counter code
var button = document.getElementById('counter');

button.onclick = function()
{
    //Create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function()
    {
        if(request.readystate === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter = request.reponseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request
    request.open('GET','http://tannirwarakshay.imad.hasura-app.io/counter',true);
    request.send(null);
};
//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
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

//Submit Name


var inputName = document.getElementById('name');
var name = inputName.value;
var submit = document.getElementById('submit-btn');
submit.onclick = function() {
    
    //Make a request to server and send the name
    //capture a list of naame and render it as a list
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i=0; i < names.length; i++){
        list += '<li>' + names[i] + '<li>';
    }
    
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
    
};
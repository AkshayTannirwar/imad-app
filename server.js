var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool=require('Pg').Pool;

var config={
  user:'tannirwarakshay',
  database:'tannirwarakshay',
  host:'db.imad.hasura-app.io',
  port:'5432',
  password:'process.env.DB_password'
  
};

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one':{
  title: 'Article One | Akshay Tannirwar',
  heading: 'Article One',
  date:'August 10,2017',
  content:`<p>
                    This is the content of my first webapp.Article one is the web app to learn and explore things.This article will help me to built my first web app.I trying to learn nodejs from Tanmai Gopal from Hasura coaching.
                </p>
                <p>
                     This is the content of my first webapp.Article one is the web app to learn and explore things.This article will help me to built my first web app.I trying to learn nodejs from Tanmai Gopal from Hasura coaching.f
                </p>
                 <p>
                     This is the content of my first webapp.Article one is the web app to learn and explore things.This article will help me to built my first web app.I trying to learn nodejs from Tanmai Gopal from Hasura coaching.f
                </p>`
                },
    'articletwo':{
    
  title: 'Article Two | Akshay Tannirwar',
  heading: 'Article Two',
  date:'August 10,2017',
  content:`<p>
                    This is the content of my second webapp.Article one is the web app to learn and explore things.This article will help me to built my first web app.I trying to learn nodejs from Tanmai Gopal from Hasura coaching.
                </p>`
                },
    'articlethree':{
        
        
  title: 'Article Three | Akshay Tannirwar',
  heading: 'Article Three',
  date:'August 10,2017',
  content:` <p>
                This is the content of my Three webapp.Article one is the web app to learn and explore things.This article will help me to built my first web app.I trying to learn nodejs from Tanmai Gopal from Hasura coaching.
            </p>`
    }
                
};

function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
     
    var htmlcontent =`
    <html>
        <head>
            <title>
              ${title}
            </title>
            <beta name=viewport content = "width=device-width, initial-scale=1"></beta>
            <link href="/ui/style.css" rel="stylesheet" />
               
        </head>
        
        <body>
            <div class="container">
                <div >
                    <a href="/">Home</a>
                </div>
                <hr/>
                    <h3>
                       ${heading}
                    </h3>
                <div>
                   ${date}
                </div>
                
                <div>
                  ${content}
                </div>
           </div>
        </body>
        
        
        
    </html>
    `;
    return htmlcontent;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res)
{
   counter = counter+1;
   res.send(counter.toString());
});

app.get('/articleName',function(req,res)
{
    var articleName = req.param.articleName;
    res.sendFile(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var pool = new Pool(config);
app.get('/test-db',function(req,res){
   //Make a select request
   // return a response with the results
   
   pool.query("SELECT * FROM test",function(err,result){
       if(err)
       {
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(JSON.stringify(result));
       }
   });
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

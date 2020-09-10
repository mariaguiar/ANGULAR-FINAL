
let cors = require ('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let mysql = require("mysql");
const { Console } = require('console');
let connection = mysql.createConnection({
    host: "localhost",
    database: "angular",
    user: "root",
    password: null
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('conexion correcta')
    }
        
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//ENDPOINTS

app.post("/discos", function(request, response)
{ 
    console.log(request.body);
    let sql = 'INSERT INTO discos (titulo, interprete, anyoPublicacion)'+

      "VALUES ('" + request.body.titulo + "', '" +
                    request.body.interprete + "', '" +
                    request.body.anyoPublicacion + "')";
      
    console.log(sql);

    connection.query(sql, function(error, results)
   {        
        if(error)
        {
            console.log(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})


app.get("/discos",  function (request, response)
{
    let sql;
    if(request.query.id) 
      {sql = 'SELECT * FROM discos WHERE id=' + request.query.id;} 
    else
      {sql = 'SELECT * FROM discos'}
    
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            console.log(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

});


app.delete("/discos",  function (request, response)
{
    let sql;
    sql = 'DELETE FROM discos WHERE id=' + request.query.id;
        
   connection.query(sql, function(error, results)
   {
        
        if(error)
        {
            console.log(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

});



app.put("/discos", function(request, response)
{ 
    console.log(request.body);
    let sql = 'UPDATE discos SET titulo =?, interprete=?, anyoPublicacion=? WHERE  id = ?'
    let values= [request.body.titulo, request.body.interprete, request.body.anyoPublicacion, request.body.id]

            
    console.log(sql);

    connection.query(sql, values,  function(error, results)
   {        
        if(error)
        {
            console.log(error);
        }
        else
        {
            response.send(results);
        }
    }
   );

})

app.listen(5000);
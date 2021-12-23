var express = require('express');
const company = express();
company.set('view engine','ejs');

var fs=require('fs');

var mysql = require("mysql");

// var connection = (require("./Database/connection"));

//API Routes
// import Employee from "./API/employee";

// company.use("/employee", Employee)
const connection = mysql.createConnection({
  host: "117.236.190.213",
  user: "employee_115",
  password: "employee_115",
  database: "employee_115"
});


connection.connect((err) => {
  if(err) throw err;
  console.log('Connected to MySQL Server!');

    //Select all from employee
    company.get('/employee', function(request, response){
      var result;
      fs.readFile('employee.ejs', 'utf8', function(error, data){
  
        connection.query('SELECT * FROM employee', (error, result) => {

            response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/employee', { data: result });
            console.log("Query results(inside): " + JSON.stringify(result));
          });
          console.log("Query results(outside): " + JSON.stringify(result));
      });
  });
  //select all from department
  company.get('/department', function(request, response){
    var result;
    fs.readFile('department.ejs', 'utf8', function(error, data){

      connection.query('SELECT * FROM department', (error, result) => {

          response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/department', { data: result })
          console.log("Query results(inside): " + JSON.stringify(result));
        });
        console.log("Query results(outside): " + JSON.stringify(result));
    });
});
//select all from dlocation
company.get('/dlocation', function(request, response){
  var result;
  fs.readFile('dlocation.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM dlocation', (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views'+ '/dlocation', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});

});
//select all from projects
company.get('/project', function(request, response){
  var result;
  fs.readFile('project.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM project', (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/project', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//select all from works_on
company.get('/works_on', function(request, response){
  var result;
  fs.readFile('works_on.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM works_on', (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/works_on', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//select all from dependent
company.get('/dependent', function(request, response){
  var result;
  fs.readFile('dependent.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM dependent', (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views/' + '/dependent', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
// Query1
company.get('/query1', function(request, response){
  var result;
  fs.readFile('query1.ejs', 'utf8', function(error, data){

    connection.query('SELECT lname FROM employee', (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query1', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//submit set for query1 
company.get('/query1submit', function(request, response){
  var result;
  var lname = request.query.lname;
  console.log(lname);
  fs.readFile('query1submit.ejs', 'utf8', function(error, data){
    var x = "call query1(?)";
    connection.query(x,lname,(error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query1submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//Query2
company.get('/query2', function(request, response){
  var result;
  fs.readFile('query2.ejs', 'utf8', function(error, data){

    connection.query('SELECT pname FROM project', (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query2', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//submit set for query2
company.get('/query2submit', function(request, response){
  var result;
  var pname = request.query.pname;
  console.log(pname);
  fs.readFile('query2submit.ejs', 'utf8', function(error, data){
    var x = "call query2(?)";
    connection.query(x,pname, (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query2submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//Query3
company.get('/query3', function(request, response){
  var result;
  fs.readFile('query3.ejs', 'utf8', function(error, data){

    connection.query('SELECT dname FROM department', (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query3', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//query3 set for submit
company.get('/query3submit', function(request, response){
  var result;
  var dname = request.query.dname;
  console.log(dname);
  fs.readFile('query3submit.ejs', 'utf8', function(error, data){
    var x = "call query3(?)";
    connection.query(x, dname, (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query3submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//Query4
company.get('/query4', function(request, response){
  var result;
  fs.readFile('query4.ejs', 'utf8', function(error, data){

    connection.query('SELECT dno FROM department', (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query4', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//submit set for query4 
company.get('/query4submit', function(request, response){
  var result;
  var dno = request.query.dno;
  console.log(dno);
  fs.readFile('query4submit.ejs', 'utf8', function(error, data){
    var x = "call query4(?)";
    connection.query(x, dno, (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query4submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//Query5
company.get('/query5', function(request, response){
 response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query5')
});
//submit set for query45
company.get('/query5submit', function(request, response){
  var result;
  var range = request.query.range;
  console.log(range);
  fs.readFile('query5submit.ejs', 'utf8', function(error, data){
    var x = "call query5(?)";
    connection.query(x, range, (error, result) => {

        response.render('C:/Users/achar/Desktop/DSMProject/server/Views' + '/query5submit', { data: result[0] })
        console.log("Query results(inside): " + JSON.stringify(result[0]));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});


company.get("/", (req, res) => res.render('home')
);

company.listen(3000, () => {
    console.log('Server is running at port 3000');
});
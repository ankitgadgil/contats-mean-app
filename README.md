# contats-mean-app 
MEAM branch
Database => mongodb

App that lets you add, modify and remove contacts. Serves best for a MEAN demo.

Technologies used:
MEAN stack - MongoDB, Express.js, Angular.js and Node.js

Bower for component management.

1. git clone the repo
2. inside the repo: npm install
3. if needed, npm install bower

4. Install MongoDB : http://docs.mongodb.org/manual/installation/
MongoDB setup for MEAN app. Run the following comands in the mongo shell.
> use superheros   //selecting the db we want

> db.superheros.insert([{"name" : "Ironman","email" : "ironman@avengers.org","number" : "(A1) 111-1111"}, {"name" : "Hulk","email" : "hulk@avengers.org","number" : "(A2) 222-2222"},{"name" : "Wolvarine","email" : "wolvarine@xmen.org","number" : "(X1) 111-1111"}])  //inserting the data

> db.superheros.find().pretty()  //checking the inserted data 

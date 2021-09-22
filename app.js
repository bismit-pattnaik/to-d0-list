const { request } = require("express");
const express= require("express");
const date = require(__dirname + "/date.js");

const app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));


app.set('view engine', 'ejs');

var items=["cricket", "football", "tennis"];
var workItems =[];

app.get("/", function(req,res){
    
    var day = date();
    console.log(day);

    res.render("lists", { listTitle : day , newAddedItem :items });

});

app.post("/", function(req,res){
        console.log(req.body);

    var item = req.body.newItem;

    if(req.body.lists === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
    
        res.redirect("/");
    }

});



app.get("/work", function(req,res){
  res.render("lists", { listTitle : "Work List" , newAddedItem : workItems });
});







app.listen(3000,function(){
    console.log("port running at 3000");
});
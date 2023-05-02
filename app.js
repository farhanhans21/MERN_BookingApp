// buat import exspress
const express = require('express');
// buat object
const app = express();
// buat routing
app.get("/",(req,res) => {
res.send("hello foek");

});

// definisikan port
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000 ")
});
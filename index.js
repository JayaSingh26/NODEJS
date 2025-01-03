// const a =  {
//     average:(a,b)=>{
//         console.log((a+b)/2);
        
//     },
//     percent : (a,b) =>{
//         console.log((a/b*100));
        
//     },
// };

// module.exports = a;



// const { log } = require("console");
// const fs = require("fs") 
// //console.log(fs);// fs stands for filesystem and it is inbuilt

// fs.readFile("./sample.txt","utf-8", (err,data)=>{
//     if(err){
//         return err;
//     }
//     console.log(data);
    
// })

// console.log("Hi Cuties");
// it will be printed first because the above fucntion in asynchronous function that doesnot want other execution to be interuppted



//Method to convert the asynchronous function to synchronous function

//const fs = require("fs") // earlier used method
// const{readFileSync} = require("fs")

// const a = readFileSync("./sample.txt", "utf-8")

// console.log(a);


// console.log("I am the best");
  

//method of making file  (In synchronous call back function is not used)

// const fs = require("fs")

// const a = " This is a string"

// fs.writeFile("./sample1.txt",a,()=>{
//     console.log("written");
    
// })


// console.log("I am first");


// const os = require("os")


// console.log(os.freemem());


// console.log(os.hostname());



//Third Party module 
// const pokemon = require("pokemon")

// console.log(pokemon.all());


// //Live Server
const http = require("http");
const fs = require("fs");
const { homedir } = require("os");
const hostname = "localhost"

const port = 2009;
const home = fs.readFileSync("./sample.txt")

const server = http.createServer((req, res) => {

    if (req.url==="/") {
        res.end(home)
        
    }
    
    

    if(req.url==="/about")
    {
        res.end("<h1>About page</h1>"); // Sending response
    }
    if(req.url==="/contact")
        {
            res.end("<h1>Contact  page</h1>"); // Sending response
        }
    if(req.url==="/service")
            {
                res.end("<h1>Service page</h1>"); // Sending response
            }
    
    else{
        res.end("<h1>404 Page Not Found</h1>")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is working on http://${hostname}:${port}`);
});

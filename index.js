// import express from "express"
// import bodyParser from "body-parser"

// const port=3002;
// const app=express();
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",(req,res)=>{
//     res.render("home.ejs");
// });

// app.get("/list",(req,res)=>{
//     res.render("list.ejs");
// });

// app.get("/slinkedlist",(req,res)=>{
//     res.render("partials/linked_list_webpage/sdes.ejs");
// });

// app.get("/dlinkedlist",(req,res)=>{
//     res.render("partials/linked_list_webpage/ddes.ejs");
// });

// app.get("/clinkedlist",(req,res)=>{
//     res.render("partials/linked_list_webpage/cdes.ejs");
// });

// app.get("/linkedlist",(req,res)=>{
//     res.render("partials/linked_list_webpage/index.ejs");
// });

// app.get("/matrix",(req,res)=>{
//     res.render("partials/matrix/index.ejs");
// });

// app.get("/desmatrix",(req,res)=>{
//     res.render("partials/matrix/des.ejs");
// });

// app.get("/binarytree",(req,res)=>{
//     res.render("partials/binarytree/index.ejs");
// });

// app.get("/desbinarytree",(req,res)=>{
//     res.render("partials/binarytree/des.ejs");
// });

// app.get("/AVL",(req,res)=>{
//     res.render("partials/AVL/index.ejs");
// });

// app.get("/desAVL",(req,res)=>{
//     res.render("partials/AVL/des.ejs");
// });

// app.get("/graph",(req,res)=>{
//     res.render("partials/graph/index.ejs");
// });

// app.get("/desgraph",(req,res)=>{
//     res.render("partials/graph/des.ejs");
// });

// app.get("/queue",(req,res)=>{
//     res.render("partials/queue/index.ejs");
// });

// app.get("/desqueue",(req,res)=>{
//     res.render("partials/queue/des.ejs");
// });

// app.get("/stack",(req,res)=>{
//     res.render("partials/stack/index.ejs");
// });

// app.get("/desstack",(req,res)=>{
//     res.render("partials/stack/des.ejs");
// });

// app.listen(port,()=>{
//     console.log(`Server is running on port ${port} `);
// })

import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";

const app = express();

// Use helmet middleware to set security headers, including CSP
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["'self'", "https://vercel.live"], // Allow your domain and Vercel's domain
        scriptSrc: ["'self'", "https://vercel.live"],  // Allow scripts from self and Vercel
        styleSrc: ["'self'", "'unsafe-inline'"],       // Allow inline styles (if needed)
        // You can add more CSP directives as needed (e.g., imgSrc, fontSrc, etc.)
      },
    },
    crossOriginEmbedderPolicy: false,  // Disable cross-origin restrictions (if required)
  })
);

// Serve static files from the "public" directory
app.use(express.static("public"));

// Body parser middleware for form data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/list", (req, res) => {
    res.render("list.ejs");
});

app.get("/slinkedlist", (req, res) => {
    res.render("partials/linked_list_webpage/sdes.ejs");
});

app.get("/dlinkedlist", (req, res) => {
    res.render("partials/linked_list_webpage/ddes.ejs");
});

app.get("/clinkedlist", (req, res) => {
    res.render("partials/linked_list_webpage/cdes.ejs");
});

app.get("/linkedlist", (req, res) => {
    res.render("partials/linked_list_webpage/index.ejs");
});

app.get("/matrix", (req, res) => {
    res.render("partials/matrix/index.ejs");
});

app.get("/desmatrix", (req, res) => {
    res.render("partials/matrix/des.ejs");
});

app.get("/binarytree", (req, res) => {
    res.render("partials/binarytree/index.ejs");
});

app.get("/desbinarytree", (req, res) => {
    res.render("partials/binarytree/des.ejs");
});

app.get("/AVL", (req, res) => {
    res.render("partials/AVL/index.ejs");
});

app.get("/desAVL", (req, res) => {
    res.render("partials/AVL/des.ejs");
});

app.get("/graph", (req, res) => {
    res.render("partials/graph/index.ejs");
});

app.get("/desgraph", (req, res) => {
    res.render("partials/graph/des.ejs");
});

app.get("/queue", (req, res) => {
    res.render("partials/queue/index.ejs");
});

app.get("/desqueue", (req, res) => {
    res.render("partials/queue/des.ejs");
});

app.get("/stack", (req, res) => {
    res.render("partials/stack/index.ejs");
});

app.get("/desstack", (req, res) => {
    res.render("partials/stack/des.ejs");
});

// Export the app for serverless deployment (Vercel)
export default app;

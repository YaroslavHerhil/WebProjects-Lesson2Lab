const e = require("express")

const path = require("path")

const app = e();
const port = 3000;

app.use(e.urlencoded({extended:true}));

app.use(e.static("public"));

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.post("/submit-form", (req, res) =>{
    console.log(req.body);
    res.send("Received: " + JSON.stringify(req.body));
})

app.listen(port, () => {
    console.log("Server's up: http://localhost:" + port);
})
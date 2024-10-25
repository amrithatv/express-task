import express from "express";
import dotenv from "dotenv"
import router from "./routers/route.js";
import { middleware } from "./middlewares/test.mw.js"
import connect from "./connection.js";

dotenv.config();


const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.static("./static"));
app.use(middleware);
app.use("/api", router);

// app.get("/product/:fruits", (req, res) => {
//     res.send(Details of ${req.params.fruits});
// });

// app.get("/api",(req, res) => {
//     console.log(req.query);
//     res.send("API VALUE");
// })

// app.post("/api",(req, res) => {
//     console.log(req.body);
//     res.send("ok - post");
// })
// app.put("/api",(req, res) => {
//     console.log(req.body);
//     res.send("ok - put");
// })

connect()
    .then(() => {
        app.listen(port, error => {
            if (error) {
                return console.log(error);
            }
            console.log(`Server started on port ${port}`);
        });
    })
    .catch(e => {
        console.log(e);
    })
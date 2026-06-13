// import express from "express"
// import cors from "cors"
// import { connecDB } from "./config/db.js"



// const app=express()
// const port=4000


// app.use(express.json())
// app.use(cors())

// app.use(express.json())
// app.use(cors())

// connecDB();

// app.get("/", (req, res) => {
//     res.send("API Working")
// })

// app.listen(port, () => {
//     console.log(`Server Started on http://localhost:${port}`)
// })
//mongodb+srv://srinjanasahana_db_user:<db_password>@cluster0.ofdqtxw.mongodb.net/?appName=Cluster0
import 'dotenv/config'
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/UserRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// database connection
connectDB();
app.use("/api/food",foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

// api
app.get("/", (req, res) => {
  res.send("API Working");
});

// server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
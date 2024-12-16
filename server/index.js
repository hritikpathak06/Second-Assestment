
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const checkoutRoutes = require("./routes/checkoutRoute")

const app = express();

connectDB();

app.use(cors({
    origin: "*"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", checkoutRoutes)


const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Server running on the prot: ${port}`);
})
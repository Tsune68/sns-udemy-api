const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const cors = require("cors");

require("dotenv").config();

const PORT = 8000;

app.use(cors());
app.use(express.json());

//authRouteのエンドポイントの先頭に"/api/auth"が付くようになる。
app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));

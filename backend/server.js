const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();


//routers

const signUpRouter = require("./routers/routes/signup");
const loginRouter = require("./routers/routes/login");
const incomeRouter = require("./routers/routes/Income");
const outcomeRouter = require("./routers/routes/Outcome");
const accountStatsRoute = require("./routers/routes/test");




//built-in middlewares
app.use(express.json());
app.use(cors());

//third-party middleware

//app routers

app.use(signUpRouter);
app.use(loginRouter);
app.use(incomeRouter);
app.use(outcomeRouter);
app.use(accountStatsRoute);




const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

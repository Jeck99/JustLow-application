require("dotenv").config();
const cors = require('cors');
const express = require('express');
const app = express();
const db = require('./DB');
const lawerRouter = require('./routes/lawer-router');
const orgRouter = require("./routes/organiztion-router");
const userRouter = require("./routes/user-router");
const caseRouter = require("./routes/case-router");
const firmRouter = require("./routes/firm-router");
const path = require('path');
const passport = require("passport");
const passportFunc = require("./config/passport");
const PORT = process.env.PORT || 8080;
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors())
db.on('error', () => { console.log("connection error") })
app.listen(PORT, () => {
    console.log(`mern server is live and up on port: ${PORT}`);
});


app.use(passport.initialize());
app.use('/movies', lawerRouter);
app.use('/orgs', orgRouter);
app.use('/users', userRouter);
app.use('/cases', caseRouter);
app.use('/firms', firmRouter);
//*****************************************************************/
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
//*******************************************************************/
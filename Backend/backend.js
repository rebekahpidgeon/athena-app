
const mongoose = require('mongoose');
const url = 'mongodb+srv://lizziebosson1:londonpanda@cluster0.1tyew8n.mongodb.net/?retryWrites=true&w=majority';
const express = require('express');
const cors = require('cors');
const employees = require("./Routes/employees");
const employers = require("./Routes/employers");
const tags = require("./Routes/tags");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/employee", employees);
app.use("/employer", employers);
app.use("/tag", tags);

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then( () =>{
        console.log('Connected to the database');
    })
    .catch( (err) => {
        console.error(`Error connecting: ${err}`);
    })



const mongoose = require('mongoose');
const url = 'mongodb+srv://lizziebosson1:londonpanda@cluster0.1tyew8n.mongodb.net/?retryWrites=true&w=majority';

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

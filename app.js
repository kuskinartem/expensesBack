const express = require('express');
const mongosee = require('mongoose');
const app = express();
const Schema = mongosee.Schema;

const taskSchema = new Schema ({
    text: String,
    cost: Number
});

const url = "mongodb+srv://ArtemKuskin:Kuskin_123@cluster0.bhfgpwy.mongodb.net/?retryWrites=true&w=majority"
mongosee.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const Task = mongosee.model("expenses", taskSchema);

app.get('/', (req, res) => {
    const task = new Task({
        text: "dsd",
        cost: 3432
    });
    task.save().then(result => {
        res.send(result)
    })
});

app.listen(5000, () => {
    console.log('Example app listening on port 5000')
});
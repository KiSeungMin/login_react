const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dbUser1:dbUser1@cluster0.hvnvj.mongodb.net/cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//mongodb+srv://dbUser1:<password>@cluster0.hvnvj.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get('/', (req, res) => res.send('Hello World! 안녕하세요!'))

app.listen(port, () => console.log ('Example app listening on port ${port}!'))
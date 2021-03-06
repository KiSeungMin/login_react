const express = require('express')
const app = express()
const port = 4000
const bodyParser=require('body-parser');
const {User}=require("./models/User");
const confing=require("./config/key");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application//json
app.use(bodyParser.json());

const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
mongoose.connect(confing.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//mongodb+srv://dbUser1:<password>@cluster0.hvnvj.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get('/', (req, res) => res.send('Hello World! 안녕하세요!!!'))

app.post('/register', (req, res) => {

    //회원 가입 할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.
    const user=new User(req.body)

    user.save((err, userInfo)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success:true
        })
    })
})

app.listen(port, () => console.log ('Example app listening on port ${port}!'))
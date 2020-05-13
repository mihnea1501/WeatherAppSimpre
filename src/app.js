const express = require('express');
const hbs=require("hbs");
const path=require("path");
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');
const app = express();


const weatherData=require('../utils/weatherData');

const port=process.env.port || 3000

const publicStaticDirPath = path.join(__dirname, '../public')

const viewsPath =path.join(__dirname,'../template/views');

const partialPath=path.join(__dirname,'../template/partials');

const nexmo = new Nexmo({
  apiKey: 'b2e0ce09',
  apiSecret: 'Te5J2RkT4ly3aTYB'
}, { debug: true });

app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);


app.use(express.static(publicStaticDirPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather and Climate information for every country in the world'
    })
})

app.get('/feedback', (req, res) =>{
    res.render('feedback',{
        info: "Feedback Page"
    })
});

app.post('/feedback', (req, res)=>{
    const number = req.body.number;
    const text = req.body.text;
    
    nexmo.message.sendSms(
        '40749541415', number, text, {type: 'unicode' },
        (err, responseData)=>{
            if(err){
                console.log(err);
            } else{
                console.dir(responseData);
            }
        }
    );
});



app.get('/weather',(req, res) =>{
    const address = req.query.address
    
    if(!address){
        return res.send({
            error: "You must enter address in search box"
        })
    }
    
    weatherData(address, (error, {temperature, description, cityName}= {})=>{
        if(error){
            return res.send({
                error
            })
        }
        console.log(temperature, description, cityName);
        res.send({
            temperature,
            description,
            cityName
        })
    })
})

app.get("*", (req, res)=>{
    res.render('404',{
        title: "page not found"
    })
})

app.listen(port, ()=>{
    console.log("Server is up and running on port: ", port);
})
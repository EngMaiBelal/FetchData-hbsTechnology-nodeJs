//////////////////////////////////

const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const puplicDirectory = path.join(__dirname,'../puplic')
app.use(express.static(puplicDirectory))

///////////////////////////

// Template engine ==> hbs (handel bars)


app.set('view engine','hbs');

////////////////////////////////////

// customize

const viewsPath = path.join(__dirname,'../tempates/views')

app.set('views',viewsPath)

const request = require('request')

const url='http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-12&sortBy=publishedAt&apiKey=26c326a841cf4a3081d33d19bb7d3a70'
   
request({url:url, json:true}, (error, response) =>{
   
    const dataFinal = response.body.articles
    // const dataFinal = response.body.articles.forEach(element => {
    //     return {
    //         urlToImage:element.urlToImage,
    //         title:element.title,
    //         description:element.description
    //     }
    // })
    // console.log(dataFinal)
    // console.log(dataFinal[0].urlToImage)

    app.get('',(req,res)=>(
    res.render('index',{dataFinal:dataFinal}
    // {
    //     urlToImage:response.body.articles[0].urlToImage,
    //     title:response.body.articles[0].title,
    //     description:response.body.articles[0].description
        
    // }

    )
))

})
    
    

//////////////////////
// No repeat partials ===> technology in nbs
// need require hbs

const hbs = require('hbs')
const partialsPath = path.join(__dirname, '../tempates/partials')
hbs.registerPartials(partialsPath)



//////////////////////
//404 not found in the last

// app.get('*',(req,res)=>{
//     res.render('404',{
//         title:'404 page',
//         massage:"Default error page"
//     })
// })


app.listen(port,()=>console.log('listening on server 5000'))
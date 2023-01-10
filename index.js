const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const userRoute = require('./router/user')
app.use('/user',userRoute)

const repoRoute = require('./router/repo')
app.use('/repo',repoRoute)

const languageRoute = require('./router/language')
app.use('/language',languageRoute)

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server started succesfully on port ${port}`)
})


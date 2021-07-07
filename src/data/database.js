require('dotenv').config()
const mongoose = require('mongoose')


const connect = async () => {
  try{
    await   mongoose.connect(process.env.DATABASE_URL_PROD,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('database conectada')

  }catch (err){
      console.log(err.message)
  }
}
module.exports = { connect }
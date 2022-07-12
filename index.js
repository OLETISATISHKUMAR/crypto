const app = require("express")()



const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`App is listining to the port ${PORT}`)
})
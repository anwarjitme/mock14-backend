const express=require("express")
const {connection}=require("./config/db")
const {  quizRoute}=require("./routes/quizRoute")
const { userRoute } = require("./routes/userROute")
const app=express()

app.get("/",(req,res)=>{
     res.send("checked ok")  
})
app.use(express.json());
app.use("/",quizRoute)
app.use("/",userRoute)



app.listen(8080,async()=>{
   try{
await connection
console.log("connected with Database")
    }catch(err){
console.log(err)
    }
    
}
)
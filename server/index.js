const express=require("express")

const app =express()

const PORT=7000



app.get("/",(req,res)=>{
    return res.send('IM from server please try to balance my load ')
})



app.listen(PORT,()=>{
    
    console.log("SERVER RUNNING ON PORT",PORT);
   
})

const express = require("express");
const { QuizModel } = require("../model/quizModel");


const quizRoute = express.Router();
quizRoute.post("/quizs",async(req,res)=>{
const quizData=req.body
  try{
const newQuiz= new QuizModel(quizData)
await newQuiz.save()
res.status(200).json({"msg":"quiz data added succesffuly"})
  }catch(err){
res.status(400).json({"msg":'something error on adding data'})
  }
})

quizRoute.get("/quizs",async(req,res)=>{
try{
const data= await QuizModel.find()
res.status(201).json(data)
}catch(err){
res.status(400).json({"msg":"somthing wronge in server"})
}


})





module.exports={
          quizRoute
}
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  answerOptions: [String],
  correctOptions: [Number],
});

const leaderboardSchema = new mongoose.Schema({
  email: String,
  score: Number,
});

const quizSchema = new mongoose.Schema({
  creator: String,
  title: String,
  description: String,
  questions: [questionSchema],
});

const quizsSchema = new mongoose.Schema({
  quiz: quizSchema,
  leaderboard: [leaderboardSchema],
});


const QuizModel = mongoose.model(
  "quiz",
  quizsSchema
);

module.exports = {
  QuizModel
};

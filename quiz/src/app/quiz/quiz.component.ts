import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit{
  questionElement:any;
  answerButton:any;
  nextButton:any;
  currentQuestionIndex=0;
  score=0;
  questions: any[] = [];
  

 ngOnInit():void{
    this.startQuiz();
  }

constructor(){
}

    startQuiz(){
      this.questions = [
        {
        question:"Which is largest animal in the world",
        answers:[
          {text:"Shark", correct:"false"},
          {text:"Blue whale", correct:"true"},
          {text:"Elephant", correct:"false"},
          {text:"Giraffe", correct:"false"},
        ]
      },
      {
        question:"Which is smallest country in the world",
        answers:[
          {text:"Vatican City", correct:"true"},
          {text:"Bhutan city", correct:"false"},
          {text:"Nepal", correct:"false"},
          {text:"Shri Lanka", correct:"false"},
        ]
      },
      {
        question:"Which is largest desert in the world",
        answers:[
          {text:"Kalahari", correct:"false"},
          {text:"Gobi", correct:"true"},
          {text:"Sahara", correct:"false"},
          {text:"Antarctica", correct:"true"},
        ]
      },
      {
        question:"Which is smallest continent in the world?",
        answers:[
          {text:"Asia", correct:"false"},
          {text:"Australia", correct:"true"},
          {text:"Arctic", correct:"false"},
          {text:"Africa", correct:"false"},
        ]
      }
    ];
      this.questionElement = document.getElementById("question");
      console.log("this...",this.questionElement )
      this.answerButton = document.getElementById("answer-buttons");
      this.nextButton = document.getElementById("next-btn");
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.nextButton.innerHTML = "Next";
      this.showQuestion();
    }

    showQuestion(){
      let currentQuestion = this.questions[this.currentQuestionIndex];
      let questionNo = this.currentQuestionIndex + 1;
      this.questionElement.innerHTML = questionNo + ". " + currentQuestion.
      question;
      currentQuestion.answers.forEach((answer:any) =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        this.answerButton.appendChild(button);
      })
    }

}

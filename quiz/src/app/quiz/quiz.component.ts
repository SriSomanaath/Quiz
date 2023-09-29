import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {


constructor(){}

  questions!:[
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
  },

];
  
}

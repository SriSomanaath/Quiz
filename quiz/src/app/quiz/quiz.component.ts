import { Component, OnInit, AfterViewInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  encapsulation: ViewEncapsulation.None 
})

export class QuizComponent implements AfterViewInit {
  questionElement:any;
  answerButtons:any;
  nextButton:any;
  currentQuestionIndex=0;
  score=0;
  questions: any[] = [];
  

  ngAfterViewInit():void{
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
      this.answerButtons = document.getElementById("answer-buttons");
      this.nextButton = document.getElementById("next-btn");
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.nextButton.innerHTML = "Next";
      this.showQuestion();
    }

    showQuestion(){
      this.resetQuestion();
      let currentQuestion = this.questions[this.currentQuestionIndex];
      let questionNo = this.currentQuestionIndex + 1;
      this.questionElement.innerHTML = questionNo + ". " + currentQuestion.
      question;
      currentQuestion.answers.forEach((answer:any) =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        this.answerButtons.appendChild(button);
        if(answer['correct']){
          button.dataset['correct'] = answer['correct'];
        }
        button.addEventListener("click", this.selectAnswer.bind(this));
      })
    }

    resetQuestion(){
      this.nextButton.style.display = "none";
      while(this.answerButtons.firstChild) {
        this.answerButtons.removeChild(this.answerButtons.firstChild);
      }
    }

    selectAnswer(e:any){
      const selectBtn = e.target;
      console.log("thisssssssssss", selectBtn)
      const isCorrect = selectBtn.dataset.correct == "true";
      if(isCorrect){
        selectBtn.classList.add("correct");
      }
      else{
        selectBtn.classList.add("incorrect");
      }
    }

}

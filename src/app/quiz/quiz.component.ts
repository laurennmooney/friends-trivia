import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questionList: any[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.quizService.getQuestions().subscribe(response => {
      this.questionList = response;
      console.log(response);
    });
  }

}

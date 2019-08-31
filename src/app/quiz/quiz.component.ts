import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questionList: any[];
  userResult: any;
  userAnswers: any;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.quizService.getQuestions().subscribe(response => {
      this.questionList = response;
    });
  }

  onSubmit(form: NgForm) {
    this.userResult = this.quizService.checkAnswer(
      form.value,
      this.questionList,
      form.value.username
    );
    this.quizService.postScore(this.userResult, form.value, this.questionList);
  }
}

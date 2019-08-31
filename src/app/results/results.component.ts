import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  results: any;
  userScore: any;
  userResults: any;
  userChoices: any;
  correctAnswers: any;
  questionAnswers: any;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.results = this.quizService.results();
    this.userScore = this.quizService.userScoreToResultsPage();

    const { username, ...choices } = this.results.choice;
    this.userChoices = Object.values(choices);
    console.log(this.userChoices);
    this.questionAnswers = this.results.question;
    console.log(this.questionAnswers);
  }

  goToScoreboard() {
    this.router.navigateByUrl("/scores");
  }
}

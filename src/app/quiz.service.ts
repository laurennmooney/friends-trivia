import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NgForm, FormsModule } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  questionList: any[];
  userAnswers: any[];
  username: string;
  userScore: number = 0;
  userResult: any;
  scoreBoard: any;

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    let response = this.http.get("http://localhost:7000/questions");
    return response;
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:7000/scores");
  }

  postScore(userResult: object) {
    this.http
      .post("http://localhost:7000/scores", userResult)
      .subscribe(response => {
        this.scoreBoard = response;
      });
  }

  checkAnswer(form: object, questions: any, username: string) {
    this.username = username;

    for (let i = 0; i < questions.length; i++) {
      if (form[i] === questions[i].answer) {
        this.userScore++;
      }
    }
    this.userResult = {
      username: username,
      score: this.userScore
    };
    return this.userResult;
  }
}

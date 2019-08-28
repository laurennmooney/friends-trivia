import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuizService } from './quiz.service';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { ScoresComponent } from './scores/scores.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "quiz", component: QuizComponent },
  { path: "results", component: ResultsComponent },
  { path: "scores", component: ScoresComponent },
  { path: "", redirectTo: "quiz" }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ViewAnswersComponent } from './view-answers/view-answers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'login/:message', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'answers/:question_id', component: ViewAnswersComponent },
  { path: 'answers/:username/:question_id', component: ViewAnswersComponent },
  { path: 'home', component: UserhomeComponent },
  { path: 'home/:username', component: UserhomeComponent },
  { path: 'ask', component: AskQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

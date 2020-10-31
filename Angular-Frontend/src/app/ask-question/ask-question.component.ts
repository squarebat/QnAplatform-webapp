import { Router } from '@angular/router';
import { HomeService } from './../services/home-service/home.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  constructor(private homeService : HomeService, private router: Router) { }

  ngOnInit(): void {
  }
  questionPost(questionString: string) : void {
    this.homeService.postQuestion(questionString).subscribe((question) => {
      console.log(question);
      this.router.navigate(['home']);
    });
  }
}

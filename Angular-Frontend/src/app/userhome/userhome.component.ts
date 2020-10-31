import { ActivatedRoute, Params } from '@angular/router';
import { HomeService } from './../services/home-service/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  public questions: any;
  public answersOfQuestion: any;
  public username: string;
  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.username = params.username;
        //console.log(this.regMessage);
      }
    )
    this.homeService.getQuestions().subscribe((questions: any) => {
      this.questions = questions;
      //console.log(this.questions);      
      for (var i = 0; i < this.questions.length; i++) {
        var index = i;
        this.questions[i].answer = "";
        
        this.homeService.getAnswersOfQuestion(this.questions[i]._id).subscribe((answersOfQuestion: any) => {
          this.answersOfQuestion = answersOfQuestion;
          if(this.answersOfQuestion.length>0)
          {
            this.questions[index].answer = this.answersOfQuestion[0].answer_content;          
          }
          console.log(questions[index]);  
          //console.log(this.answersOfQuestion[0]);
          
        });
        
      }
    });
  }
}

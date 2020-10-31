import { HomeService } from './../services/home-service/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-answers',
  templateUrl: './view-answers.component.html',
  styleUrls: ['./view-answers.component.css']
})
export class ViewAnswersComponent implements OnInit {

  constructor(private homeService: HomeService, private route: ActivatedRoute) { }
  public question_id;
  public username;
  public ansSecVisible: string;
  public btnVisible: string;
  public question_string: string;
  public answers: any;
  ngOnInit(): void {
    this.ansSecVisible = "none";
    this.btnVisible = "inline";

    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.username = params.username;
        this.question_id = params.question_id;
      }
    )
    this.homeService.getQuestionById(this.question_id).subscribe((question: any) => {
      this.question_string = question[0].question_string;
      this.homeService.getAnswersOfQuestion(this.question_id).subscribe((answers :any)=>{
        this.answers = answers;
        console.log(this.answers);
      })
    })
  }
}

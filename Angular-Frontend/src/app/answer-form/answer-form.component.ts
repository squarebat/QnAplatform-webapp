import { Router } from '@angular/router';
import { HomeService } from './../services/home-service/home.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {
  @Input() public questionId
  @Input() private username
  public display : string;
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.display = "inline";
  }
  answerPost(answerContent: string) : void {
    this.homeService.postAnswer(this.questionId, this.username, answerContent).subscribe((answer) => {
      console.log(answer);
      this.router.navigate(['/answers/' + this.questionId]);
    })

  }
}

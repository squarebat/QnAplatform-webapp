import { WebRequestService } from './../web-request/web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private wrs: WebRequestService) { }
  getQuestions()
  {
    return this.wrs.get('questions');
  }
  getQuestionById(questionId: string)
  {
    return this.wrs.get('questions/'+questionId);
  }
  postQuestion(question_string : string)
  {
    return this.wrs.post('questions/',{ question_string });
  }
  getAnswersOfQuestion(questionId: string)
  {
    return this.wrs.get('questions/'+questionId+'/answers');
  }
  postAnswer(questionId: string, username: string, answer_content: string)
  {
    return this.wrs.post('questions/'+questionId+'/answers', {
      questionId,
      username,
      answer_content
    });
  }
  
}

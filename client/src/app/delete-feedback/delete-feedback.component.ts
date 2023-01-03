
import { Component, OnInit } from '@angular/core';
//import {PostDetailService} from '../post-detail.service';
import {DeleteFeedbackService} from 'src/app/services/delete-feedback.service'
import { Feedback } from '../classes/feedback'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-feedback',
  templateUrl: './delete-feedback.component.html',
  styleUrls: ['./delete-feedback.component.css'],
 
})
export class DeleteFeedbackComponent implements OnInit {


  title = 'app';
  postModel = new Feedback('','');
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  showMsg: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private deleteFeedbackService: DeleteFeedbackService,
   // private postDetailService :PostDetailService
  ) { }


  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }


  ngOnInit(): void {
   
  }

  onSubmit() {
    console.log(`At the time of submission following is the data: ${this.postModel.post_title}`)
    this.submitted = true;
    this.deleteFeedbackService.delete(this.postModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
    this.showMsg = true;
  }

}

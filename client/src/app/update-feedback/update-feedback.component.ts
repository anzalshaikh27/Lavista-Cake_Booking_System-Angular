// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-update-feedback',
//   templateUrl: './update-feedback.component.html',
//   styleUrls: ['./update-feedback.component.css']
// })
// export class UpdateFeedbackComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { UpdateFeedbackService } from 'src/app/services/update-feedback.service'

import { Feedback } from './feedback'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.css'],
 
})
export class UpdateFeedbackComponent implements OnInit {

  title = 'app';
  postModel = new Feedback('','');
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  showMsg: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private updateFeedbackService: UpdateFeedbackService 
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
    this.updateFeedbackService.update(this.postModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
    this.showMsg = true;
  }

}

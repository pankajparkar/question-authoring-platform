import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qap-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.css']
})
export class QuestionBuilderComponent implements OnInit {

  constructor() { }

  questionType: string;
  questionTypes: any[] = [
    {id: 1, name: 'Multiple choice question', code: 'mcq'},
    {id: 2, name: 'Submission type question', code: 'submission'},
    {id: 3, name: 'Passage(text) type question', code: 'passage'},
  ]

  ngOnInit() {
    this.questionType = 'mcq'
  }

}

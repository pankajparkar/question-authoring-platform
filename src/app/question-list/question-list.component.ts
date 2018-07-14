import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qap-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: any[];

  constructor() { }

  changed(changes){
    console.log(changes)
  }

  ngOnInit() {
    this.questions = [
      {id: 1, title: 'Question 1', description: 'Test Question 1', type: 'question' },
      {id: 2, title: 'Task 2', description: 'Test Question 2', type: 'task' },
      {id: 3, title: 'Question 3', description: 'Test Question 3', type: 'question' }
    ]
  }

}

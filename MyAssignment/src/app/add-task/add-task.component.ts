import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
//import {TaskserviceService} from '../view-task/taskservice.service'
//import {ViewTask} from '../view-task/view-task'

import { TaskserviceService } from '../view-task/taskservice.service';

import {ViewTask} from '../view-task/view-task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  allArticles: ViewTask[];
 statusCode: number;
 requestProcessing = false;
 articleIdToUpdate = null;
 processValidation = false;
 //Create form
 articleForm = new FormGroup({
  task_id: new FormControl('',Validators.required),
  parentid: new FormControl('',Validators.required),
  task: new FormControl('',Validators.required),
  priority: new FormControl('',Validators.required),
  startdate: new FormControl('',Validators.required),
  enddate: new FormControl('',Validators.required)
 });
 
 //Create constructor to get service instance
 constructor(private articleService: TaskserviceService) {
 }
 ngOnInit() {
 }

 //Fetch all articles
 getAllArticles() {
  this.articleService.getAllArticles().subscribe(data => this.allArticles = data,
    errorCode => this.statusCode = errorCode);
 
}



  //Handle create and update article
 createTask() {
  this.processValidation = true;   
  if (this.articleForm.invalid) {
       return; //Validation failed, exit from method.
  }   
  //Form is valid, now perform create or update
        this.preProcessConfigurations();
        let p1id: number;
        let t1: number;
        let p: number;  
        let pp: number;  
        let parent_id = this.articleForm.get('task_id').value.trim();
        p1id = parseInt(parent_id);
        let parenttask = this.articleForm.get('task').value.trim();	
        let task_id = this.articleForm.get('task_id').value.trim();
         t1 = parseInt(task_id);
        let parentid = this.articleForm.get('parentid').value.trim();	
         p = parseInt(parentid);
        let task = this.articleForm.get('task').value.trim();	
        let priority = this.articleForm.get('priority').value.trim();	
         pp = parseInt(priority);
        let startdate = this.articleForm.get('startdate').value.trim();	
        let enddate = this.articleForm.get('enddate').value.trim();	  
        let article01= new ViewTask(t1, p, task, pp,startdate,enddate,p1id,parenttask);	  

  if (this.articleIdToUpdate === null) {  
    //Handle create article
    let article= new ViewTask(t1, p, task, pp,startdate,enddate,p1id,parenttask);	  
    this.articleService.createArticle(article)
      .subscribe(successCode => {
         // this.statusCode = successCode;
          this.getAllArticles();	
          this.backToCreateArticle();
    },
          errorCode => this.statusCode = errorCode);
  } /*else {  
       //Handle update article
    let article= new ViewTask(task_id, parentid, task, priority,startdate,enddate);	  
    this.articleService.updateArticle(article)
      .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllArticles();	
          this.backToCreateArticle();
    },
          errorCode => this.statusCode = errorCode);	  
  }*/
 }

 //Perform preliminary processing configurations
 preProcessConfigurations() {
  this.statusCode = null;
this.requestProcessing = true;   
}
//Go back from update to create
backToCreateArticle() {
  this.articleIdToUpdate = null;
  this.articleForm.reset();	  
this.processValidation = false;
}
 

}

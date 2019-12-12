import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TaskserviceService } from './taskservice.service';

import {ViewTask} from './view-task';
import { dirtyParentQueries } from '@angular/core/src/view/query';
import { DISABLED } from '@angular/forms/src/model';
//import { get } from 'https';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  providers: [TaskserviceService]
})
export class ViewTaskComponent implements OnInit{

 //Component properties
 disablefldset = true;
 allArticles: ViewTask[];
 tempArticles: ViewTask[];
 statusCode: number;
 requestProcessing = false;
 articleIdToUpdate = null;
 processValidation = false;
 editsave: String;
 //Create form
 articleForm01 = new FormGroup({
  task_id: new FormControl(),
  parentid: new FormControl(),
  task: new FormControl(),
  priority: new FormControl(),
  startdate: new FormControl(),
  enddate: new FormControl()
 });
 
 //Create constructor to get service instance
 constructor(private articleService: TaskserviceService) {
 }
 //Create ngOnInit() and and load articles
 ngOnInit() {

  this.articleService.getAllArticles().subscribe(data => this.allArticles = data);
  this.editsave = "EDIT";
 }

 //Fetch all taskarticles
 getAllArticles() {
      this.articleService.getAllArticles().subscribe(data => this.allArticles = data,

        errorCode => this.statusCode = errorCode);
     
 }
 /*getAllArticles() {
  
  this.articleService.getAllArticles().subscribe(data =>{
    this.tempArticles =data,
  //  errorCode => this.statusCode = errorCode);
    this.tempArticles.forEach(tempObj => {
      tempObj.buttonLabel="EDIT";
      this.allArticles.push (tempObj)
    });
    

  })
   // errorCode => this.statusCode = errorCode);
 
}*/
 

  
   //Update Task
     
   updateTask(item : ViewTask) {
    this.processValidation = true;   
    if (this.articleForm01.invalid) {
         return; //Validation failed, exit from method.
    }   
    //Form is valid, now perform create or update
          this.preProcessConfigurations();
          let pid: Number;
          let pri: Number; 
          let tid: Number;
          let tas : String;
          let sd : String;
          let ed : String;
        if(null == this.articleForm01.get('task_id').value){
           tid = item.task_id;
        }
        else{
          tid =  this.articleForm01.get('task_id').value;
        }

        if(null == this.articleForm01.get('parentid').value){
          pid = item.parentid;
         }
        else{
          pid =  this.articleForm01.get('parentid').value;
        }

        if(null == this.articleForm01.get('task').value){
          tas = item.task;
         }
        else{
         tas =  this.articleForm01.get('task').value;
        }
          
        if(null == this.articleForm01.get('priority').value){
          pri = item.priority;
         }
        else{
         pri =  this.articleForm01.get('priority').value;
        }

        if(null == this.articleForm01.get('startdate').value){
          sd = item.startdate;
         }
        else{
         sd =  this.articleForm01.get('startdate').value;
        }

        if(null == this.articleForm01.get('enddate').value){
          ed = item.enddate;
         }
        else{
         ed =  this.articleForm01.get('enddate').value;
        }
     
         //Handle update article
      let article= new ViewTask(tid, pid, tas, pri,sd,ed,pid,tas);
      this.articleService.updateArticle(article)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllArticles();	
            this.backToCreateArticle();
      },
            errorCode => this.statusCode = errorCode);	  
     }
 

    //Load article by id to edit
    loadArticleToEdit(articleId: string) {
      this.preProcessConfigurations();
      this.articleService.getArticleById(articleId)
        .subscribe(article => {
                this.articleIdToUpdate = article.task_id;   
                this.articleForm01.setValue({ pid : article.parentid, 
                  Task: article.task, priori: article.priority ,Sdate :article.startdate, Edate: article.enddate });
          this.processValidation = true;
          this.requestProcessing = false;   
        },
        errorCode =>  this.statusCode = errorCode);   
   }

   taskEnd(item : ViewTask){
    
    this.articleForm01.disable();
    
    

   }
  
    
   

//Perform preliminary processing configurations
preProcessConfigurations() {
  this.statusCode = null;
this.requestProcessing = true;   
}
//Go back from update to create
backToCreateArticle() {
  this.articleIdToUpdate = null;
  this.articleForm01.reset();	  
this.processValidation = false;
}
 
  name = 'Angular';

            

  dummy(item : ViewTask){


     if(this.editsave === "EDIT")
     {
      this.editsave ="SAVE";
     }
     else{
      this.editsave= "EDIT";
     }
    console.log("uihjiojokjlkj: "+item);
   }


   characters = 
   [{task_id:'Task01', ParentName:'ParentTask01',TaskName:'Unix Patching',Priority:'4',StartDate:'12-12-2019',EndDate:'12-12-2020'},
   {task_id:'Task02', ParentName:'ParentTask02',TaskName:'Windows patching',Priority:'7',StartDate:'12-12-2019',EndDate:'12-12-2020'},
   {task_id:'Task03', ParentName:'ParentTask03',TaskName:'DataBase Patching',Priority:'9',StartDate:'12-12-2019',EndDate:'12-12-2020'},
   {task_id:'Task04', ParentName:'ParentTask04',TaskName:'Linix Patching',Priority:'4',StartDate:'12-12-2019',EndDate:'12-12-2020'},
   ]


   }




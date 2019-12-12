
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterPipe} from './view-task/filter.pipe';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { TaskserviceService } from './view-task/taskservice.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    
  ],
  declarations: [
    AppComponent,
    FilterPipe,
    AddTaskComponent,
    ViewTaskComponent,
  ],
 
  //providers: [{provide: LOCALE_ID, useValue: 'de'}],
  providers: [TaskserviceService, { provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

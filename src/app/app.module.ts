import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';

import { TaskDetail } from './task-detail';
import { CalenderViewComponent } from './calender-view/calender-view.component';
import { SharedService } from './shared.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCardComponent,
    AddNewTaskComponent,
    CalenderViewComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RaddstudentComponent } from './raddstudent/raddstudent.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { Page404Component } from './page404/page404.component';
const routes: Routes =[
  {path: '', component: StudentDetailsComponent},
  {path: 'Studentdetails', redirectTo: '', pathMatch: 'full'},
  {path: 'AddStudent', component: AddStudentComponent},
  {path: 'AddStudentReactive', component: RaddstudentComponent},
  {path: '**', component: Page404Component},
]
@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    RaddstudentComponent,
    NavigationbarComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NavComponent } from './components/nav/nav.component';
import { MentorComponent } from './components/mentor/mentor.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StudentComponent } from './components/student/student.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { StudentsComponent } from './components/students/students.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { CollegeComponent } from './components/college/college.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    NavComponent,
    MentorComponent,
    FooterComponent,
    ProjectsComponent,
    CoursesComponent,
    ProjectsComponent,
    StudentComponent,
    ProfessionalComponent,
    SignupComponent,
    SigninComponent,
    StudentsComponent,
    ProfessionalsComponent,
    CollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

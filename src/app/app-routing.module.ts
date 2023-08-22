import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MentorComponent } from './components/mentor/mentor.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StudentComponent } from './components/student/student.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { CollegeComponent } from './components/college/college.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"mentor",component:MentorComponent},
  {path:"courses",component:CoursesComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"student",component:StudentComponent},
  {path:"professional",component:ProfessionalComponent},
  {path:"college",component:CollegeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

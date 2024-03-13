import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllCoursesComponent } from './modules/course/all-courses/all-courses.component';
import { CourseDetailsComponent } from './modules/course/course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { LecturersComponent } from './modules/user/lecturers/lecturers.component';
import { LoginComponent } from './modules/user/login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { LogOutComponent } from './modules/user/log-out/log-out.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,HomeComponent,AllCoursesComponent,CourseDetailsComponent,RegisterComponent,NavBarComponent,LecturersComponent,LogOutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_pro';
}

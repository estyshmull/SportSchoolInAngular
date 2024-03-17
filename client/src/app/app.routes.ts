import { Routes ,RouterModule} from '@angular/router';
import { AllCoursesComponent } from './modules/course/all-courses/all-courses.component';
import { CourseDetailsComponent } from './modules/course/course-details/course-details.component';
import { HomeComponent } from './home/home.component';
import { LecturersComponent } from './modules/user/lecturers/lecturers.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { LogOutComponent } from './modules/user/log-out/log-out.component';
import { AddCourseComponent } from './modules/course/add-course/add-course.component';

export const routes: Routes = [
 { path: "course-details/:id", component: CourseDetailsComponent },
 { path: "", redirectTo: "home", pathMatch: "full" },
 { path: 'home', component: HomeComponent },
 { path: 'login', component: RegisterComponent },
 { path: 'signUp', component: LoginComponent },
 { path: 'allCourses', component: AllCoursesComponent },
 { path: 'addCourse', component: AddCourseComponent },
 { path: 'lecturers', component: LecturersComponent },
 { path: 'logOut', component: LogOutComponent },
 
];

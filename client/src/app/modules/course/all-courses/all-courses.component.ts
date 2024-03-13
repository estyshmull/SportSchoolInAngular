import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { NavBarComponent } from '../../../nav-bar/nav-bar.component';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { Course } from '../course.model';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CommonModule,CourseDetailsComponent,NavBarComponent,FormsModule],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  
  public selectCourse!:Course
  public courses!: Course[] ;
  private source$: Observable<any> = new Observable((observer) => {
    observer.next("michal&Esty")
    observer.next(2)
    setTimeout(() => {
      observer.next(3)
    }, 3000)
    observer.complete()
    observer.next(4);
  })
  constructor(private router:Router, private courseService: CourseService) {}
  public filteredCourses: Course[] = [];
  public categories: any[] = []; // Assuming you have categories available
  public searchName: string = '';
  public selectedCategory: number | null = null;
  public selectedLearningMethod: Pipe | null = null;

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe({
      next:(res)=>{
        console.log(res);
        this.courses=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
    this.source$.subscribe({
      next:(res)=>{
        console.log(res);
        },
        complete:()=>{
          console.log("finishhhhhh")   
             }
    })
  }
  
  public checkCourses()
  {
    this.courseService.getAllCourses().subscribe({
      next:(res)=>{alert("good courses")},error:(err)=>{
        console.log(err)
      }
    })
  }
  public showDetails(c:Course){
    console.log(c),
    this.selectCourse=c,
    this.router.navigate(["/course-details",c.courseId])
  }


  public filterByCategory(): void {
    if (this.selectedCategory) {
      this.filteredCourses = this.courses.filter(course => course.categoryId === this.selectedCategory);
    } else {
      this.filteredCourses = this.courses;
    }
  }
  
  public filterByLearningMethod(): void {
    if (this.selectedLearningMethod) {
      this.filteredCourses = this.courses.filter(course => {
        if (course.formLearning) {
          // Handle if formLearning exists
          return course.formLearning === this.selectedLearningMethod;
        } else {
          // Handle if formLearning is undefined
          return false;
        }
      });
    } else {
      // Handle if selectedLearningMethod is null
      this.filteredCourses = this.courses;
    }
  }
  
}



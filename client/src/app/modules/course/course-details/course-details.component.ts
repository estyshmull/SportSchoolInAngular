import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  public course!: Course
  private mycourseId!: number
  constructor(private route: ActivatedRoute, private _courseService: CourseService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.mycourseId = param['id'];
      console.log(this.mycourseId)
      this._courseService.getCourseById(this.mycourseId).subscribe({
        next: (res) => {
          this.course = res;
          console.log("course: ", this.course)
        },
        error: (err) => {
          console.log(err)
        }
      })
    })
  }
}

import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../category/category-service.service';
import { Category } from '../../category/category.model';
import { LecturerService } from '../../user/lecturer.service';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import {DateHighLighitDirective} from '../../../highlight-date.directive'

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  isDisabled!: boolean
  course!: Course
  category!: Category
  s!: string[]
  private mycourseId!: number
  constructor(private route: ActivatedRoute, private _lecturerService: LecturerService, private _courseService: CourseService, private router: Router, private _categoryService: CategoryService) {
  }
  ngOnInit(): void {
    console.log("isDisabled: ", this.isDisabled)
    this.route.params.subscribe((param) => {
      console.log(param);
      this.mycourseId = param['id'];
      console.log(this.mycourseId)
      this._courseService.getCourseById(this.mycourseId).subscribe({
        next: (res) => {
          this.course = res;
          console.log("course num: ", this.course.categoryId)
          this.getNameOfCategory()
          console.log("this._lecturerService.lecturerId",this._lecturerService.lecturerId)
          if(!this._lecturerService.isLecturer)
          {console.log("נכנס לאיף"); this.isDisabled=this.course.lecturerId === this._lecturerService.lecturerId;}
          console.log("this.course.lecturerId === this._lecturerService.lecturerId",this.course.lecturerId === this._lecturerService.lecturerId)
          console.log("is dis: " ,this.isDisabled)
        },
        error: (err) => {
          console.log(err)
        }
      })
    })
  }

  public getNameOfCategory() {
    console.log("course.categoryId: ", this.course.syllabus)
    this.s = this.course.syllabus!
    console.log("s: ", this.s)

    this._categoryService.getCategoryById(this.course.categoryId!).subscribe({
      next: (res) => {
        this.category = res
      },
      error(err) {
      },
    })
  }

  public editCourse() {
    console.log("the course: ", this.course)
    this.router.navigate(['/addCourse', this.course])

  }
}

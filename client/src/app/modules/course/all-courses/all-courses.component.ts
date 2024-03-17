import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { NavBarComponent } from '../../../nav-bar/nav-bar.component';
import { CategoryService } from '../../category/category-service.service';
import { Category } from '../../category/category.model';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
// import { ɵAssetUrl } from '@angular/compiler/src/assets';


@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CommonModule, CourseDetailsComponent, NavBarComponent, FormsModule],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {

  public selectCourse!: Course
  public courses!: Course[];
  public filteredCourses: Course[] = [];
  public categories!: Category[];
  public category: Category | undefined;
  public searchName: string = '';
  public selectedCategory: string = '';
  public selectedLearning: string = '';
  constructor(private router: Router, private courseService: CourseService, private _categoryService: CategoryService) { }


  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe({
      next: (res) => {
        console.log(res);
        this.filteredCourses = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
    this._categoryService.getAllCategory().subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res
      }, error: (err) => {
        console.log(err)
      }
    })
    this.onSearchNameChange();
    this.filterByCategory();
  }

  public showDetails(c: Course) {
    console.log(c),
      this.selectCourse = c,
      this.router.navigate(["/course-details", c.courseId])
  }

  public filterByCategory(): void {
    if (this.selectedCategory.length > 0) {
      this._categoryService.getCategoryByName(this.selectedCategory).subscribe(category => {
        this.category = category;
        console.log(category)
        console.log(this.courses)
        this.filteredCourses = this.filteredCourses.filter(course => course.categoryId === this.category?.categoryId)
        console.log(this.filteredCourses)
      });
    }
  }

  filterByLearningMethod(): void {
    this.filteredCourses = this.courses.filter(course => {
      if (course.formLearning && typeof course.formLearning === 'string') {
        return course.formLearning === this.selectedLearning;
      }
      return false;
    });
  }


  public onSearchNameChange(): void {
    if (this.searchName.length > 0) {
      this.filteredCourses = this.filteredCourses.filter(course => course.courseName?.toLowerCase().includes(this.searchName.toLowerCase()));
    } else {
      this.filteredCourses = this.courses;
    }
  }
}

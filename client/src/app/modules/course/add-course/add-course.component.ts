import { NgFor } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../category/category-service.service';

import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit {

  constructor(private _courseService: CourseService, private cdr: ChangeDetectorRef, private _categoryService: CategoryService) { }

  inputs: string[] = [''];
  selectedValue!: string;
  options: any[] = [];

  courseForm = new FormGroup({
    courseName: new FormControl('', Validators.required),
    lucturer: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    numOfLessons: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    inputSyllabus: new FormControl([''], Validators.required),
    formLearning: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required),
  })

  onInputChange(event: any, index: number) {
    const inputValue = (event.target as HTMLInputElement).value;
    //console.log("(event.target as HTMLInputElement).value: ", (event.target as HTMLInputElement).value)
    if ((event.target as HTMLInputElement).value === "") { this.inputs.splice(index, 1); }
    if (inputValue === '' && index !== 0) {
      this.inputs.splice(index, 1); // Remove the current input field
    }

    if (index === this.inputs.length - 1) {
      this.inputs.push(''); // Add a new input field
      console.log("inputs.length after: ", this.inputs.length)
    }
  }

  ngOnInit() {
    console.log("function on init")
    this._categoryService.getAllCategory().subscribe({
      next: (res) => {
        this.options = res.map((item) => {
          console.log("item", item.categoryName)
          console.log("item", item.categoryId)

          return {
            name: item.categoryName,
            description: item.categoryId
          };
        });


        console.log("res of category: ", res)

        console.log("res of category in o: ", this.options)

      },
      error(err) {
        console.log(err)
      },
    })

  };
  c: Course = new Course()

  public checkLucturer(): number {
    return 0

  }

  public addCourse(): void {
    console.log("the course befor:", this.c)

    console.log("add courses work!")
    console.log("category id", this.courseForm.value.categoryId)
    this.c.courseName = this.courseForm.value.courseName?.toString()
    this.c.categoryId != this.courseForm.value.categoryId?.toString()
    this.c.numOfLessons != this.courseForm.value.numOfLessons
    this.c.startDate != this.courseForm.value.startDate
    this.c.formLearning = this.courseForm.value.formLearning?.toString
    this.c.lecturerId = this.checkLucturer()
    this.c.picture = this.courseForm.value.picture?.toString()
    this.c.syllabus != this.courseForm.value.inputSyllabus?.toString

    console.log("the course:", this.c)

    this._courseService.addCourse(this.c).subscribe({
      next: () => { alert("the course add!!") },
      error: (err) => {
        alert("the course is not add")
      }
    })

  }
}

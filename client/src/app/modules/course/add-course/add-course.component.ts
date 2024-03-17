import { NgFor } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../category/category-service.service';
import { LecturerService } from '../../user/lecturer.service';
import { User } from '../../user/user.model';

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

  constructor(private _courseService: CourseService, private cdr: ChangeDetectorRef, private _categoryService: CategoryService,private route:ActivatedRoute,private _lecturerServise:LecturerService) { }

  inputs: string[] = [''];
  selectedValue!: string;
  options: any[] = [];
  s: string[] = []
  paramCourse!:any
  aaa!:Course

  ngOnInit() {
    console.log("function on init")

    this.route.params.subscribe((param) => {
      console.log("parammmmmmmm: ",param)
     this.paramCourse=param
    })
    this.aaa=this.paramCourse!
    console.log("this.aaa: ",this.aaa)
    this._categoryService.getAllCategory().subscribe({
      next: (res) => {
        this.options = res.map((item) => {

          return {
            name: item.categoryName,
            description: item.categoryId
          };
        });
      },
      error(err) {
        console.log(err)
      },
    })
  };

  courseForm = new FormGroup({
    courseName: new FormControl(this.aaa.courseName?this.aaa.courseName:'', Validators.required),
    lecturer: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    numOfLesson: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    formLearning: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required),
  })

  onInputChange(event: any, index: number) {
    const inputValue = (event.target as HTMLInputElement).value;
    //console.log("(event.target as HTMLInputElement).value: ", (event.target as HTMLInputElement).value)
    if ((event.target as HTMLInputElement).value === "") { this.inputs.splice(index, 1); }
    if (inputValue === '' && index !== 0) {
      this.inputs.splice(index, 1); // Remove the current input field
      console.log("inputs arr: ", this.s)
      this.s.splice(index, 1)
      console.log("inputs arr after: ", this.s)

    }

    if (index === this.inputs.length - 1) {
      this.inputs.push(''); // Add a new input field
      console.log("inputs arr: ", this.s)
      this.s.push(inputValue)
      console.log("inputs arr after: ", this.s)
      console.log("inputs.length after: ", this.inputs.length)
    }
  }

  
  c: Course = new Course()
  userL!:User
  public checkLecturer(): any {
    this._lecturerServise.getLecturerById(this.c.lecturerId!).subscribe({
      next: (res)=>{
        this.userL=res
        return this.userL.id
       },
       error(err) {
         alert("the lecturer is not exist!!!")
       },
    })
  }

  public addCourse(): void {

    this.c.courseName = this.courseForm.value.courseName?.toString()
    this.c.categoryId != this.courseForm.value.categoryId?.toString()
    this.c.numOfLesson != this.courseForm.value.numOfLesson
    this.c.startDate != this.courseForm.value.startDate
    this.c.formLearning = this.courseForm.value.formLearning?.toString
    this.c.lecturerId = this.checkLecturer()
    this.c.picture = this.courseForm.value.picture?.toString()
    this.c.syllabus = this.s

    console.log("the course:", this.c)

    this._courseService.addCourse(this.c).subscribe({
      next: () => { alert("the course add!!") },
      error: (err) => {
        alert("the course is not add")
      }
    })

  }
}

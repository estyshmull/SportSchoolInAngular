import { Pipe } from "@angular/core";

export class Course {
  courseId!: number
  courseName?: string
  categoryId?: number
  numOfLesson?: number
  startDate?: string
  syllabus?: string[]
  formLearning?:Pipe
  lecturerId?: number
  picture?: string
}

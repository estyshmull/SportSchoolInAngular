import { Pipe } from "@angular/core";

export class Course {
  courseId!: number
  courseName?: string
  categoryId?: number
  numOfLessons?: number
  startDate?: string
  syllabus?: string[]
  formLearning?: Pipe
  lecturerId?: number
  picture?: string
}

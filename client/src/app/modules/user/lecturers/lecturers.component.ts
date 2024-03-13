import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LecturerService } from '../lecturer.service';
import { User } from '../user.model';


@Component({
  selector: 'app-lecturers',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './lecturers.component.html',
  styleUrl: './lecturers.component.css'
})
export class LecturersComponent {

  constructor(private _lectuerService:LecturerService,private router:Router){}
  useFormLecturer=new FormGroup({
    userName:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  ngOnInit():void{}
  u:User=new User;

  loginLecturer():void{
    this.u.name=this.useFormLecturer.value.userName?.toString(),
    this.u.password=this.useFormLecturer.value.password?.toString(),
    this.u.address="",
    this.u.email="",
    this._lectuerService.getLecturerByNameAndPassword(this.u).subscribe({
      next:(res)=>{
        console.log("the lectuerer exsist")
         this._lectuerService.isLucturer=true; 
      },
      error:(err)=>{
        console.log(err.status)
        if(err.status==300)
          alert("the password incorrect!! try again!")
        else
          this.router.navigate(['/login'],{ queryParams: { name: this.u.name} })
      }
    })
  }
}

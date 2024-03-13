import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _userService: UserService, private router: Router) { }

  userForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  ngOnInit(): void { }

  u: User = new User()


  login(): void {
    this.u.name = this.userForm.value.userName?.toString()
    this.u.password = this.userForm.value.password?.toString()
    this.u.address=""
    this.u.email=""
    this._userService.getUserByNameAndPassword(this.u).subscribe({
      next: (res)=>{
        // this._userService.isLogin=true;
        console.log("the user exist!!")
        this.router.navigate(['/allCourses'])
      },
      error: (err)=>{
        console.log ("the ststus of login",err.status)
        if(err.status==300)
        alert("the password incorrect!! try again!")
        else
        this.router.navigate(['/login'],{ queryParams: { name: this.u.name} })
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router, private route: ActivatedRoute) { }

  userForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    address: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),


  })
  //public user: User = JSON.parse(sessionStorage.getItem('userData'))||undefined;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("name from params", params['name']);
      let userNameElement = document.querySelector('#userName');
      if (userNameElement) {
          userNameElement.innerHTML = params['name'];
      }
    });
   }

  u: User = new User()

  checkAndAddUser(): void {
    this.u.name = this.userForm.value.userName?.toString()
    this.u.address = this.userForm.value.address?.toString()
    this.u.email = this.userForm.value.email?.toString()
    this.u.password = this.userForm.value.password?.toString()

    this._userService.getUserByNameAndPassword(this.u).subscribe({
      next: (res) => {
        this.router.navigate(['/home'])
        // this._userService.isLogin=true;
      },
      error: (err) => {
        alert("the user add")
        console.log("the ststus ", err.status)
        this._userService.save(this.u).subscribe({
          next: (res) => {
            this.router.navigate(['/allcourses'])
          },
          error: (err) => {
            console.log("err: the save is not success");
          }
        })
      }
    })
  }
}
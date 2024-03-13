import { Component } from '@angular/core';

import { UserService } from '../user.service';
// import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-out',
  standalone: true,
  imports: [],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent {

constructor(private _userService:UserService,private router:Router){
  this._userService.logOut(),
  // Swal.fire({
  //   position:"top",
  //   icon:"sucsses",
  //   title:"bay bay",
// showConfirmButton: false,
//       timer: 800
  // })
  console.log("log out!!!!")
  this.router.navigate(["/home"])
}
}

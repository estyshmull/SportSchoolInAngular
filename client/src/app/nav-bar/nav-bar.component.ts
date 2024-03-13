import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../modules/user/user.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  // public myIsLogin!:boolean;
  // private isLoginSubscription!: Subscription;

  // constructor(private _userService: UserService) { }

  // ngOnInit() {
  //   this.isLoginSubscription = this._userService.isLogin$.subscribe(isLogin => {
  //     this.myIsLogin = isLogin;
  //   });
  // }

  // ngOnDestroy() {
  //   this.isLoginSubscription.unsubscribe();
  // }
}

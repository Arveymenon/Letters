import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Shared/Models/user';
import { AuthService } from 'src/app/Shared/Services/Authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  protected user: User
  constructor(
    protected auth: AuthService,
    private router: Router
    ) {

    }

  ngOnInit(){
    console.log('Home')
  }

  goToProfile(){
    this.router.navigateByUrl('/home/profile')
  }
  goToLetters(){
    this.router.navigateByUrl('/home/letters')
  }
  goToFriends(){
    this.router.navigateByUrl('/home/friends')
  }
}

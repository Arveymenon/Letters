import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Shared/Models/user';
import { AuthService } from 'src/app/Shared/Services/Authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  protected user: User
  constructor(
    protected auth: AuthService,
    private router: Router
    ) {
    }
  goToProfile(){
    this.router.navigateByUrl('/home/profile?id='+this.auth.getUser._id)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  viewLetters(){
    this.router.navigateByUrl('friends/letters');
    // this.router.navigateByUrl('view-profile')
  }

}

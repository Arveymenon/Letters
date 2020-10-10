import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Services/Authentication/auth.service';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.page.html',
  styleUrls: ['./letters.page.scss'],
})
export class LettersPage implements OnInit {
  items = [1, 2, 3, 4, 5];
  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    console.log(this.letters)
  }

  ngOnInit() {}

  doReorder(ev: any) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', this.letters);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.letters = ev.detail.complete(this.letters);

    // After complete is called the items will be in the new order
    console.log('After complete', this.letters);
  }
  
  viewLetter(letter){
    this.router.navigateByUrl('/home/letters/view?id='+letter)
  }
  
  writeLetter(){
    this.router.navigateByUrl('/home/letters/write')
  }

  logout(){
    this.auth.logout()
  }

  letters = [
        {
        "message": "<div style='color: red'>1 Hey bro!<br>How are you man! Been a while since I wrote to you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co </div>",
         "from": {
             "id": "2346576879809d7f87e0g1",
             "handle": "Me",
             "name": "Someone",
             "mobile": "9902807002",
             "privacy" : {
                 "show_name": true,
                 "display_pic": true,
                 "show_interests": true,
                 "show_description": true
             }
            }
        },
        {
          "message": "<div>2 Hey bro!<br>How are you man! Been a while since I wrote to you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</div>",
          "from": {
             "id": "2346576879809d7f87e0g2",
             "handle": "Me",
             "name": "Someone",
             "mobile": "9902807002",
             "privacy" : {
                 "show_name": true,
                 "display_pic": true,
                 "show_interests": true,
                 "show_description": true
             }
          }
        },
        {
          "message": "<div>3 Hey bro!<br>How are you man! Been a while since I wrote to you Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</div>",
          "from": {
             "id": "2346576879809d7f87e0g3",
             "handle": "Me",
             "name": "Someone",
             "mobile": "9902807002",
             "privacy" : {
                 "show_name": true,
                 "display_pic": true,
                 "show_interests": true,
                 "show_description": true
             }
            }
        }
    ]
}

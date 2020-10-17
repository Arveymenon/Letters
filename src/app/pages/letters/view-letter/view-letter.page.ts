import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-letter',
  templateUrl: './view-letter.page.html',
  styleUrls: ['./view-letter.page.scss'],
})
export class ViewLetterPage implements OnInit {

  sentBy: string = 'Arvey'
  message: string = "<div style='color: red'>1 Hey bro!<br>How are you man! Been a while since I wrote to you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co </div>"
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastService } from 'src/app/Shared/Services/Toast/toast.service';

@Component({
  selector: 'app-write-letter',
  templateUrl: './write-letter.page.html',
  styleUrls: ['./write-letter.page.scss']
})
export class WriteLetterPage implements OnInit {

  public sendTo = new FormControl()
  public letter = new FormControl()
  constructor(private toast: ToastService) { }

  ngOnInit() {
  }

  public sendLetter(){
    console.log(this.sendTo.value, this.letter.value)
    this.toast.simpletoast('Letter sent successfully')
  }

}

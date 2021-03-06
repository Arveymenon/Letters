import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastService } from 'src/app/Shared/Services/Toast/toast.service';

@Component({
  selector: 'app-write-letter',
  templateUrl: './write-letter.page.html',
  styleUrls: ['./write-letter.page.scss']
})
export class WriteLetterPage implements OnInit {

  protected sendTo = new FormControl()
  protected letter = new FormControl()
  constructor(private toast: ToastService) { }

  ngOnInit() {
  }

  protected sendLetter(){
    console.log(this.sendTo.value, this.letter.value)
    this.toast.simpletoast('Letter sent successfully')
  }

}

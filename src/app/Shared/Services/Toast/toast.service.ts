import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastCtrl: ToastController) { }

  async simpletoast(message: any){
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }
}
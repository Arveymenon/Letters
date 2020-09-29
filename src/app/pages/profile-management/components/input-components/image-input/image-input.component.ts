import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { MediaUploadService } from 'src/app/Shared/Services/MediaUpload/media-upload.service';
import { ToastService } from 'src/app/Shared/Services/Toast/toast.service';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
})
export class ImageInputComponent implements OnInit {
  // image: String = `https://avatars3.githubusercontent.com/u/1652066?s=400&v=4`
  image: String;
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private toast: ToastService,
    private mediaUpload: MediaUploadService) { }

  ngOnInit() {}

  async uploadImageOption(){
  const actionSheet = await this.actionSheetCtrl.create({
      header: 'Choose Attachment Source',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            console.log('select from camera')
            this.mediaUpload.selectFromCamera().then(image=>{
              console.log(image)
            })
          }
        },{
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            console.log('select from gallery')
            this.mediaUpload.selectFromGallery().then(image=>{
              // A base 64 image
              console.log(image)
            })
            // this.selectFromGallery();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            this.toast.simpletoast('No Image Added');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}

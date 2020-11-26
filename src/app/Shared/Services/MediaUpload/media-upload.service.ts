import { Injectable } from '@angular/core';

import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@Injectable({
  providedIn: 'root',
})
export class MediaUploadService {

  private file: File
  constructor(
    public imagePicker: ImagePicker,
    private camera: Camera,
    private base64: Base64
    // public webview: WebView,
    ) { }
    
  uploadImage(image, name?: String){
     
  }
    
  
  selectFromGallery(){
    return new Promise((resolve,reject)=>{
      console.log('started');
      var options = {
        maximumImagesCount: 1
      }
      // var imagePicker: ImagePicker
      this.imagePicker.getPictures(options).then((result) => {
        console.log(result)
        // base64 Image
        let imageURIs = result[0];
        
        resolve(imageURIs)
      }, (err) => {
        console.log(err);
        console.log('Error Occured');
      });
      
      resolve('imagePath')
    })
  } 
  
  // selectFromCamera = new Promise((resolve,reject)=>{
    //     resolve('imagePath')
    //   })
    
    // openCamera(){

    //   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
    //     result => {
    //       alert(result.hasPermission);
    //       if(!result.hasPermission) {
    //         this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    //         .then( cam => {
    //           alert('permission result '+ JSON.stringify(cam) );
    //           this.selectFromCamera();
    //         })
    //         .catch( error => {
    //           alert('permission error occured '+ JSON.stringify(error) );
    //         });
    //       } else {
    //         this.selectFromCamera();
    //       }
    //     },
    //     err => {
    //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA); 
    //     });
    // }


    selectFromCamera() {
      return new Promise((resolve,reject)=>{
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        console.log('Select pic')
        this.camera.getPicture(options).then(async (imageData) => {
          console.log(imageData);
          await this.pathToBase64(imageData).then(async path=>{
              let base64 = path
              console.log(base64)
              let localFilePath = imageData
              let filename = new Date()

              console.log(filename, imageData)

              await resolve({localFilePath, base64, filename})

            });
          }, (err) => {
              console.log(err);
          });
        });
    }

    pathToBase64(filePath){
      return new Promise((res,rej)=>{
        this.base64.encodeFile(filePath).then((base64File: string) => {
          console.log('pathToBase64')
          console.log(base64File);
          res(base64File)
        }, (err) => {
          rej(err)
        });
      })
    }

    // base64 to File
    dataURLtoBlob(base64, filename) {
      if(base64){
        var arr = base64.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], filename);
      }
    }
    

    getLocalPath(imageData){
      return new Promise((resolve, reject)=>{
        // this.file.resolveLocalFilesystemUrl(imageData).then(fileEntry => {
        //     console.log(fileEntry)
        //     this.printURIs = this.webview.convertFileSrc(fileEntry.nativeURL);
        //     console.log(this.printURIs);
        //   })
        //   .catch(err => console.log(err));
        // resolve('path')
      })
    }
}

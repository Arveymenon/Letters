import { Injectable } from '@angular/core';

import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { IFile } from '@ionic-native/file'

@Injectable({
  providedIn: 'root',
})
export class MediaUploadService {

  private file: File
  constructor(
    public imagePicker: ImagePicker,
    private camera: Camera,
    private base64: Base64,
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
    
    selectFromCamera() {
      return new Promise((resolve,reject)=>{
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        
        this.camera.getPicture(options).then((imageData) => {
          console.log(imageData);
          let imageURIs = imageData;
          
          let base64 = this.pathToBase64(imageURIs),
              filename = new Date(),
              blob = this.dataURLtoBlob(base64,filename)

          console.log(filename, imageURIs)
          console.log(blob)

            resolve({blob,base64, filename})
            }, (err) => {
              console.log(err);
          });
        });
    }

    pathToBase64(filePath){
      this.base64.encodeFile(filePath).then((base64File: string) => {
        console.log('pathToBase64')
        console.log(base64File);
        return base64File
      }, (err) => {
        console.log(err);
      });
    }

    // base64 to File
    dataURLtoBlob(base64, filename) {
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

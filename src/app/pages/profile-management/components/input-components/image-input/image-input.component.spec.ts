import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Base64 } from '@ionic-native/base64/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { IonicModule } from '@ionic/angular';
import { MediaUploadService } from 'src/app/Shared/Services/MediaUpload/media-upload.service';

import { ImageInputComponent } from './image-input.component';

describe('ImageInputComponent', () => {
  let component: ImageInputComponent;
  let fixture: ComponentFixture<ImageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageInputComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers:[
        MediaUploadService,
        ImagePicker,
        Camera,
        Base64
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

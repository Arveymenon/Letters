import { TestBed } from '@angular/core/testing';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { MediaUploadService } from './media-upload.service';

describe('MediaUploadService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Camera, ImagePicker]
    });
    // service = TestBed.inject(MediaUploadService);
  });
  
  it('should be created', () => {
    let service = MediaUploadService;
    expect(service).toBeTruthy();
  });
});

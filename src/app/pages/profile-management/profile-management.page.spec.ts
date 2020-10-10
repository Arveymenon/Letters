import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';

import { ProfileManagementPage } from './profile-management.page';

describe('ProfileManagementPage', () => {
  let component: ProfileManagementPage;
  let fixture: ComponentFixture<ProfileManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileManagementPage ],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule
      ],
      providers:[
        ImagePicker,
        Camera
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CommonModule } from "@angular/common";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { Camera } from "@ionic-native/camera/ngx";
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { IonicModule } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";
import { ProfileDetailsComponent } from "./components/profile-details/profile-details.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";

import { ProfileManagementPage } from "./profile-management.page";

describe("ProfileManagementPage", () => {
  let component: ProfileManagementPage;
  let fixture: ComponentFixture<ProfileManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileManagementPage],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        IonicStorageModule.forRoot(),
        RouterTestingModule,
      ],
      providers: [ImagePicker, Camera, HttpClient, HttpHandler, Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

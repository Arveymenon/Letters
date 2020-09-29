import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileManagementPage } from './profile-management.page';

describe('ProfileManagementPage', () => {
  let component: ProfileManagementPage;
  let fixture: ComponentFixture<ProfileManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileManagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewLetterPage } from './view-letter.page';

describe('ViewLetterPage', () => {
  let component: ViewLetterPage;
  let fixture: ComponentFixture<ViewLetterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLetterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewLetterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

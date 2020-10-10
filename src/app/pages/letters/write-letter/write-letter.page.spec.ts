import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WriteLetterPage } from './write-letter.page';

describe('WriteLetterPage', () => {
  let component: WriteLetterPage;
  let fixture: ComponentFixture<WriteLetterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteLetterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WriteLetterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

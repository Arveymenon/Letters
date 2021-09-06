import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SafeHtmlPipe } from 'src/app/Shared/Pipes/SafeHtmlPipe/safe-html.pipe';

import { ViewLetterPage } from './view-letter.page';

describe('ViewLetterPage', () => {
  var component: ViewLetterPage;
  let fixture: ComponentFixture<ViewLetterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLetterPage, SafeHtmlPipe ],
      imports: [
        IonicModule.forRoot()
      ],
      providers: [
        SafeHtmlPipe
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewLetterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

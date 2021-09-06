import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { SafeHtmlPipe } from 'src/app/Shared/Pipes/SafeHtmlPipe/safe-html.pipe';

import { LettersPage } from './letters.page';

describe('LettersPage', () => {
  let component: LettersPage;
  let fixture: ComponentFixture<LettersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LettersPage,
        SafeHtmlPipe
       ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LettersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

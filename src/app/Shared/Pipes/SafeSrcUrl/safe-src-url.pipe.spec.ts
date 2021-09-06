import { DomSanitizer } from '@angular/platform-browser';
import { SafeSrcUrlPipe } from './safe-src-url.pipe';

describe('SafeSrcUrlPipe', () => {
  it('create an instance', () => {
    let sanitizer: DomSanitizer;
    const pipe = new SafeSrcUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});

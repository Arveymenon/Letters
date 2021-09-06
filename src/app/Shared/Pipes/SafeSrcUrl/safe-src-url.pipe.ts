import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeSrcUrl'
})
export class SafeSrcUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}
  transform(value: string, ...args: unknown[]): SafeUrl {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}

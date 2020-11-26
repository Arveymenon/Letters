import { ToastService } from '../../Services/Toast/toast.service';
import { EmailStringValidatorDirective } from './email-string-validator.directive';

describe('EmailStringValidatorDirective', () => {
  it('should create an instance', () => {
    let toast: ToastService
    const directive = new EmailStringValidatorDirective(toast);
    expect(directive).toBeTruthy();
  });
});

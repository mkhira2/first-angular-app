import { Component } from '@angular/core';

// component created using inline template and styles
@Component({
  selector: 'app-warning-alert',
  template: '<h3>Warning! Proceed with caution.</h3>',
  styles: ['h3 { color: red; }']
})
export class WarningAlertComponent {

}
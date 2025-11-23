import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  address = '123, MG Road, Koramangala, Bangalore, Karnataka 560034, India';
  phone1 = '+91 98765 43210';
  phone2 = '+91 98765 43211';
  email1 = 'KUWY2@example.com';
  email2 = 'W0Lb3@example.com';

}

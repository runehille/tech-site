import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../../shared/ui/footer.component';

@Component({
  selector: 'app-contact',
  template: `
    <ion-content class="ion-padding">
      <form
        class="contact-form"
        [formGroup]="contactForm"
        (ngSubmit)="onSubmit()"
      >
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input formControlName="name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input type="email" formControlName="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Message</ion-label>
          <ion-textarea formControlName="message"></ion-textarea>
        </ion-item>
        <ion-button type="submit" expand="full" [disabled]="!contactForm.valid"
          >Send</ion-button
        >
      </form>
    </ion-content>
    <app-footer></app-footer>
  `,
  styles: [
    `
      .contact-form {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        max-width: 700px;
        margin: 0 auto;

        ion-item {
          --background: transparent;
          --border-color: var(--primary-color);
          --border-style: solid;
          --border-width: 0 0 1px 0;
          --padding-start: 0;
          --padding-end: 0;
          margin-bottom: 20px;

          ion-label {
            --color: var(--primary-color);
          }

          ion-input,
          ion-textarea {
            --color: #333;
            --placeholder-color: #888;
          }
        }
      }
    `,
  ],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, FooterComponent],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form data:', this.contactForm.value);
      // Since this is a fictional form, we are just logging the data.
      // In a real application, here is where you would send the data to your backend.
    }
  }
}

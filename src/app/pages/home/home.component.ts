import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../../shared/ui/footer.component';

@Component({
  selector: 'app-home',
  template: `
    <ion-content>
      <div class="hero-section">
        <h1>Welcome to HilleTech Solutions</h1>
        <p>Your trusted partner in innovative software solutions</p>
        <ion-button class="cta-button" color="secondary">Learn More</ion-button>
      </div>
      <app-footer></app-footer>
    </ion-content>
  `,
  styles: [
    `
      .hero-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        background: url('/assets/background-office.png') no-repeat center
          center/cover;

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #fff;
        }

        .cta-button {
          opacity: 0.9;
        }
      }
    `,
  ],
  standalone: true,
  imports: [IonicModule, FooterComponent],
})
export class HomeComponent {}

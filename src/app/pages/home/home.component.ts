import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/ui/footer.component';

@Component({
  selector: 'app-home',
  template: `
    <ion-content>
      <div class="hero-section">
        <h1>Welcome to Software Company</h1>
        <p>Your trusted partner in innovative software solutions</p>
        <ion-button color="secondary" routerLink="/solutions"
          >Learn More</ion-button
        >
      </div>
      <app-footer></app-footer>
    </ion-content>
  `,
  styles: [
    `
      .hero-section {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        background: url('/assets/background-office.png') no-repeat center
          center/cover;
      }

      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
      }

      h1 {
        z-index: 1;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #fff;
      }

      p {
        z-index: 1;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        color: #fff;
      }
    `,
  ],
  standalone: true,
  imports: [IonicModule, RouterLink, FooterComponent],
})
export class HomeComponent {}

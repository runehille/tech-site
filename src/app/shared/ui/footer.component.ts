import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  template: `
    <ion-footer>
      <ion-toolbar color="primary">
      <div class="app-container">
        <ion-row class="ion-align-items-center">
          <!-- Linke-seksjon -->
          <ion-col size="6">
            <div class="footer-links">
              <a routerLink="/">Home</a>
              <a routerLink="/about-us">About Us</a>
              <a routerLink="/solutions">Solutions</a>
              <!-- ... andre lenker -->
            </div>
          </ion-col>

          <!-- Sosiale medier ikoner -->
          <ion-col size="6" class="ion-text-right">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <!-- ... andre sosiale medier ikoner -->
          </ion-col>
        </ion-row>

        <!-- Copyright tekst -->
        <div class="copyright">
          © 2023 HilleTech Solutions. All rights reserved.
        </div>
        </div>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: [
    `
      .footer-links {
        display: flex;
        gap: 20px; // Avstand mellom lenkene

        a {
          color: white; // Endre til ønsket farge
          text-decoration: none; // Fjerner underlinje
        }
      }

      .copyright {
        text-align: center;
        font-size: 0.9rem;
        color: white; // Endre til ønsket farge
        margin-top: 10px;
      }

      ion-icon {
        font-size: 24px;
        margin-left: 10px;
        color: white; // Endre til ønsket farge
      }
    `,
  ],
  standalone: true,
  imports: [IonicModule],
})
export class FooterComponent {}

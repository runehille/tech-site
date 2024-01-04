import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  template: `
    <ion-footer>
      <ion-toolbar color="primary">
        <ion-row class="ion-padding">
          <ion-col size="6">
            <div class="footer-links">
              <a routerLink="/">Home</a>
              <a routerLink="/about-us">About</a>
              <a routerLink="/solutions">Solutions</a>
            </div>
          </ion-col>

          <ion-col size="6" class="ion-text-right">
            <a href="https://github.com/runehille"
              ><ion-icon name="logo-github"></ion-icon
            ></a>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
          </ion-col>
        </ion-row>

        <div class="copyright">
          © 2024 Software Company. All rights reserved.
        </div>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: [
    `
      .footer-links {
        display: flex;
        gap: 15px;

        a {
          color: white;
          text-decoration: none;
        }
      }

      .copyright {
        text-align: center;
        font-size: 0.9rem;
        color: white;
        margin-top: 10px;
      }

      ion-icon {
        font-size: 24px;
        margin-left: 10px;
        color: white;
      }
    `,
  ],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class FooterComponent {}

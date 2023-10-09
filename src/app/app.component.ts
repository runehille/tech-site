import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './shared/ui/footer.component';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <!-- NavBar (includes both mobile and desktop navigation) -->
      <ion-header>
        <ion-toolbar fixed color="primary">
          <!-- Menu Button (visible on mobile) -->
          <ion-buttons slot="end">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>

          <!-- Site Title -->
          <ion-title> HilleTech Solutions </ion-title>

          <!-- Desktop Navigation (visible on desktop) -->
          <div class="desktop-nav" slot="end">
            <ion-button routerLink="/">Home</ion-button>
            <ion-button routerLink="/about-us">About Us</ion-button>
            <ion-button routerLink="/solutions">Solutions</ion-button>
            <!-- ... other links -->
            <ion-button fill="solid" color="secondary" routerLink="/contact">
              Contact Us
            </ion-button>
          </div>
        </ion-toolbar>
      </ion-header>

      <!-- Side Menu (for mobile) -->
      <ion-menu side="end" contentId="main-content">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item routerLink="/">Home</ion-item>
            <ion-item routerLink="/about-us">About Us</ion-item>
            <ion-item routerLink="/solutions">Solutions</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>

      <!-- Main Content Area -->
      <ion-content>
        <ion-router-outlet id="main-content"></ion-router-outlet>
      </ion-content>
    </ion-app>
  `,
  styles: [
    `
      /* Gjemmer desktop-nav (horisontal NavBar) for små skjermer */
      .desktop-nav {
        display: none;
        padding-right: 10px;
      }

      /* Viser desktop-nav og skjuler menyknappen for store skjermer */
      @media (min-width: 800px) {
        .desktop-nav {
          display: flex;
        }

        ion-menu-button {
          display: none;
        }
      }

      .app-container {
        max-width: 1200px; // Bruk ønsket maksbredde
        margin: 0 auto; // Dette vil sentrere innholdet
        padding: 0 20px; // Liten padding på sidene for å unngå at innholdet klistrer seg til kantene på små skjermer
      }
    `,
  ],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FooterComponent,
  ],
})
export class AppComponent {}

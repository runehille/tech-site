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
            <ion-button fill="solid" color="secondary" routerLink="/contact">
              Contact Us
            </ion-button>
          </div>
        </ion-toolbar>
      </ion-header>

      <!-- Side Menu (for mobile) -->
      <ion-menu side="end" contentId="main-content" swipeGesture="false">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
            <ion-item slot="end" (click)="closeMenu()" color="primary">
              <ion-icon name="close"></ion-icon>
            </ion-item>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item routerLink="/" (click)="closeMenu()">Home</ion-item>
            <ion-item routerLink="/about-us" (click)="closeMenu()"
              >About</ion-item
            >
            <ion-item (click)="closeMenu()" routerLink="/solutions"
              >Solutions</ion-item
            >
            <ion-item (click)="closeMenu()" routerLink="/contact"
              >Contact</ion-item
            >
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
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
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
export class AppComponent {
  closeMenu() {
    const menu = document.querySelector('ion-menu');
    menu!.close();
  }
}

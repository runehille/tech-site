import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../../shared/ui/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  template: `
    <ion-content>
      <div class="app-container">
        <div class="hero">
          <h1 class="ion-text-center">HilleTech Solutions</h1>
          <p class="ion-text-center">
            We are a software development company that specializes in building
            custom software solutions for our clients.
          </p>
          <ion-button routerLink="/contact"> Contact Us </ion-button>
        </div>

        <div class="content">
          <ion-grid>
            <ion-row>
              <ion-col size="12" size-md="6">
                <h2>Our Mission</h2>
                <p>
                  Our mission is to provide our clients with the best software
                  solutions possible. We do this by working closely with our
                  clients to understand their needs and then developing
                  solutions that meet those needs.
                </p>
              </ion-col>
              <ion-col size="12" size-md="6">
                <h2>Our Vision</h2>
                <p>
                  Our vision is to be the leading software development company
                  in the world. We want to be known for our high quality
                  software solutions and our excellent customer service.
                </p>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </div>
    </ion-content>
    <app-footer></app-footer>
  `,
  styles: [
    `
      .hero {
        position: relative;
        padding: 50px 0;
        margin-top: 10px;
        text-align: center;
        background: url('/assets/background-abstract.png') no-repeat center
          center;
        background-size: cover;
        color: white;
      }

      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
      }

      .content {
        padding: 50px 0;
      }

      h1,
      p {
        z-index: 1;
        position: relative;
      }
    `,
  ],
  standalone: true,
  imports: [IonicModule, RouterLink, FooterComponent],
})
export class AboutUsComponent {}

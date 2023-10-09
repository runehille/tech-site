import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/ui/footer.component';

@Component({
  selector: 'app-solutions',
  template: `
    <ion-content>
      <div class="app-container">
        <h2>Our Solutions</h2>
        <p>
          At HilleTech Solutions, we offer a range of cutting-edge software
          products and services tailored to your business needs.
        </p>
        <div class="solution-cards">
          <ion-card *ngFor="let solution of solutions">
            <ion-img [src]="solution.imagePath"></ion-img>
            <ion-card-header>
              <ion-card-title>{{ solution.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>{{ solution.description }}</p>
            </ion-card-content>
          </ion-card>
        </div>
        <div class="space"></div>
      </div>
      <app-footer></app-footer>
    </ion-content>
  `,
  styles: [
    `
      ion-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--background-color);
      }

      .app-container {
        padding: 50px 10px;
        text-align: center;
        min-height: 100vh;
      }

      .solution-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, auto));
        gap: 1rem;
        padding: 2rem;
        justify-content: center;
      }

      h2 {
        color: var(--primary-color);
        font-size: 2.5rem;
        font-weight: 500;
        text-align: center;
        margin-bottom: 2rem;
      }

      ion-card {
        margin: 0 auto;
        max-width: 450px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
        }
      }

      ion-card-header {
        background-color: var(--primary-color);
        color: white;

        ion-card-title {
          font-weight: 600;
        }
      }

      ion-card-content {
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.7);
      }

      ion-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      @media only screen and (min-width: 900px) {
        .solution-cards {
          grid-template-columns: repeat(
            2,
            minmax(350px, 1fr)
          ); // Dette vil tvinge bare 2 kort i bredden
        }
      }
    `,
  ],
  standalone: true,
  imports: [IonicModule, CommonModule, FooterComponent],
})
export class SolutionsComponent {
  solutions = [
    {
      title: 'Software Development',
      description:
        'Bespoke software solutions tailored to your business needs.',
      imagePath: '/assets/icon-bulb-green.png',
    },
    {
      title: 'Cloud Integrations',
      description:
        'Seamless integration of cloud services to boost your business operations and data storage capabilities.',
      imagePath: '/assets/icon-cloud-lightblue.png',
    },
    {
      title: 'Web Development',
      description:
        'Modern web solutions that provide rich user experiences across all devices.',
      imagePath: '/assets/icon-laptop-blue.png',
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Harness the power of artificial intelligence to gain insights, automate tasks, and drive innovation.',
      imagePath: '/assets/icon-megaphone-orange.png',
    },
  ];
}

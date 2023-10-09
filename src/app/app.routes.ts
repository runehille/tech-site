import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { SolutionsComponent } from 'src/app/pages/solutions/solutions.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';

export const routes: Routes = [
  { path: '**', redirectTo: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'solutions', component: SolutionsComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
];

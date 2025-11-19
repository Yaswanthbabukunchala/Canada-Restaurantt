import { Routes } from '@angular/router';

import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Canada Restaurant · Home'
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Canada Restaurant · Menu'
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    title: 'Canada Restaurant · Feedback'
  },
  {
    path: '**',
    redirectTo: ''
  }
];


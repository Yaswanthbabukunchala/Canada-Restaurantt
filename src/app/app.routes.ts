import { Routes } from '@angular/router';

import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'FLAVOUR CAFÉ · Home'
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'FLAVOUR CAFÉ · Menu'
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    title: 'FLAVOUR CAFÉ · Feedback'
  },
  {
    path: '**',
    redirectTo: ''
  }
];


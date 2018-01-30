import {Routes} from '@angular/router';

import {SignInComponent} from './components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HomeComponent} from './components/home/home.component';




export const AppRoutes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  { path: '**',
    component: PageNotFoundComponent
  },
  { path: 'app-home',
  component: HomeComponent
},
];

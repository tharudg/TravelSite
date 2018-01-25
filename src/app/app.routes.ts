import {Routes} from '@angular/router';

import {SignInComponent} from './components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';




export const AppRoutes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  { path: '**',
    component: PageNotFoundComponent
  },
];

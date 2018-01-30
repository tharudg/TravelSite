import {Routes} from '@angular/router';

import {SignInComponent} from './components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';




export const AppRoutes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'about-us',
    component: ContactUsComponent,
  },
  { path: '**',
    component: PageNotFoundComponent
  },
];

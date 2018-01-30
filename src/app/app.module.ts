import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routes";

import { BaseCaller } from "./caller/caller.basic";
import { CallerPath } from "./caller/caller.path";

import { DateHelper } from './helper/date.helper';
import { NotificationHelper } from './helper/notification.helper';
import { AuthCaller } from './caller/auth.caller';
import { AuthStore } from './store/auth.store';

// import { BreadcrumbsComponent } from './components/shared/breadcrumbs.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { CarouselModule } from 'angular4-carousel';


@NgModule({
  declarations: [
    AppComponent,
    // BreadcrumbsComponent,
    SignInComponent,
    PageNotFoundComponent,
    MainContainerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent

  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    SuiModule,
    CarouselModule
  ],
  exports: [ RouterModule ],
  providers: [
    /**
     * Calllers
     */
    BaseCaller,
    CallerPath,
    AuthCaller,
      /**
     * Store
     */
    AuthStore,
    /**
     * Helpers
     */
    DateHelper,
    NotificationHelper,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

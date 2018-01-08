import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routes";

import { BaseCaller } from "./caller/caller.basic";
import { CallerPath } from "./caller/caller.path";

import { DateHelper } from './helper/date.helper';
import { NotificationHelper } from './helper/notification.helper';
import { AuthCaller } from './caller/auth.caller';
import { AuthStore } from './store/auth.store';


import { SignInComponent } from './components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainContainerComponent } from './components/main-container/main-container.component';







@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    PageNotFoundComponent,
    MainContainerComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    NgZorroAntdModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    SuiModule,
    NgZorroAntdModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [ RouterModule ],
  providers: [

    { provide: NZ_LOCALE, useValue: enUS },
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

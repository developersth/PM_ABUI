import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CarService } from './shared/services/carservice';
import { CountryService } from './shared/services/countryservice';
import { EventService } from './shared/services/eventservice';
import { NodeService } from './shared/services/nodeservice';

import { AppConfigService } from './shared/services/appconfigservice';
import { CustomerService } from './shared/services/customerservice';
import { IconService } from './shared/services/iconservice';
import { PhotoService } from './shared/services/photoservice';
import { ProductService } from './shared/services/productservice';

import { LandingModule } from './shared/pages/landing/landing.module';
import { AppMainComponent } from './app.main.component';
import { AppConfigModule } from './shared/config/app.config.module';
import { AppFooterComponent } from './shared/layout/footer/app.footer.component';
import { AppMenuModule } from './shared/layout/menu/app.menu.module';
import { AppNewsModule } from './shared/layout/news/app.news.module';
import { AppTopbarModule } from './shared/layout/topbar/app.topbar.module';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
@NgModule({
    declarations: [AppComponent, AppFooterComponent, AppMainComponent],
    imports: [TableModule,InputTextModule,FormsModule, ReactiveFormsModule, AppRoutingModule, AppNewsModule, HttpClientModule, BrowserAnimationsModule, LandingModule, AppConfigModule, AppTopbarModule, AppMenuModule],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, CarService, CountryService, EventService, NodeService, IconService, CustomerService, PhotoService, AppConfigService, ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {}
